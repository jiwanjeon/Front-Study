# Hash Map

> - Type of data structure that stores key-value pairs

- Retrieve a certain value by using the key for that value
- A hash Table transforms a key into an integerr index using a hash function, and the index will decide where to store key/value pairr memory

![alt img](https://www.freecodecamp.org/news/content/images/2021/05/g983.jpg)

# Big O

![](https://images.velog.io/images/wjswldhks123/post/e33782af-9bc0-4a7a-9dd3-457914c73295/Screen%20Shot%202022-01-12%20at%206.14.11%20PM.png)

: fast search, insertion, and delete operations

# Hash Table in JS

> - Create a HashTable class with table and size initial properties

- Add a hash() function to transform keys into indices
- Add the set() and get() methods for adding and retrieving key/value pairs from the table.

![](https://images.velog.io/images/wjswldhks123/post/2ec5e4ba-11b3-4595-922d-47f51b40bb8a/Screen%20Shot%202022-01-12%20at%206.23.41%20PM.png)

### Test the Code

![](https://images.velog.io/images/wjswldhks123/post/a12cb30b-d91a-49be-a92d-fd1899bc50cb/Screen%20Shot%202022-01-12%20at%206.24.24%20PM.png)

### How to Hnadle Index Collision

Sometimes, the hash function in a Hash Table may return the same index number. In the test case above, the string "Spain" and "ǻ" both return the same hash value because the number 507 is the sum of both of their ASCII code.

The same hash value will cause the index to collide, overwriting the previous entry with the new one.

To handle the index number collision, you need to store the key/value pair in a second array so that the end result looks as follows:
![](https://images.velog.io/images/wjswldhks123/post/51bc192b-dc5d-43c4-ac55-369eef83b952/Screen%20Shot%202022-01-12%20at%206.25.37%20PM.png)

### To Create Second Array

: We need to upadate set, get, remove function
![](https://images.velog.io/images/wjswldhks123/post/c6d6d820-6296-4947-8e44-41dd0330f623/Screen%20Shot%202022-01-12%20at%206.31.05%20PM.png)

![](https://images.velog.io/images/wjswldhks123/post/2cd5ca89-58db-477f-8404-317e065b2eab/Screen%20Shot%202022-01-12%20at%206.31.51%20PM.png)
