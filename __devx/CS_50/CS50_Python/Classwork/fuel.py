while True:
    # User inputs fractions
    tank = input("Fraction: ")
    try:
        # Split the input into 2 variables
        numerator, denominator = tank.split("/")
        # Change into integers
        new_numerator = int(numerator)
        new_denominator = int(denominator)
        #  Calculate % of tank
        t = new_numerator / new_denominator
        if t <= 1:
            break
    except (ValueError, ZeroDivisionError):
        pass
percentage = round(t * 100)

if percentage <= 1:
    print("E")
elif percentage >= 99:
    print("F")
else:
    print(f"{percentage}%")
