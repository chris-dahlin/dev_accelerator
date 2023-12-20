import csv
import itertools
import sys

PROBS = {

    # Unconditional probabilities for having gene
    "gene": {
        2: 0.01,
        1: 0.03,
        0: 0.96
    },

    "trait": {

        # Probability of trait given two copies of gene
        2: {
            True: 0.65,
            False: 0.35
        },

        # Probability of trait given one copy of gene
        1: {
            True: 0.56,
            False: 0.44
        },

        # Probability of trait given no gene
        0: {
            True: 0.01,
            False: 0.99
        }
    },

    # Mutation probability
    "mutation": 0.01
}


def main():

    # Check for proper usage
    if len(sys.argv) != 2:
        sys.exit("Usage: python heredity.py data.csv")
    people = load_data(sys.argv[1])

    # Keep track of gene and trait probabilities for each person
    probabilities = {
        person: {
            "gene": {
                2: 0,
                1: 0,
                0: 0
            },
            "trait": {
                True: 0,
                False: 0
            }
        }
        for person in people
    }
    print(probabilities)
    # Loop over all sets of people who might have the trait
    names = set(people)
    for have_trait in powerset(names):

        # Check if current set of people violates known information
        fails_evidence = any(
            (people[person]["trait"] is not None and
             people[person]["trait"] != (person in have_trait))
            for person in names
        )
        if fails_evidence:
            continue

        # Loop over all sets of people who might have the gene
        for one_gene in powerset(names):
            for two_genes in powerset(names - one_gene):

                # Update probabilities with new joint probability
                p = joint_probability(people, one_gene, two_genes, have_trait)
                update(probabilities, one_gene, two_genes, have_trait, p)

    # Ensure probabilities sum to 1
    normalize(probabilities)

    # Print results
    for person in people:
        print(f"{person}:")
        for field in probabilities[person]:
            print(f"  {field.capitalize()}:")
            for value in probabilities[person][field]:
                p = probabilities[person][field][value]
                print(f"    {value}: {p:.4f}")


def load_data(filename):
    """
    Load gene and trait data from a file into a dictionary.
    File assumed to be a CSV containing fields name, mother, father, trait.
    mother, father must both be blank, or both be valid names in the CSV.
    trait should be 0 or 1 if trait is known, blank otherwise.
    """
    data = dict()
    with open(filename) as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = row["name"]
            data[name] = {
                "name": name,
                "mother": row["mother"] or None,
                "father": row["father"] or None,
                "trait": (True if row["trait"] == "1" else
                          False if row["trait"] == "0" else None)
            }
    return data


def powerset(s):
    """
    Return a list of all possible subsets of set s.
    """
    s = list(s)
    return [
        set(s) for s in itertools.chain.from_iterable(
            itertools.combinations(s, r) for r in range(len(s) + 1)
        )
    ]


def joint_probability(people, one_gene, two_genes, have_trait):
    """
    Compute and return a joint probability.

    The probability returned should be the probability that
        * everyone in set `one_gene` has one copy of the gene, and
        * everyone in set `two_genes` has two copies of the gene, and
        * everyone not in `one_gene` or `two_gene` does not have the gene, and
        * everyone in set `have_trait` has the trait, and
        * everyone not in set `have_trait` does not have the trait.
    """
    # Initialize the joint probability to 1.0, as we will be multiplying probabilities
    probability = 1.0


    # Loop through each person in the given set of people
    for person in people:
        
        # Determine the number of genes for the current person based on the input sets
        # If the person is in the set two_genes, they have two copies of the gene
        # If the person is in the set one_gene, they have one copy of the gene
        # If the person is not in either set, they have no copies of the gene
        num_genes = 2 if person in two_genes else 1 if person in one_gene else 0
        
        # Retrieve the probability of having the specified number of genes from the PROBS dictionary
        gene_prob = PROBS["gene"][num_genes]
        
        # Determine the trait probability for the current person based on the input set have_trait
        # If the person is in have_trait, use the probability of having the trait from the PROBS dictionary
        # If the person is not in have_trait, use the probability of not having the trait (1 - probability of having the trait)
        trait_prob = PROBS["trait"][num_genes][person in have_trait]

        # Multiply the current joint probability by the product of gene and trait probabilities for the current person
        probability *= gene_prob * trait_prob


    # Loop through each person in the given set of people again to account for mutations

    for person in people:
    # If the person is in the set two_genes, multiply the joint probability by the probability of no mutation
    # If the person is in the set one_gene, multiply the joint probability by the probability of mutation
        if person in two_genes:
            probability *= (1 - PROBS["mutation"])
        elif person in one_gene:
            probability *= PROBS["mutation"]

    # Return the final joint probability
    return probability


def update(probabilities, one_gene, two_genes, have_trait, p):
    """
    Add to `probabilities` a new joint probability `p`.
    Each person should have their "gene" and "trait" distributions updated.
    Which value for each distribution is updated depends on whether
    the person is in `have_gene` and `have_trait`, respectively.
    """

    """Parameters:
    - probabilities: A dictionary containing probabilities for each person, gene, and trait.
    - one_gene: A set of people who have one copy of the gene.
    - two_genes: A set of people who have two copies of the gene.
    - have_trait: A set of people who have the specified trait.
    - p: The joint probability to be added to the existing probabilities.
    """
    
    # Loop through each person in the probabilities dictionary
    for person in probabilities:
        
        # Determine the number of genes for the current person based on the input sets
        # If the person is in the set two_genes, they have two copies of the gene
        # If the person is in the set one_gene, they have one copy of the gene
        # If the person is not in either set, they have no copies of the gene
        num_genes = 2 if person in two_genes else 1 if person in one_gene else 0

        # Update the gene distribution for the current person with the new joint probability
        # The value to be updated is based on the number of genes the person has
        probabilities[person]["gene"][num_genes] += p
        # Update the trait distribution for the current person with the new joint probability
        # The value to be updated is based on whether the person has the specified trait
        probabilities[person]["trait"][person in have_trait] += p


def normalize(probabilities):
    """
    Update `probabilities` such that each probability distribution
    is normalized (i.e., sums to 1, with relative proportions the same).

    Parameters:
    - probabilities: A dictionary containing probabilities for each person, gene, and trait.
    """

    # Loop through each person in the probabilities dictionary
    for person in probabilities:
        
        # Loop through each distribution type for the current person (e.g., "gene", "trait")
        for field in probabilities[person]:
            
            # Calculate the total probability for the current distribution type
            total = sum(probabilities[person][field].values())
            
            # Loop through each possible value in the current distribution type
            for value in probabilities[person][field]:
                # Normalize the probability by dividing it by the total probability for the current distribution type
                probabilities[person][field][value] /= total


if __name__ == "__main__":
    main()