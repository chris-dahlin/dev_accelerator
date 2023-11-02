months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

while True:
    date = input("Date: ").strip()

    try:
        m, d, y = date.split("/")
        if (int(m) > 0 and int(m) < 13) and (int(d) > 0 and int(d) < 32):
            break

    except:
        try:
            alt_m, alt_d, y = date.split(" ")
            if "," in alt_d:
                for month in range(len(months)):
                    if alt_m == months[month]:
                        m = month + 1

            d = alt_d.replace(",", "")

            if (int(m) > 0 and int(m) < 13) and (int(d) > 0 and int(d) < 32):
                break
        except:
            print()
            pass

print(f"{y}-{int(m):02}-{int(d):02}")


# while True:
#     date = input("Date: ")
#     try:
#          month, day, year = date.split("/")

#          if (int(month) >= 1 and int(month) <= 12) and (int(day) >= 1 and int(day) <= 31):
#             break
#     except:
#         try:
#             old_month, old_day, year = date.split(" ")

#             for i in range(len(months)):
#                 if old_month == months[i]:
#                     month = i + 1

#             day = old_day.replace(",","")
#             if (int(month) >= 1 and int(month) <= 12) and (int(day) >= 1 and int(day) <= 31):
#               break

#         except:
#             print()
#             pass

# print(f"{year}-{int(month):02}-{int(day):02}")