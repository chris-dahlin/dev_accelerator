import nltk
import sys

TERMINALS = """
Adj -> "country" | "dreadful" | "enigmatical" | "little" | "moist" | "red"
Adv -> "down" | "here" | "never"
Conj -> "and" | "until"
Det -> "a" | "an" | "his" | "my" | "the"
N -> "armchair" | "companion" | "day" | "door" | "hand" | "he" | "himself"
N -> "holmes" | "home" | "i" | "mess" | "paint" | "palm" | "pipe" | "she"
N -> "smile" | "thursday" | "walk" | "we" | "word"
P -> "at" | "before" | "in" | "of" | "on" | "to"
V -> "arrived" | "came" | "chuckled" | "had" | "lit" | "said" | "sat"
V -> "smiled" | "tell" | "were"
"""

NONTERMINALS = """
S -> N V 
S -> N V Det N
S -> N V Det N P N
S -> N V P Det Adj N Conj N V
S -> Det N V Det Adj N
S -> N V P N
s -> N Adv V Det N Conj N V P Det N Adv
s -> N V Adv Conj V Det N
s -> N V Det Adj N P N Conj V N P Det Adj N
s -> N V Det Adj Adj Adj N P Det N P Det N
"""

grammar = nltk.CFG.fromstring(NONTERMINALS + TERMINALS)
parser = nltk.ChartParser(grammar)


def main():

    # If filename specified, read sentence from file
    if len(sys.argv) == 2:
        with open(sys.argv[1]) as f:
            s = f.read()

    # Otherwise, get sentence as input
    else:
        s = input("Sentence: ")

    # Convert input into list of words
    s = preprocess(s)

    # Attempt to parse sentence
    try:
        trees = list(parser.parse(s))
    except ValueError as e:
        print(e)
        return
    if not trees:
        print("Could not parse sentence.")
        return

    # Print each tree with noun phrase chunks
    for tree in trees:
        tree.pretty_print()

        print("Noun Phrase Chunks")
        for np in np_chunk(tree):
            print(" ".join(np.flatten()))


def preprocess(sentence):
    """
    Convert `sentence` to a list of its words.
    Pre-process sentence by converting all characters to lowercase
    and removing any word that does not contain at least one alphabetic
    character.
    """
    sentence = sentence.lower()

    words = nltk.word_tokenize(sentence)

    valid_words = []

    for word in words:
        if any(char.isalpha() for char in word):
            valid_words.append(word)

    return valid_words


def np_chunk(tree):
    """
    Return a list of all noun phrase chunks in the sentence tree.
    A noun phrase chunk is defined as any subtree of the sentence
    whose label is "NP" that does not itself contain any other
    noun phrases as subtrees.
    """


    NPsubtrees = []
    for subtree in tree.subtrees():
        #Get all of the noun phrases chunks
        if subtree.label() == "NP":
            for sub in subtree.subtrees():
                #Check that it does NOT contain anoter noun phrase chunk
                if sub.label() == "NP":
                    break
            NPsubtrees.append(subtree)
    
    return NPsubtrees



if __name__ == "__main__":
    main()

# Project 6 - Complete