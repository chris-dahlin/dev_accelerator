from model import model

# Calculate probability for a given observation
# probability = model.probability([["none", "no", "on time", "attend"]])
# 0.34019999999999995
probability = model.probability([["none", "no", "on time", "miss"]])
# 0.037800000000000014
print(probability)