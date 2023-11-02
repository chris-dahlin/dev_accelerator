def main():
    number = get_number()
    meow(number)


def get_number():
    while True:
        n = int(input("What's n? "))
        if n > 0:
            break
    return n


def meow(n):
    for _ in range(n):
        print("meow")


main()

# while True:
#     n = int(input("What's n? "))
#     if n > 0:
#         break

# for _ in range(n):
#     print("meow")


# print("meow\n" * 3, end="")


# for _ in range(10):
#     print("meow")

# for i in range(3):

# for i in [0, 1, 2]:
#     print("meow")


# i = 0
# while i < 3:
#     print("meow")
#     i += 1
