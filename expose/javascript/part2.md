1. The value 3 will be printed to the console, because `i` is visible to the scope of the function, and it has the value 3 when the loop breaks.
2. It will print the value of the last discounted price, because it is visible to the scope of the function.
3. It will print the value of the last discounted price that is converted to a final price, because it is visible to the function scope and that is the value that is set to before the for loop breaks.
4. This function will return the array of `prices` with the discounts applied, so it will return `[50, 100, 150]`. This is because it loops through the inputed `prices`, applying the discount and returns an array of these discounted prices.
5. The code causes an error, because `i` is not defined in the function scope, only in the loop.
6. This code also causes an error for the same reason as before, the `discountedPrice` variable is only visible in the scope of the loop.
7. This line will print out the last value that is set to `finalPrice`, as it is visible in the function scope by being defined at the start of the function.
8. This function will return the array of `prices` with the discounts applied, so it will return `[50, 100, 150]` This is because it loops through the inputed `prices` applying the discount and returns an array of these discounted prices.
9. The code will cause an error because `i` is defined with `let` meaning that it is not visible to the outer scope.
10. At this line, the value of 3 will be printed to the console because that is the length of the `prices` array and it is visible in this scope.
11. This function returns the array `[50,100,150]` because those are the discounted prices for the input `prices`
12. 
    - A. student.name
    - B. student['Grad Year']
    - C. student.greeting()
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]
13.
    - A. 32, `2` is converted to a string and then concatonated
    - B. 1, `'3'` is converted to a number and then subtracted
    - C. 3, `null` is converted to 0 and added to 3
    - D. 3null, `null` is converted to a string then concatonated
    - E. 4, `true` is converted to 1 then added to 3 
    - F. 0, `null` is converted to 0, then false + 0 = 0
    - G. 3undefined, `undefined` is converted to a string then concatonated with `'3'`
    - H. `NaN`, `undefined` is NaN, therefore the subtraction result is NaN
14.
    - A. `true`, `'2'` is converted to an integer then compared with 1
    - B. `false`, two strings are compared using string comparison
    - C. `true`, `'2'` is converted to a number, then compared 
    - D. `false`, the two operands are different types, therefore are not equal
    - E. `false`, `true` is converted to 1 then compared with 2
    - F. `true`, `Boolean(2)` is `true`, therefore it is `true` because they are the same type and value.
15. `==` does a type conversion of the operands before the comparison, but `===` compares the types of both operands and their values.
16.
17. `[2, 4, 6]`, The function first creates a new array, then inserts all the elements of the inputed array with the callback function applied to them. The function then returns that new array.
18.
19. The code prints out:
    ```
    1
    4
    3
    2
    ```