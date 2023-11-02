# Create a dict that contains all fruit type and calories
fruits = {
    "apple": 130,
    "avocado": 50,
    "sweet cherries": 100,
    "strawberries": 50,
    "kiwifruit": 90,
    "pear": 100
}

# Receive user input
user_fruit = input("Item: ")

# Search user input with fruit dict
for x in fruits:
    if x in user_fruit.lower():
        print("Calories:", fruits[x])


# find fruit


# Print fruit calories
