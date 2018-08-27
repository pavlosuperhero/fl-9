// Your code goes here

/*! Task number 1; !*/
const findType = (someThing) => typeof someThing;


/*! Task number 2; !*/
function forEach(args, action){
    for(let i = 0; i < args.length; i++){
         action(args[i]); 
    }
}
/*! Task number 3; !*/
const map = (args, action) => {
    let myArray = []
    
    forEach(args, argument => myArray.push(action(argument)));
    return myArray;
}
/*! Task number 4; !*/
function filter(args, action){
    let myArray = []
    
    forEach(args, argument => {
        if(action(argument)) { 
            myArray.push(argument); 
        }
    });

    return myArray;
}
/*! Task number 5; !*/
function getAdultAppleLovers(data){
    let name = map(filter(data, function(property){
           return property.age > 18 && property.favoriteFruit ==='apple';
           }), function(property) {
 return property.name; 
});
       
       return name;
}

/*! Task number 6; !*/
const keys = objects => {
    let newArray = [];
    for(let key in objects) {
        if(objects[key]){
            newArray.push(key);
        }
    }
    return newArray;
}

/*! Task number 7; !*/
const values = objects => {
    let newArray = [];
    for(let key in objects) {
        if(objects[key]){
            newArray.push(objects[key]);
        }
    }
    return newArray;
}
/*! Task number 8; !*/
function showFormattedDate(date){
    const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let outPut = `It is ${date.getDate()} of ${monthShort[date.getMonth()]}, ${date.getFullYear()}`
    
    return outPut;
}
