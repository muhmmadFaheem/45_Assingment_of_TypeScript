//100_ Days_Of_ Codding_ Challenge_of_TypeScripts....
//Day No.1..
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var name1 = "Faheem";
console.log("Hello " + name1 + ", would you like to learn some Typescript today?");
//show name in lowercase
var name2 = "Faheem";
console.log(name2.toLowerCase());
//show name in higercase
console.log(name2.toUpperCase());
console.log(name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase());
//Day No.2...
console.log("Elon Musk once said", "Dont confuse schooling with education.I didn't go to Harvard but the people that work for me did.");
var famous_person = "Elon Musk";
var mesg = famous_person + "once said Dont confuse schooling with education.I didnt go to Harvard but the people that work for me did.";
console.log(mesg);
var name3 = "\t\n Faheem\t\n";
console.log(name3);
//name with whitespace
console.log(name3.trim());
//name without whitespace
//  Day No.3..
//Question 7..
console.log(5 + 3); //addition
console.log(10 - 2); //substraction
console.log(4 * 2); //multiplication
console.log(16 / 2); //division
//Question 8..
console.log(17 + 3); //addition
console.log(40 - 20); //substraction
console.log(4 * 5); //multiplication
console.log(40 / 2); //division
//Question 9..
var favornum = 4;
console.log("My favorite number is  " + favornum + ".");
// Day 4...
//Question 10...
var myName = "Faheem";
console.log("Hello " + myName + " would you like to learn some TypeScript today ?");
//Question 11..
var names = ["Babar", "Rizwan", "Saim"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question 12..
var names1 = ["Junaid", "Jamal", "Jamshed"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello " + name_1 + " would you like to learn some TypeScript");
}
//Question 13...
var transport = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transport.forEach(function (transport) {
    console.log('I would like to own a ' + transport + ' ');
});
//Question 14...
var guests = ["Nadeem Khan", "Shan Malik", "Kashan Malik", "Shariq Khan"];
guests.forEach(function (guest) {
    console.log('Dear ' + guest + 'would you like to join me for dinner ?');
});
//Question 15...
var unableToAttend = "Nikola Tesla";
console.log("'" + unableToAttend + " can't make it to dinner. '");
var newGuest = "kainat";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New Invitations...
console.log("New Guests Invitations...");
guests.forEach(function (guest) {
    console.log("'Dear" + guest + " would you like to join me for dinner? '");
});
//Question 16...
var guest1 = ["Nawaz", "Jawad Khan", "Zia Khan"];
console.log("Great News ! I found a bigger dinner table !");
//adding more guests....
guest1.unshift("Muzammil Shah");
guest1.splice(guest1.length / 2, 0, "Fawaz");
guest1.push("Hamzah Khan");
guest1.forEach(function (guest) {
    console.log("Dear " + guest + " would you like to join me for dinner ?");
});
//Question 17....
console.log("Unfortunately, I can only invite two people for dinner.");
while (guest1.length > 2) {
    var removedGuest = guest1.pop();
    console.log("Sorry," + removedGuest + " I can't invite you to dinner.");
}
guest1.forEach(function (guest) {
    console.log("Dear " + guest + " you're still invited to dinner. ");
});
guest1.splice(0, guest1.length);
console.log(guest1);
//for empty list...
//Question 18...
var places = ["Japan", "Australia", "South Korea", "Germany", "France"];
console.log("Original Order :", places);
console.log("Alphabetical order :", __spreadArray([], places, true).sort().reverse());
console.log("Original order : ", places);
places.reverse();
console.log("Reversed order : ", places);
places.reverse();
console.log("Original order : ", places);
places.sort();
console.log("Alphabetical order :", places);
places.reverse();
console.log("Reverse alphabetical order : ", places);
//Question 19...
var guests2 = ["Khalid", "Manzoor", "Miandad", "Tanveer", "Mubasshir"];
console.log("I'm inviting " + guests.length + " people to dinner. ");
//Question 20...
var countries = ["Germany", "France", "Iceland", "Kuwait", "Qatar"];
console.log("Countries , I would like to visit : ", countries);
//Question 21...
var book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log('"Book info: ' + book.title + ' by ' + book.author + ' published in ' + book.yearPublished + '"');
//Question 22...
var friends = ["Azam ", "Ali", "Jawad ", "Asad"];
console.log(friends[3]);
//Question 23...
var car1 = 'Subaru';
console.log("Is car == 'Subaru' ? I predict True.");
console.log(car1 == 'Subaru');
console.log("Is car == 'toyota' ? I predict false");
console.log(car1 == 'toyota');
//1...
var fruit1 = "Mango";
console.log("Is fruit == 'Mango' ? I predict True");
console.log(fruit1 == 'Mango');
console.log("Is vegetable == 'Mango' ? I predict false");
console.log(fruit1 == 'Ladyfinger');
//2...
var country1 = "Germany";
console.log("Germany is a European Country");
console.log(country1 == 'Germany');
console.log("Australia is a European Country");
console.log(country1 == 'Australia');
//3...
var equal = 2;
console.log("2 is a Even number");
console.log(equal == 2);
console.log("3 is a Even number");
console.log(equal == 3);
//4...
var vegetable1 = "Potato";
console.log("Potato is a Vegetable");
console.log(vegetable1 == 'Potato');
console.log("Apple is a Vegetable");
console.log(vegetable1 == 'Apple');
//5...
var alpha = "A";
console.log("A is a vowel");
console.log(alpha == 'A');
console.log("D is a vowel");
console.log(alpha == 'D');
//Question 24...
console.log("Testing Equality with Strings :");
console.log("apple" == "apple"); //True..
console.log("apple" == "Apple"); //False..
//using the lower case...
console.log("Testing With Lower Case :");
console.log("Apple".toLowerCase() == "apple");
//Numerical Test..
console.log("Numerical Tests :");
console.log(10 > 5); //True..
console.log(2 < 1); //False..
//Testing using "and" and "or" operators...
console.log('Tests with "And" and "Or" :');
console.log(true && false); //False..
console.log(true, false); //True
//Test of Array...
var fruits = ["apple", "banana", "cherry"];
console.log("Is apple in fruits ? ");
console.log(fruits.includes("apple")); //True..
//Test without Array...
console.log("Is Mango not in Fruits ? ");
console.log(!fruits.includes("mango")); //True...
//Question 25...
var alien_color = "green";
if (alien_color == "green ") {
    console.log("You earned just 5 Points !");
}
alien_color = "red";
if (alien_color == "green") {
    //No output show..
}
//Question 26....
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else {
    console.log("You just earned 10 points");
}
alien_color = "Yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else {
    console.log("You just earned 10 points");
}
//Green alien...
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
//yellow alien...
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
//red alien...
alien_color = "red";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
//Question 28...
var age = 25;
if (age < 2) {
    console.log("This is a baby.");
}
else if (age < 4) {
    console.log("This person is a toddler.");
}
else if (age < 13) {
    console.log("This person is a kid.");
}
else if (age < 20) {
    console.log("This person is a teenager.");
}
else if (age < 65) {
    console.log("This person is an adult.");
}
else {
    console.log("This person is an elder.");
}
//Question No 29....
var favorite_fruits = ["apples", "bananas", "cherries", "mangoes"];
if (favorite_fruits.includes("bananas")) {
    console.log(" You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log(" You really like apples!");
}
if (favorite_fruits.includes("cherries")) {
    console.log(" You really like cherries!");
}
if (favorite_fruits.includes("mangoes")) {
    console.log(" You really like mangoes!");
}
//Question No 30...
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log('Hello ' + username + ', thank you for logging in again');
    }
});
//Question No 31...
var usernames1 = [];
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
}
;
//Questio No 32..
var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) {
        return currentUser.toLowerCase() === newUser.toLowerCase();
    })) {
        console.log(newUser + " will need to enter a new username.");
    }
    else {
        console.log(newUser + " is available");
    }
});
//Question 33...
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix === "rd";
    }
    console.log(number + suffix);
});
//Question N0 34...
var pizzas = ["Pepperoni", "Hawaiian", "Margherita"];
pizzas.forEach(function (pizza) {
    console.log("I Like " + pizza + "pizza!.");
});
console.log("I really love pizza!");
//Question No 35...
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A " + animal + "would make a great pet.");
});
console.log("Any of these animals would make a great pet!.");
//Question No 36...
function make_shirt(size, message) {
    console.log("Making a " + size + "t_shirt with the message " + message + " printed on it.");
}
make_shirt("medium", "Code is Life");
//Question No 37...
function make_shirt1(size1, message1) {
    if (size1 === void 0) { size1 = "large"; }
    if (message1 === void 0) { message1 = "I love TypeScript"; }
    console.log("Making a " + size1 + "t_shirt with the message " + message1 + "printed on it.");
}
make_shirt1();
//Default message1.. medium size
make_shirt1("medium");
//for small size..
make_shirt1("small ,Dive into Coding");
//Question No 38...
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is in " + country);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//Question No 39...
function city_country(city1, country1) {
    return city1, country1;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//Question 40...
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album[tracks] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
//Question No 41...
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//Question No 42....
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
//Question_No 43....
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicians1 = ["Newton", "Charless", "John"];
function make_great(magicians1) {
    var greatMagicians = [];
    magicians1.forEach(function (magician) {
        greatMagicians.push(magician + " the Great");
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians1.slice());
console.log("Original magicians : ");
show_magicians(magicians1);
console.log("Great Magicians : ");
show_magicians(greatMagicians);
//Question_No 44...
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: " + items.join(', ') + "'");
}
make_sandwich("ham", "Cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avacado", "sprouts", "mustard", "mayo");
//Questio_No 45...
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corplla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
