/*eslint-env browser*/

//STEP 1

//var movies = ["Rocky", "Rocky2", "Rocky3", "Rocky4", "Rocky5"];
//window.console.log(movies[1]);

//STEP 2

//var movies = new Array(5);

//movies[0] = "Rocky";
//movies[1] = "Rocky2";
//movies[2] = "Rocky3";
//movies[3] = "Rocky4";
//movies[4] = "Rocky5";

//window.console.log(movies[0]); 

//STEP 3

//var movies = new Array(5);

//movies[0] = "Rocky";
//movies[1] = "Rocky2";
//movies[2] = "Rocky3";
//movies[3] = "Rocky4";
//movies[4] = "Rocky5";

//movies.push("Lion");

//window.console.log(movies.length); 



//STEP 4

//var movies = ["Rambo", "Rambo2", "Rambo3", "Rambo4", "Rambo5"];

// Assigning to each index

//movies[0] = "SpiderMan";
//movies[1] = "Spiderman2";
//movies[2] = "SpiderMan3";
//movies[3] = "Spiderman4";
//movies[4] = "Spiderman5";

//delete movies[0];

//window.console.log(movies);



//STEP 5

//var movies = [5];

 //Assigning to each index

//movies[0] = "SpiderMan";
//movies[1] = "Spiderman2";
//movies[2] = "SpiderMan3";
//movies[3] = "Spiderman4";
//movies[4] = "Spiderman5";
//movies[5] = "Spiderman4";
//movies[6] = "Spiderman5";


//for (i=0; i < movies.length; i += 1) {
//window.console.log(movies[i]);
//}

//STEP 6

//var movies = [5];
//var index;

 //Assigning to each index

//movies[0] = "SpiderMan";
//movies[1] = "Spiderman2";
//movies[2] = "SpiderMan3";
//movies[3] = "Spiderman4";
//movies[4] = "Spiderman5";
//movies[5] = "Spiderman6";
//movies[6] = "Spiderman7";


//for (index in movies) {
    //window.console.log(movies[index]);
//}



//STEP 7

//var movies = [5];
//var index;


 //Assigning to each index

//movies[0] = "SpiderMan";
//movies[1] = "Spiderman2";
//movies[2] = "SpiderMan3";
//movies[3] = "Spiderman4";
//movies[4] = "Spiderman5";
//movies[5] = "Spiderman6";
//movies[6] = "Spiderman7";

//window.console.log(movies.sort());

//for (index in movies) {
   // window.console.log(movies[index]);
//}




//STEP 8

/*
var movies = [5];
var index;

 //Assigning to each index

movies[0] = "SpiderMan";
movies[1] = "Spiderman2";
movies[2] = "SpiderMan3";
movies[3] = "Spiderman4";
movies[4] = "Spiderman5";
movies[5] = "Spiderman6";
movies[6] = "Spiderman7";

  // Least Fav Movies

window.console.log("Movies I like :\n\n")


for (index in movies) {
    window.console.log(movies[index]);
}

// SECOND ARRAY


var films = [3];


 //Assigning to each index

films[0] = "SpiderMan";
films[1] = "Spiderman2";
films[2] = "SpiderMan3";


  // Least Fav Movies

window.console.log("Movies I regret watching :\n\n")

for (index in films) {
    window.console.log(films[index]);
}


*/


//STEP 9


/*

var movies = [5];
var index;

 //Assigning to each index

movies[0] = "SpiderMan";
movies[1] = "Spiderman2";
movies[2] = "SpiderMan3";
movies[3] = "Spiderman4";
movies[4] = "Spiderman5";
movies[5] = "Spiderman6";
movies[6] = "Spiderman7";

  // Least Fav Movies




// SECOND ARRAY


var films = [3];


 //Assigning to each index

films[0] = "Lego";
films[1] = "Lego2";
films[2] = "Lego3";


  // Least Fav Movies



movies = movies.concat(films).sort().reverse();


for (index in movies) {
    window.console.log(movies[index]);
}

*/


//STEP 10

