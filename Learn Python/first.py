gender = input()
if gender in ("male", "men", "mard", "kanchi"):
    print("Eligible")
else:
    print("Aurat jat Not eligible")


n = input("Enter your number: ")

count = 0
for digit in n:
    count += 1

print(count)

# Check palindrome questions
n = int(input("Enter your no. "))
result = 0
num = n
while num > 0 :
     ld = num % 10
     result = (result * 10) + ld
     num //= 10
print( n == result)
# num = n % 10
# num2 = (result * 10) + num