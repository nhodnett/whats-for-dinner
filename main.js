// Meal Arrays: Data Model
var side = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caesar Salad",
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
"Chicken Parmesan",
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
var foodOutputDisplay = document.querySelector('.food-output');
// var mainOutputDisplay = document.querySelector('.main-output');
// var dessertOutputDisplay = document.querySelector('.dessert-output');
var image = document.querySelector('.cook-pot');
//var outputSection = document.querySelector('.output-section');
var outputHeader = document.querySelector('.output-header');

//Event Listeners
letsCookButton.addEventListener('click', generateRandomMeal);

//Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


function generateRandomMeal(event) {
    clearOutputSection();
  event.preventDefault();
    newSide = side[getRandomIndex(side)];
    newMainDish = mainDish[getRandomIndex(mainDish)];
    newDessert = dessert[getRandomIndex(dessert)];

      if (selectSide.checked === true) {
        foodOutputDisplay.innerText = `${newSide}`;
      } else if (selectMainDish.checked === true) {
        foodOutputDisplay.innerText = `${newMainDish}`;
      } else if (selectDessert.checked === true) {
          foodOutputDisplay.innerText = `${newDessert}`;
        }

    showOutputSection();
};


function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};


function showOutputSection() {
  hide(image);
  show(outputHeader);
  //show(youShouldMake);
  show(foodOutputDisplay);
  // show(mainOutputDisplay);
  // show(dessertOutputDisplay);
};

function clearOutputSection() {
  foodOutputDisplay.innerText = "";
  // mainOutputDisplay.innerText = "";
  // dessertOutputDisplay.innerText = "";
  // .value = "";
};
