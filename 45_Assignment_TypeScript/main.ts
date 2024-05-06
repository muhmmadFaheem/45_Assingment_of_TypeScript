//100_ Days_Of_ Codding_ Challenge_of_TypeScripts....
//Day No.1..

let name1 : string= "Faheem";

console.log("Hello " + name1 + ", would you like to learn some Typescript today?");

//show name in lowercase
let name2 : string ="Faheem";
console.log(name2.toLowerCase());

//show name in higercase

console.log(name2.toUpperCase());


console.log(name2.charAt(0).toUpperCase()+ name2.slice(1).toLowerCase());
//Day No.2...

console.log("Elon Musk once said",
    "Dont confuse schooling with education.I didn't go to Harvard but the people that work for me did.");


    let famous_person : string = "Elon Musk";
    let mesg : string = famous_person + "once said Dont confuse schooling with education.I didnt go to Harvard but the people that work for me did.";

    console.log(mesg);

    let name3 : string = "\t\n Faheem\t\n";
    console.log(name3);
    //name with whitespace
    console.log(name3.trim());
    //name without whitespace
    
  //  Day No.3..
  //Question 7..

  console.log(5 + 3);//addition
  console.log(10 - 2);//substraction
  console.log(4 * 2 );//multiplication
  console.log(16 / 2);//division

  //Question 8..

  console.log(17 + 3);//addition
  console.log(40 - 20);//substraction
  console.log(4 * 5 );//multiplication
  console.log(40 / 2);//division

  //Question 9..

  let favornum : number = 4;
  console.log("My favorite number is  " + favornum +".");

 // Day 4...
 //Question 10...
let myName : string = "Faheem";
console.log("Hello " + myName + " would you like to learn some TypeScript today ?");

//Question 11..
let names : string[] = ["Babar", "Rizwan", "Saim"];
for (let i = 0; i < names.length;i++){

  console.log(names[i]);
}

//Question 12..
let names1 : string[] = ["Junaid" , "Jamal", "Jamshed"];
for(let name of names){
  console.log("Hello " + name + " would you like to learn some TypeScript");
}

//Question 13...

let transport : string[] = ["Honda motorcycle","Tesla car", "Bianchi bicycle"];
transport.forEach(transport=> {
    console.log('I would like to own a ' + transport+ ' ' );
});

//Question 14...
let guests :string[]= ["Nadeem Khan", "Shan Malik", "Kashan Malik","Shariq Khan"];
guests.forEach(guest=> {
    console.log('Dear '+ guest + 'would you like to join me for dinner ?');
});

//Question 15...
let unableToAttend = "Nikola Tesla";
console.log("'" + unableToAttend + " can't make it to dinner. '" );

let newGuest = "kainat";
guests[guests.indexOf(unableToAttend)] =newGuest;
//New Invitations...
console.log("New Guests Invitations...");
guests.forEach(guest => {
    console.log("'Dear" + guest + " would you like to join me for dinner? '" );
});
//Question 16...

let guest1 : string[] =["Nawaz" , "Jawad Khan", "Zia Khan" ];
console.log("Great News ! I found a bigger dinner table !");

//adding more guests....
guest1.unshift("Muzammil Shah");
guest1.splice(guest1.length/2,0, "Fawaz");
guest1.push("Hamzah Khan");

guest1.forEach(guest => {
    console.log("Dear " + guest + " would you like to join me for dinner ?");
});

//Question 17....
console.log("Unfortunately, I can only invite two people for dinner.");
while (guest1.length > 2){
    let removedGuest =  guest1.pop();
    console.log("Sorry," + removedGuest + " I can't invite you to dinner.");
}

guest1.forEach(guest => {
    console.log("Dear " +guest + " you're still invited to dinner. ");
});
guest1.splice(0, guest1.length);
console.log(guest1);
//for empty list...

//Question 18...

let places :string[] = ["Japan" ,"Australia", "South Korea", "Germany", "France"];
console.log("Original Order :",places);
console.log("Alphabetical order :",[...places].sort().reverse());

console.log("Original order : ",places);

places.reverse();
console.log("Reversed order : ",places);

places.reverse();
console.log("Original order : ",places);

places.sort();
console.log("Alphabetical order :",places);

places.reverse();
console.log("Reverse alphabetical order : ",places);

//Question 19...
let guests2 : string[] = ["Khalid", "Manzoor", "Miandad", "Tanveer", "Mubasshir"];

