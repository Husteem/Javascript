var FavFood = "Pizza";

var NewFood = function () {
  console.log("old favorite food :", FavFood);
}

NewFood(); // Output: old favorite food : Pizza

var FavFood = "Burger";
console.log("new favorite food :", FavFood);
NewFood(); // Output: old favorite food : Burger

