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
var selectEntireMeal = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('#lets-cook');
var foodOutputDisplay = document.querySelector('.food-output');
var image = document.querySelector('.cook-pot');
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

      if (selectSide.checked) {
        foodOutputDisplay.innerText = `${newSide}`;
      } else if (selectMainDish.checked) {
        foodOutputDisplay.innerText = `${newMainDish}`;
      } else if (selectDessert.checked) {
          foodOutputDisplay.innerText = `${newDessert}`;
      } else if (selectEntireMeal.checked) {
          foodOutputDisplay.innerText = `${newMainDish} with a side of ${newSide} and ${newDessert} for dessert!`
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
  show(foodOutputDisplay);
};

function clearOutputSection() {
  foodOutputDisplay.innerText = "";
  // .value = "";
};