console.log("I'm inviting " + guests.length + " people to dinner. ");

//Question 20...
let countries : string[] = ["Germany" , "France", "Iceland", "Kuwait", "Qatar"];

console.log("Countries , I would like to visit : ",countries);

//Question 21...
let book : {title : string ; author : string; yearPublished : number} ={
    title :"The Hobbit",
    author : "J.R.R. Tolkien",
    yearPublished :1937
};
console.log('"Book info: ' + book.title+ ' by ' + book.author + ' published in ' + book.yearPublished +'"');

//Question 22...
let friends : string [] = ["Azam ", "Ali", "Jawad ", "Asad"];
console.log(friends[3]);

//Question 23...
let car1 = 'Subaru';
console.log("Is car == 'Subaru' ? I predict True.");
console.log(car1 == 'Subaru');

console.log("Is car == 'toyota' ? I predict false");
console.log(car1 == 'toyota');

//1...
let fruit1 = "Mango";
console.log("Is fruit == 'Mango' ? I predict True");
console.log(fruit1 == 'Mango');

console.log("Is vegetable == 'Mango' ? I predict false");
console.log(fruit1 == 'Ladyfinger');
//2...
let country1 = "Germany";
console.log("Germany is a European Country");
console.log(country1 == 'Germany');

console.log("Australia is a European Country");
console.log(country1 == 'Australia');
//3...

let equal = 2;
console.log("2 is a Even number");
console.log(equal == 2);

console.log("3 is a Even number");
console.log(equal == 3);

//4...

let vegetable1 = "Potato";
console.log("Potato is a Vegetable");
console.log(vegetable1 == 'Potato');

console.log("Apple is a Vegetable");
console.log(vegetable1 == 'Apple');
//5...

let alpha = "A";
console.log("A is a vowel");
console.log(alpha == 'A');

console.log("D is a vowel");
console.log(alpha == 'D');

//Question 24...

console.log("Testing Equality with Strings :");
console.log("apple" == "apple");//True..
console.log("apple" == "Apple");//False..

//using the lower case...
console.log("Testing With Lower Case :");
console.log("Apple".toLowerCase()== "apple");

//Numerical Test..
console.log("Numerical Tests :");
console.log(10 > 5);//True..
console.log(2 < 1);//False..

//Testing using "and" and "or" operators...
console.log('Tests with "And" and "Or" :');
console.log(true && false);//False..
console.log(true false);//True

//Test of Array...
let fruits = ["apple" , "banana", "cherry"];
console.log("Is apple in fruits ? ");
console.log(fruits.includes("apple"));//True..

//Test without Array...
console.log("Is Mango not in Fruits ? ");
console.log(!fruits.includes("mango"));//True...

//Question 25...
let alien_color = "green";
if (alien_color == "green "){
 console.log("You earned just 5 Points !");

}

alien_color ="red";
if (alien_color =="green"){
    //No output show..
}

//Question 26....
alien_color = "green";
if (alien_color == "green"){

    console.log("You just earned 5 points for shooting the alien! ");
}
else{
    console.log("You just earned 10 points");
}

alien_color = "Yellow";
if (alien_color == "green"){

    console.log("You just earned 5 points for shooting the alien! ");
}
else{
    console.log("You just earned 10 points");
}

//Green alien...
alien_color = "green";
if (alien_color == "green"){

    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow"){

    console.log("You just earned 10 points");
}
else if (alien_color == "red"){

    console.log("You earned 15 points");

}

//yellow alien...
alien_color = "yellow";
if (alien_color == "green"){

    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow"){

    console.log("You just earned 10 points");
}
else if (alien_color == "red"){

    console.log("You earned 15 points");

}
//red alien...
alien_color = "red";
if (alien_color == "green"){

    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow"){

    console.log("You just earned 10 points");
}
else if (alien_color == "red"){

    console.log("You earned 15 points");

}

//Question 28...
let age : number = 25;
if (age < 2 ){

    console.log("This is a baby.");
}
else if ( age < 4 ){
    console.log("This person is a toddler.");
}
else if ( age < 13 ){
    console.log("This person is a kid.");
}
else if ( age < 20 ){
    console.log("This person is a teenager.");
}
else if ( age < 65 ){
    console.log("This person is an adult.");
}
else{
    console.log("This person is an elder.");
}