/*


var movies = [5];
var index;

 //Assigning to each index

movies[0] = "SpiderMan";
movies[1] = "Spiderman2";
movies[2] = "SpiderMan3";
movies[3] = "Spiderman4";
movies[4] = "Spiderman5";
movies[5] = "Spiderman6";
movies[6] = "Spiderman7";

  // Least Fav Movies




// SECOND ARRAY


var films = [3];


 //Assigning to each index

films[0] = "Lego";
films[1] = "Lego2";
films[2] = "Lego3";


  // Least Fav Movies



movies = movies.pop();


for (index in movies) {
    window.console.log(movies[index]);
}

*/




//STEP 11

/*

var movies = [5];
var index;

 //Assigning to each index

movies[0] = "SpiderMan";
movies[1] = "Spiderman2";
movies[2] = "SpiderMan3";
movies[3] = "Spiderman4";
movies[4] = "Spiderman5";
movies[5] = "Spiderman6";
movies[6] = "Spiderman7";

  // Least Fav Movies




// SECOND ARRAY


var films = [3];


 //Assigning to each index

films[0] = "Lego";
films[1] = "Lego2";
films[2] = "Lego3";


  // Least Fav Movies



movies = movies.shift();


for (index in movies) {
    window.console.log(movies[index]);
}

*/




//STEP 12

// I have decided to make a new  array in this question


/*

var movies = ["spiderMan", "spiderMan2", "spiderMan3"];


window.console.log(movies.indexOf("spiderMan3"));
movies.splice(1, 3, "Rocky", "Rocky2");

window.console.log(movies);


*/


//STEP 13

/*

var employee1 = [];

employee1[0] = "5221";
employee1[1] = "John Doe";
employee1[2] = "engineer";
employee1[3] = "engineering";
employee1[4] = "true";

var employee2 = [];

employee2[0] = "1536";
employee2[1] = "Clarice Lins";
employee2[2] = "secretary";
employee2[3] = "HR"
employee2[4] = "true";


var employees = employee1.concat(employee2);

window.console.log(employees);

window.console.log(employees[1]);


*/



//STEP 14

/*

var employee1 = [];

employee1[0] = "5221";
employee1[1] = "John Doe";
employee1[2] = "engineer";
employee1[3] = "engineering";
employee1[4] = "true";

var employee2 = [];

employee2[0] = "1536";
employee2[1] = "Clarice Lins";
employee2[2] = "secretary";
employee2[3] = "HR"
employee2[4] = "true";


var employees = employee1.concat(employee2);


var employees = employee1.concat(employee2);
for (i=0; i< employees.lenght; i+=1) {
   
}

 window.console.log(employees[1]);



*/


//STEP 15


var employee1 = [];

employee1[0] = "5221";
employee1[1] = "John Doe";
employee1[2] = "engineer";
employee1[3] = "engineering";
employee1[4] = "true";

var employee2 = [];

employee2[0] = "1536";
employee2[1] = "Clarice Lins";
employee2[2] = "secretary";
employee2[3] = "HR"
employee2[4] = "true";


var employee3 = [];

employee3[0] = "2553";
employee3[1] = "Joshua Jones";
employee3[2] = "housekeeper";
employee3[3] = "Cleaning Crew"
employee3[4] = "notTrue";


// Concatenating 3 Arrays

var employees = employee1.concat(employee2, employee3);

// displaying its values

/*
window.console.log(employees);

/*









//STEP 16

/*
var movies = [
 
  {
 
    'name'     : 'Rocky',
 
    'rate' : 10
 
  },
 
  {
 
    'name'     : 'Rocky2',
 
    'rate' : 10
 
  },
 
  {
 
    'name'     : 'Rocky3',
 
    'rate' : 7
 
  }
 
];



var movie_names = [];
 
for (var i = 0, max = movies.length; i < max; i += 1) {
 
   movie_names.push(movies[i].name);
 
}



window.console.log(movie_names);

*/

//STEP 17

//STEP 18

/*

var arr = [58, 'abcd', true, null, false, 0];

function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


*/

//STEP 19

/*
var items = [1, 2, 3, 4];

var item = items[Math.floor(Math.random()*items.length)];
window.console.log(item);

*/

//STEP 20

/*

var array1 = [1, 3, 2];

console.log(Math.max(...array1));

*/