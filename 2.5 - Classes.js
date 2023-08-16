//class
//is template for an object

class cla{
    variable//can have variables
    variable2 = 0
    constructor(){//constructor
        //run when class is created
        this//is the object
        this.variable = "sth"//we use it to access variables
        this.fun()//or functions
    }
    fun(){//can have functions
        this.variable2 = 1
    }
    fun2(){
        return this//function can return class itself
    }
    static a(){//static functions are run on class
        //not class object itself

    }
}

cla.a()//we run static function on class

var obj = new cla()//creates a new class object

obj.variable//we can access its variables

obj.fun()//run functions

obj.fun2().fun()//since fun2 returns the obj
//we can run another function on same object

//same result
obj.fun2()
obj.fun()