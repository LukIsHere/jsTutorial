//data can either be

/*Primitive*/

//Undefined
var ud1;
var ud2 = undefined;//same result

//Boolean can either be true or false
var bool1 = true
var bool2 = false

//Numbers
//*we can do math with them
var number1 = 1;
var number2 = 1.1;

//NaN (not a number)
//usually we get thoes after performing illegal math uperations
var nan1 = 0/0;
var nan2 = "a"*1;

//we can check if sth is NaN
isNaN(nan1)//true
isNaN(number1)//false

//String is liturally pice of text
//*we can perform operations on them
var string1 = "text"

/*Non-primitive*/

//Array
//can cointain many values
var arr1 = [0,2,"a"];
//to-do

//Objects
//can contain many key value pairs
var obj1 = {
    key1: "value1",
    key2: "value2"
}