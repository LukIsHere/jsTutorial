//objects store data
//key:value

var object = {
    key1:"UwU",
    key2:"OwO"
}

//we can access it's values

var k = "key1"

object[k]//UwU
object["key1"]//UwU
object.key1//UwU

//and set it
object.key1 = "IwI"//works with any access variant

//get all keys

Object.keys(object)//["key1","key2"] returns arrays of all keys
Object.values(object)//["IwI","OwO"] returns arrays of all values