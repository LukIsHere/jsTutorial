//array holds list of items

var array = ["hi",10]

//we can add item

array.push(false)//["hi",10,false]

//we can remove last item

array.pop()//["hi",10]
//this function also returs removed item

//we can go over every item

array.forEach(item=>{//fancy version of arrow function
    item//is item
})

array.forEach((item,index)=>{//normal arrow function
    item//is item
    index//is place of item
})

//we can access exact item
array[0]//"hi"
array[0]="hello"//and set it

//and get it's lenght (amount of items)
array.length//2