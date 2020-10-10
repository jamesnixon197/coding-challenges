# Apple and Orange

## Explanation of my answer

To get the number of oranges & apples on a lot, I first summed up the position of
the fruit tree to each fruit off the tree, to get their overall position (instead
of just the positions relative to the tree).

Once, I had all the fruit positions I then just used `filter` function
and filtered out all fruit which didn't belong between the `houseStart` coordinate
and the `houseEnd` coordinate and returned the length for both, to get the
total oranges & apples in the lot.

## HackerRank Problem link

https://www.hackerrank.com/challenges/apple-and-orange/problem
