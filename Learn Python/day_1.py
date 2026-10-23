# # #Print your name, age and college.

# name = "Himesh"
# college = "JECRC"
# age = 19
# print(name, college, age)

# # #Add two numbers.
# x = 5
# y = 10

# sum = x + y
# print(sum)

#---------------------------------------------------------------------------------------------------------------------

# # # Basic calculator.

# a = int(input("Enter the no. "))
# b = int(input("Enter the second no. "))

# sum = a + b
# diffrence = a - b
# product = a * b

# if b != 0 :
#     quotient = a / b
#     print(quotient)
# else :
#     print("Second no. cannot be zero")


# print(sum)
# print(diffrence)
# print(product)

#---------------------------------------------------------------------------------------------------------------------

# # #Swap two numbers.

# a = 10
# b = 20

# temp = a
# a = b
# b = temp

# print(a, b)

#---------------------------------------------------------------------------------------------------------------------

# # #Calculate the square.

# a = int(input("Enter the no. "))

# root = a ** 2
# print(root, "is the root of", a)

#---------------------------------------------------------------------------------------------------------------------

# #Calculate the average

# marks = [99, 95, 48, 49, 100]

# sum = 0
# count = 0
# for i in range(len(marks)):
#     sum = sum + marks[i]
# average = sum / len(marks)
# print(average)


# #Calculate a person's age.

# current_year = int(input("Enter current year: "))
# birth_year = int(input("Enter your birth year: "))

# age = current_year - birth_year

# # print(age)


#---------------------------------------------------------------------------------------------------------------------
# #. Reverse a two-digit number.

# n = int(input("Enter a no."))
# result = 0

# while n > 0:
#     ld = n % 10
#     result = result * 10 + ld
#     n = n // 10
# print(result)


#---------------------------------------------------------------------------------------------------------------------

# Question 21: Positive, Negative or Zero
#
# Take an integer as input.
# Check whether the number is positive, negative, or zero.
#
# Example:
# Input: 10
# Output: Positive
#
# Input: -5
# Output: Negative
#
# Input: 0
# Output: Zero

# num = int(input("Enter a number: "))

# # Write your logic below
# if num < 0 :
#     print("Negative")
# elif num > 0 :
#     print("Positive")
# else :
#     print("Zero")

#---------------------------------------------------------------------------------------------------------------------

# Question 23: Greater of Two Numbers
#
# Take two integers as input.
# Print the greater number.
# If both numbers are equal, print "Both are equal".
#
# Example:
# Input: 10 20
# Output: 20
#
# Input: 15 15
# Output: Both are equal

# a = int(input("Enter first number: "))
# b = int(input("Enter second number: "))

# # Write your logic below
# if a > b :
#     print(a)
# elif (a < b) :
#     print(b)
# else :
#     print("Both are equal")


#---------------------------------------------------------------------------------------------------------------------



# Question 36: Print Numbers from 1 to N
#
# Take an integer N as input.
# Print every number from 1 to N.
#
# Example:
# Input: 5
# Output: 1 2 3 4 5

# n = int(input("Enter N: "))

# # Write your logic below
# for i in range (n) :
#     print(i + 1)


#---------------------------------------------------------------------------------------------------------------------


# Question 37: Print Numbers in Reverse
#
# Take an integer N as input.
# Print numbers from N down to 1.
#
# Example:
# Input: 5
# Output: 5 4 3 2 1

# n = int(input("Enter N: "))

# # Write your logic below
# # print(*range(n, 0, -1))
# for i in range (n , 0, -1) :
#     print(i)


#---------------------------------------------------------------------------------------------------------------------



# Question 38: Print Even Numbers
#
# Take an integer N as input.
# Print all even numbers from 1 to N.
#
# Example:
# Input: 10
# Output: 2 4 6 8 10

n = int(input("Enter N: "))

# Write your logic below
for i in range(0, n, 1) :
    if i % 2 == 0 :
        print(i)