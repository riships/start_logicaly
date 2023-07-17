var dataOfCars = ["volvo", "jeep", "thar", "suzuki", "audi",];
var dataOfCarsPrice = [50, 60, 70, "80", "7 0", 56];


var numberArray = dataOfCarsPrice.map(element => {
    if (typeof element === 'string') {
        return parseInt(element.replace(/\s/g, ""), 10);
    }
    return element

});

dataOfCars.push("gaurakha")
console.log(numberArray);
