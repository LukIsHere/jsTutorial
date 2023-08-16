//JavaScript Object Notation
//universal way of storin javascript objects
//in text file

var a = {
    a:"o",
    b:[1,3]
}

var str = JSON.stringify(a)//{a:"0",b:[1,3]} returns string like this

var b = JSON.parse(str)//we can convert it back