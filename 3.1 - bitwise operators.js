//bitwise operators

//are more advanced topic
//and in theory can be skipped
//if u don't feel like dealin with binary

//we can represent every number in base10 system as 1's and 0's (aka bits)
//for example

//7 is 111
//0 is 0
//1 is 1
//2 is 10
//4 is 100
//8 is 1000
//16 is 10000
//and so on

//we can manipulate thoes bits using bitwise operators like

//or
/*truthy table
in1  in2  out
1    1    1
0    0    0
1    0    1
0    1    1
*/
//example:
1|3//01 or 11 is 11 = 3

//xor
/*truthy table
in1  in2  out
1    1    0
0    0    0
1    0    1
0    1    1
*/
//example:
1^3//01 xor 11 is 10 = 1

//and
/*truthy table
in1  in2  out
1    1    1
0    0    0
1    0    0
0    1    1
*/
//example:
1&3//01 and 11 is 01 = 1

//shift - moves bits x places in chosen direction
//number>>x
//number<<x
1<<3//0001 becomes 1000 = 8
8>>2//1000 becomes 0010 = 2

//i don't think u'll be usin them often but they exist
//so don't be suprised when u see them for the first time