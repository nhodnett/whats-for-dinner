// Meal Arrays:

var side = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
];

var mainDish = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
];

var dessert = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
];

//Global variables
var newSide;
var newMainDish;
var newDessert;

//Query Selectors
var selectSide = document.querySelector('#side');
var selectMainDish = document.querySelector('#main-dish');
var selectDessert = document.querySelector('#dessert');
var letsCookButton = document.querySelector('#lets-cook');

//Event Listeners
letsCookButton.addEventListener('click', generateRandomMeal);

//Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// generate random side, main, dessert depending on what radio button is selected.
// crockpot image should disappear as the selected meal appears in the box, (show/hide)

generateRandomMeal() {
  
}
