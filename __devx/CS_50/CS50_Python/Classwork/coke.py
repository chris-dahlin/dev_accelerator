# Check Balance of Coin function
amount_due = 50
# Coin varibale to keep track of balance
# coins = [25, 10, 5]

# Loop through to see if balance is < 0
while amount_due > 0:
    # Print amount due
    print("Amount due: ", amount_due)

    # Ask user to insert coin
    input_coin = int(input("Insert Coin: "))
    # Check if coin is designated type
    if input_coin in [25, 10, 5]:
        # Subtract coin from amount due
        amount_due -= input_coin

# Calculate if change is owed
change_owed = abs(amount_due)

# Print amount Owed
print(f"Change owed: {change_owed}")
