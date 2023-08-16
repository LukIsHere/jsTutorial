/*logical operators*/
//are like math operators but can only return true or false

//we got exuality oparator ==

var n10 = 10

"a"=="a"//true
"a"=="b"//false
10==10//true
10==n10//true
"10"==10//true (js will conver string to number before checkin)
//if we want to make sure we got same type we need to use ===
"10"===10//false
10==10//true

//less greater lessOrEqual greaterOrEqual
10>10//false
10>9//true
10<11//true

12>=10//false
12>=12//true
12>=13//true
12<=10//false
12<=13//true

//and &&
true&&true//true
true&&false//false
false&&false//flase

//or ||
true&&true//true
true&&false//true
false&&false//flase

//not !
!true//false

//we can combine them together like this
10==10||1==2//true
10==10&&1==2//false

//and use brackets to make hierarhy
true&&!(false||false)//true
(true||false)||false//true

//unussual interaction
""//in logical operation treated as false
0//same
//numbers other than 0 are true

!""//true
!"aaa"//false

//if
//keyword that lets use implement logic
var bTrue = true

if(true)//next line won't execute if false
    console.log("owo")

if(bTrue){//content of brackets executed if true
    console.log("hi")
    console.log("hi")
}else if(1){//if not first but this is true we execute here

}else{//both false we go here

}
//note: we don't have to add else or else if if we don't want

//switch
//lets us test variable for diffrent cases
var randomVariable = "a";
switch(randomVariable){
    case "a":{//we can put currly brackets if we want
        //if a
    }
    break;
    case "b":
        //if b
    break;
    case "c":
        //if c
    case "d":
        //if c or d
    break;
    default://not required
        //if non of them
    break
}

//for
//is a loop most basic loop
//for(start;condition;update)
//start is execute once (usually var i = 0)
//condition if true we do it again (usually i<number)
//update is exacuted every loop (usually i++)

for(var i = 0;i<5;i++){
    console.log(i)
    
}//0 1 2 3 4

for(var i = 0;i<5;i++)
    console.log(i)//0 1 2 3 4

for(var i = 0;i<5;i++){
    if(i==1)
        continue;//makes loop go to next number
    //skippin rest of the code for this time
    if(i==3)
        break;//exits the entire loop
    console.log(i)
    
}//0 2

//while
//another loop
//while(condition)
//while condition is true it repeats
//everythin inside for ever

while(true){
    //we can use break and continue here too
    break;
}

//do while
//same as while but check condtion after executin content

do{//does sth no matter contidion

}while(true)//check the contition