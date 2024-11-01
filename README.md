###### Myers Diff Algorithm
Myers Diff Algorithm is an efficient algorithm for computing the 
differences between two sequences (usually strings). 
It was developed by Eugene Myers and is widely used in text comparison tools, 
version control systems, and similar applications.   

1) The algorithm finds the 𝗦𝗵𝗼𝗿𝘁𝗲𝘀𝘁 𝗘𝗱𝗶𝘁 𝗦𝗰𝗿𝗶𝗽𝘁 that converts file A into file B. The SES contains only two types of commands: deletions from file A and insertions in file B.

Finding the SES is equivalent to finding the Longest Common Subsequence of the two files. They approach the problem from different angles and serve different purposes , LCS is more about identifying similarities, while SES focuses on the actions required to make two strings identical.

2) An 𝗲𝗱𝗶𝘁 𝗴𝗿𝗮𝗽𝗵 is a conceptual representation of the different ways to transform one string into another using a sequence of edit operations (insertions and deletions).

3) A 𝘀𝗻𝗮𝗸𝗲 is a term often used in the context of the Myers Diff Algorithm to describe the diagonal paths through the edit graph that correspond to matches between the two strings.


4) 𝗞-𝗹𝗶𝗻𝗲𝘀 provides a structured way to visualize the relationship between two sequences (strings) and is particularly useful in the context of algorithms that determine differences between them

 B:  a    c    e
 |    |    |
 A:  a  b  c  d  e
 | \   |    |
 | \  |    |
 |  \  |    |
 +  + +    +


5) A 𝗗-𝗰𝗼𝗻𝘁𝗼𝘂𝗿 is a line or curve in the edit graph that connects the endpoints of all traces (snakes) that share the same D͟-͟v͟a͟l͟u͟e͟.
This contour effectively groups and visualizes areas in the edit graph where the number of differences is constant, aiding in understanding the overall structure of differences between the two strings.

The D͟-͟v͟a͟l͟u͟e͟ represents the number of differences (edit operations) between two sequences at a specific point in the graph.

Each horizontal or vertical move in the edit graph indicates a difference:
H͟o͟r͟i͟z͟o͟n͟t͟a͟l͟ ͟M͟o͟v͟e͟: Represents a character deleted from string A.
V͟e͟r͟t͟i͟c͟a͟l͟ ͟M͟o͟v͟e: Represents a character inserted into string B.
A contiguous series of s͟n͟a͟k͟e͟s͟ ͟(͟d͟i͟a͟g͟o͟n͟a͟l͟ ͟m͟o͟v͟e͟m͟e͟n͟t͟s͟)͟ ͟c͟o͟n͟t͟r͟i͟b͟u͟t͟e͟s͟ ͟t͟o͟ ͟t͟h͟e͟ ͟D͟-͟v͟a͟l͟u͟e
