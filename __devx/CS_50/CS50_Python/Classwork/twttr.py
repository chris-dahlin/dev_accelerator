# Get User message
user_message = input("Input: ")
print("Output: ", end="")

for word in user_message:
    if not word.lower() in ["a", "e", "i", "o", "u"]:
        # Print the word
        print(word, end="")
# Print additional line
print()
