# Product of Integers

Not a problem off HackerRank, just a problem I was sent from (Daily Coding Problem)[https://www.dailycodingproblem.com/], this problem was asked by Uber.

In the email it does have a follow up of `Follow-up: what if you can't use division?`, so I've used a boolean variable to do it both ways.

## Division Solution

I loop through each element in the array, I then run `numbers.reduce()` and multiply all elements of the array and then divide the value of that multiplication by the array value we want to disclude and then push that value to another array.

## Code Solution

I loop through each element in the array, I remove the element I'm currently on in the loop. I then multiply all elements of the array and store that value in an array. Finally, I put the original element back on the array.
