
# Question 45: Palindrome Number
#
# Take an integer as input.
# Check whether the number reads the same
# forward and backward.
# Negative numbers are not palindromes.
#
# Example:
# Input: 121
# Output: Palindrome
#
# Input: 123
# Output: Not a Palindrome
#
# Input: 0
# Output: Palindrome

# n = input("Enter an integer: ")

# # Write your logic below
# reverse = ""
# for i in n :
#     reverse = i + reverse
# if n == reverse :
#     print("Yes it is palindrome")
# else :
#     print("Mo it is not the palindrome")


#---------------------------------------------------------------------------------------------------------------------

# Question 46: Prime Number
#
# Take an integer as input.
# Check whether it is a prime number.
#
# A prime number is greater than 1 and has
# exactly two positive divisors: 1 and itself.
#
# Example:
# Input: 7
# Output: Prime
#
# Input: 12
# Output: Not Prime
#
# Input: 1
# Output: Not Prime

# n = int(input("Enter an integer: "))

# Write your logic below
# if n <= 0 :
#     print("Not a prime no.")

# for i in range(2, n, 1) :
#     if (i % 1 == 0 or i % i == 0) :
#         print("Yes this no. is a Prime no.")
#     else :
#         print("No it is not a Prime no.")

n = int(input("Enter an integer: "))

is_prime = n > 1

for i in range(2, n):
    if n % i == 0:
        is_prime = False
        break

if is_prime:
    print("Yes, this is a prime number.")
else:
    print("No, this is not a prime number.")
