# # Ask user for their name
# name = input("What's your name? ")

# # Remove white space from name and captitalize
# name = name.strip().title()

# # Say hello to the user
# print(f"Hello, {name}")
def hello(to="World"):
    print("Hello,", to)


hello()
name = input("What's your name? ")
hello(name)
