# TheSilentKata

> *The beginning of wisdom is to call things by their right names.* 
> <br>- Chinese Proverbs

Since you can't talk during this Kata, it only makes sense to try to solve a problem that normally doesn't involve talking.

## **Countdown**
Countdown is the longest running Game Show in the UK (on air since 1982!). It has two main types of rounds, letters and numbers. Today we will try to solve the numbers round.

### **Numbers Round**
The numbers round is one where contestants are given 6 starting numbers and have to attempt to reach a randomly generated total using only the 4 basic arthimetic operators. 

*The Rules*
* Six, face-down, numbered tiles are selected from twenty-four shuffled tiles.
* The tiles are arranged into two groups: Large Numbers and Small Numbers.
* There are four numbers in the large set { 25 , 50 , 75 , 100 }
* There are twenty numbers in the small set, two each of the numbers 1-10
{ 1 , 1 , 2 , 2 , 3 , 3 , 4 , 4 , 5 , 5 , 6 , 6 , 7 , 7 , 8 , 8 , 9 , 9 , 10 , 10 }
*One contestant selects as many numbers as desired (unseen) from the large set (between none and all four), and the balance are pulled from the small set to make six numbers in total.
* A random three-digit target number is then chosen by a computer*.
* The contestants are given 30 seconds to get as close as possible to the chosen target by using just the four basic arithmetic operators + - × ÷
* Not all the digits need to be used.
* Concatenation of the digits is not allowed (You can’t use a “2” and “2” to make “22”).
* At no intermediate step in the process can the current running total become negative or involve a fraction.
* Each numbered tile can only be used once in the calculation.
* 10 points are awarded for correctly getting the exact solution.
* 7 points are awarded for getting within 5 of the required solution.
* 5 points are awarded for getting within 10 points of the required solution.

*There is some speculation as to whether 100 is a possible target number generated by the computer. Some say that only numbers range 101-999 are generated (which are the rules in the French variant), and other say that any three digit numbers is possible. I’m going to assume the latter in my calculations and say that a target of 100 is possible.

From the way the numbers are selected it’s clear that there can never be more than two of the same number. Also, there can only be one each of the larger numbers. If all four of the large numbers are taken then it’s assured that { 25 , 50 , 75 , 100 } will occur.

### **Example**
Here's an example of the game in action. In this instance, one number was selected from the large set, and the rest from the small set.

**{ 50 , 8 , 3 , 7 , 2 , 10 }**

The randomly selected target was 556.

There are multiple ways to solve this. The smallest solution requires just four numbers:

*(50 × 10) + (8 × 7) = 556*

A example of a more complicated solution is this:

*(((50 - 7) × 3) + 10) × 8) ÷ 2 = 556*

### **The Challenge**
**Challenge 1**
Solve a numbers round using a simplified ruleset. Test for solutions that don't require parentheses on one side of an operator, and no operator precedence. 

25 50 75 100 3 6 
makes 952

50 9 7 6 3 1
makes 654

**Challenge 2**
Solve a numbers round with parentheses. This can be achieved using Reverse Polish Notation (https://en.wikipedia.org/wiki/Reverse_Polish_notation).

50 100 9 3 1 3
makes 416

50 25 2 2 5 7
makes 713

## HELP!
http://datagenetics.com/blog/august42014/index.html 