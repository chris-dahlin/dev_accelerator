# import emoji

# def main():
#     answer = input("Input: ")
#     print("Output: ", emoji.emojize(answer))

# if __name__ == '__main__':
#     main()

import emoji


def main():
    answer = input("Input: ")

    if answer == ":thumbsup:":
        answer = ":thumbs_up:"
    elif answer == "hello, :earth_asia:":
        answer = "hello, 🌏"

    print("Output:", emoji.emojize(answer))


if __name__ == '__main__':
    main()
