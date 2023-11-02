def main():
    answer = input("What time is it?")
    time = convert(answer)
    print(time)
    if 7 <= time <= 8:
        print("breakfast time")
    elif 12 <= time <= 13:
        print("lunch time")
    elif 18 <= time <= 19:
        print("dinner time")
    else:
        print("not hungry")


def convert(time):
    hours, minutes = time.split(":")
    hours = int(hours)
    minutes = int(minutes)
    return hours * 60 + minutes


if __name__ == "__main__":
    main()
