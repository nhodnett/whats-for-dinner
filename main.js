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
letsCookButton.addEventListener('click', handleError);
//Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomMeal(event) {
    clearOutputSection();
  event.preventDefault();
    var newSide = side[getRandomIndex(side)];
    var newMainDish = mainDish[getRandomIndex(mainDish)];
    var newDessert = dessert[getRandomIndex(dessert)];

  letsCook(newSide, newMainDish, newDessert);
};

function letsCook(newSide, newMainDish, newDessert) {
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

function handleError() {
  if (!selectSide.checked && !selectMainDish.checked && !selectDessert.checked && !selectEntireMeal.checked) {
    letsCookButton.innerText = `SELECT MEAL!`;
      hideOutputSection();
  } else {
      letsCookButton.innerText = `LETS COOK!`;
        showOutputSection();
  }
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

function hideOutputSection() {
  show(image);
  hide(outputHeader);
  hide(foodOutputDisplay);
}

function clearOutputSection() {
  foodOutputDisplay.innerText = "";
  // .value = "";
};
