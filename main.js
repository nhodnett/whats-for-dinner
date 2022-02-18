// Meal Arrays: Data Model
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
var sideOutputDisplay = document.querySelector('.side-output');
var mainOutputDisplay = document.querySelector('.main-output');
var dessertOutputDisplay = document.querySelector('.dessert-output');
var image = document.querySelector('.cook-pot');
var outputSection = document.querySelector('.output-section');

//Event Listeners
letsCookButton.addEventListener('click', generateRandomMeal);

//Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


generateRandomMeal(event) {
  event.preventDefault();
    newSide = side[getRandomIndex(side)];
    newMainDish = mainDish[getRandomIndex(mainDish)];
    newDessert = dessert[getRandomIndex(dessert)];

      if (newSide.checked === true) {
        sideOutputDisplay.innerText = `${newSide}`;
      } else if (newMainDish.checked === true) {
        mainOutputDisplay.innerText = `${newMainDish}`;
        } else if (newDessert.checked === true) {
          dessertOutputDisplay.innerText = `${newDessert}`;
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
  show(outputSection);
  // .innerText = "";
  // .value = "";
};