//Question No 29....

let favorite_fruits : string[] = ["apples" , "bananas" , "cherries" , "mangoes"];

if(favorite_fruits.includes("bananas")){

    console.log(" You really like bananas!");
}

if(favorite_fruits.includes("apples")){

    console.log(" You really like apples!");
}

if(favorite_fruits.includes("cherries")){

    console.log(" You really like cherries!");
}

if(favorite_fruits.includes("mangoes")){

    console.log(" You really like mangoes!");
}

//Question No 30...
let usernames : string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username=> {

    if (username == "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{

        console.log('Hello ' + username + ', thank you for logging in again');
    }

});


//Question No 31...

let usernames1 : string[] = [];

if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else{

};

//Questio No 32..

let current_users : string[] = ["user1","user2","user3","user4","user5"];

let new_users : string[] = ["User1","User6", "user7", "admin", "User9"];

new_users.forEach(newUser =>{
    if (current_users.some(currentUser => 
        currentUser.toLowerCase()===newUser.toLowerCase()
    )){
        console.log(newUser + " will need to enter a new username.");
    }
    else{
        console.log(newUser + " is available");
    }
});

//Question 33...
let numbers : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9,22];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1){
        suffix = "st";
    }
    else if(number ===2){
        suffix = "nd";
    }
    else if(number ===3){
        suffix ==="rd";
    }
    console.log(number + suffix);
})


//Question N0 34...
let pizzas : string[] = ["Pepperoni", "Hawaiian", "Margherita"];

pizzas.forEach(pizza => {
    console.log("I Like " + pizza + "pizza!.");
});
console.log("I really love pizza!");

//Question No 35...

let animals : string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log("A " + animal + "would make a great pet.");
});
console.log("Any of these animals would make a great pet!.");

//Question No 36...
function make_shirt(size : string, message:string){
    console.log("Making a " + size + "t_shirt with the message " + message + " printed on it.");
}
make_shirt("medium","Code is Life");

//Question No 37...

function make_shirt1(size1 : string = "large", message1 : string = "I love TypeScript"){

    console.log("Making a " + size1 + "t_shirt with the message " + message1 + "printed on it.");
}

make_shirt1();
//Default message1.. medium size
make_shirt1("medium");

//for small size..
make_shirt1("small ,Dive into Coding");

//Question No 38...
function describe_city(city : string, country : string = "Pakistan"){

    console.log(city + " is in " + country);
    
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");

//Question No 39...

function city_country(city1 : string, country1 : string): string{
    return  city1 ,country1;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Tokyo","Japan"));
console.log(city_country("Paris","France"));

//Question 40...

function make_album(artist : string, title : string, tracks? : number){
    let album = { artist ,title};
    if (tracks){
        album[tracks] = tracks;

    }
    return album;
}
console.log(make_album("Artist One","The First Album"));
console.log(make_album("Artist Two","The Second Album"));
console.log(make_album("Artist Three","The Third Album",12));

//Question No 41...
let magicians : string [] = ["Alice", "David", "Chris"];
function show_magicians(magicians : string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);

//Question No 42....

function make_great(magicians :string[] ){
    for(let i = 0;i < magicians.length;i ++){
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);

show_magicians(magicians);

//Question_No 43....
let magicians : string [] = ["Alice", "David", "Chris"];

function show_magicians(magicians : string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}


let magicians1 : string [] = ["Newton", "Charless", "John"];
function make_great(magicians1 : string[]): string[]{
    let greatMagicians = [];
    magicians1.forEach(magician=>{
        greatMagicians.push(magician + " the Great");
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians1.slice());
console.log("Original magicians : ");
show_magicians(magicians1);

console.log("Great Magicians : ");
show_magicians(greatMagicians);



//Question_No 44...
function make_sandwich(...items : string[]){
    console.log("Making a sandwich with: " + items.join(', ')+ "'");
}
make_sandwich("ham", "Cheese",);
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avacado", "sprouts", "mustard", "mayo");

//Questio_No 45...
function make_car(manufacturer : string, model : string,...options:[string,any][]): Object{
    let car = {manufacturer,model};
    options.forEach(([key,value])=> car[key]= value);
    return car;
}
console.log(make_car("Toyota", "Corplla", ["color", "red"],
["year",2020]));

console.log(make_car("Ford", "Fiesta", ["color", "blue"],["sunroof",true]));



