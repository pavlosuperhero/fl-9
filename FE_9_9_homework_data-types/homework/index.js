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
const showFormattedDate = date => {
    return `It is ${date.getDate()} of ${date.toLocaleString("en-us", { month: "short" })}, ${date.getFullYear()}`;
}

console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));
