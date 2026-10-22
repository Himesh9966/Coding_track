# #Print your name, age and college.

name = "Himesh"
college = "JECRC"
age = 19
print(name, college, age)

# #Add two numbers.
x = 5
y = 10

sum = x + y
print(sum)

# # Basic calculator.

a = int(input("Enter the no. "))
b = int(input("Enter the second no. "))

sum = a + b
diffrence = a - b
product = a * b

if b != 0 :
    quotient = a / b
    print(quotient)
else :
    print("Second no. cannot be zero")


print(sum)
print(diffrence)
print(product)



# #Swap two numbers.

a = 10
b = 20

temp = a
a = b
b = temp

print(a, b)


# #Calculate the square.

a = int(input("Enter the no. "))

root = a ** 2
print(root, "is the root of", a)


#Calculate the average

marks = [99, 95, 48, 49, 100]

sum = 0
count = 0
for i in range(len(marks)):
    sum = sum + marks[i]
average = sum / len(marks)
print(average)


#Calculate a person's age.

current_year = int(input("Enter current year: "))
birth_year = int(input("Enter your birth year: "))

age = current_year - birth_year

# print(age)

#. Reverse a two-digit number.

n = int(input("Enter a no."))
result = 0

while n > 0:
    ld = n % 10
    result = result * 10 + ld
    n = n // 10
print(result)
