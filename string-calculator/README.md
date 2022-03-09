1. Write an "add" function that takes as string containing 0, 1, or 2 numbers separated by a comma and returns the sum.

- For example: "" == 0, "1" == 1, "1,2" == 3

2. Allow the add function to handle an unknown amount of numbers.

3. Allow the add function to handle new lines between numbers (instead of commas).

- The following input is ok "1\n2,3" == 6
- The following is invalid input so do not expect it: "1,\n" (no need to write test)

4. Add support for different delimiters.

- To change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]”
- For example “//;\n1;2” == 3 since the default delimiter is ‘;’

5. Calling Add with a negative number will throw an exception "negatives not allowed" and the negative that was passed.

6. If there are multiple negatives, show all of them in the exception message.

7. Using TDD, add a function called getCalledCount() that returns how many times add was invoked.

8. Numbers bigger than 1000 should be ignored.

- For example: 2 + 1001 == 2

9. Delimiters can be of any length with the following format: “//[delimiter]\n”

- For example: “//[**]\n1**2**3” == 6

10. Allow multiple delimiters like this: “//[delim1][delim2]\n”

- For example: “//[\*][%]\n1\*2%3” == 6

11. Make sure you can also handle multiple delimiters with length longer than one char

- For example: “//[\*\*][%%]\n1\*\*2%%3” == 6
