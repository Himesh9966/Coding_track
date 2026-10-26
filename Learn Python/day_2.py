
# Question 42: Count Digits
#
# Take an integer as input.
# Count how many digits it contains.
# The minus sign does not count as a digit.
# Zero contains one digit.
#
# Example:
# Input: 5832
# Output: 4
#
# Input: -72
# Output: 2
#
# Input: 0
# Output: 1

n = int(input("Enter an integer: "))
n = abs(n)

# Write your logic below
count = 0
for i in str(n) :
    count = count + 1
print(count)

#---------------------------------------------------------------------------------------------------------------------



# Question 43: Sum of Digits
#
# Take an integer as input.
# Calculate the sum of its digits.
# Ignore the negative sign.
#
# Example:
# Input: 1234
# Output: 10
#
# Explanation: 1 + 2 + 3 + 4 = 10

n = abs(int(input("Enter an integer: ")))

# Write your logic below

countsum = 0
for i in str(n):
    countsum = countsum + int(i)
print(countsum)