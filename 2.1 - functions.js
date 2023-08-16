//as said before Functions
//are special kind of object that
//can be called with ()

//Sidenote:
//in 0.0 i told u about console.log(data)
//log is a function
//and console is a namespace (context for identifiers, a logical grouping of names)
//we also have console.error() consol.debug() and many other

//we deflere them like this
function func1(){//we usually define them like this
    //code
}
var func2 = ()=>{//but the can also be defined like this
    //code
}

//functions can take parameters
function log(stuff){
    console.log(stuff)
}

log("hello")//will print "hello to console"

//parameters for function might be optional
//in this case we must specify what is default value of it

function specialLogger(stuff="default value"){
    console.log(stuff);
}

specialLogger()//will print "default value"
specialLogger("hello")//will print "hello

//functions might return value
function getValue(){
    return 10;//note:after returnin
    //value rest of function code isn't exectued
    //and we go back to place we left
    //we go back anyway after function ends
}

var result = getValue();//will return 10
//note: if we don't return anythin from function
//it will return value of undefined

//we can pass function to a function
function special(funct){
    funct("hi");    
}

special(log)//will print "hi"