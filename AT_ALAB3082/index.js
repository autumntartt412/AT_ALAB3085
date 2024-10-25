// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.


const PI = 3.1415;
let radius = 5;
const area = (PI * radius * radius);
const requiredSpacePerPlant = .8;
const maxCapacity = Math.abs(area / requiredSpacePerPlant);
let weekOnePlants = 20;
let weekTwoPlants = (weekOnePlants * 2);
let weekThreePlants = (weekTwoPlants * 2);

// /max cap for plants
console.log("Max capacity for plants:", maxCapacity);

// first week of plant growth

let weekOnePlantsrequiredSpace = (weekOnePlants * requiredSpacePerPlant);
console.log(weekOnePlants, weekOnePlantsrequiredSpace);
console.log("Plants after first week:", weekOnePlants);


// plants doubled after 2 weeks


let weekTwoPlantsrequiredSpace = (weekTwoPlants * requiredSpacePerPlant);
console.log(weekTwoPlants, weekTwoPlantsrequiredSpace);
console.log("Plants after second week:", weekTwoPlants);

// plants after 3 weeks

let weekThreePlantsRequiredSpace = (weekThreePlants * requiredSpacePerPlant);
console.log(weekThreePlantsRequiredSpace);
console.log("Plants after third week:", weekThreePlants);



if (weekOnePlantsrequiredSpace > maxCapacity * 0.8 || weekTwoPlantsrequiredSpace > maxCapacity * 0.8 || weekThreePlantsRequiredSpace > maxCapacity * 0.8) {
    console.log("Time to prune the plants.");
} else if (weekOnePlantsrequiredSpace > maxCapacity * 0.5 || weekTwoPlantsrequiredSpace > maxCapacity * 0.5 || weekThreePlantsRequiredSpace > maxCapacity * 0.5) {
    console.log("Monitor the plants.");
} else {
    console.log("Plants be planted.");
};



let weekOnePlantsPlanted = 100;
let weekTwoPlantsPlanted = (weekOnePlantsPlanted * 2);
let weekThreePlantsPlanted = (weekTwoPlantsPlanted * 2);
let weekFourPlantsPlanted = (weekThreePlantsPlanted * 2);
let weekFivePlantsPlanted = ( weekFourPlantsPlanted * 2);
let weekSixPlantsPlanted = (weekFivePlantsPlanted  * 2);
let weekSevenPlantsPlanted = ( weekSixPlantsPlanted  * 2);
let weekEightPlantsPlanted = (weekSevenPlantsPlanted  * 2);
let weekNinePlantsPlanted = (weekEightPlantsPlanted * 2);
let weekTenPlantsPlanted = (weekNinePlantsPlanted  * 2);
let weekTenPlantsrequiredSpace = (weekTenPlantsPlanted * requiredSpacePerPlant);

// upruned week 10
console.log(weekTenPlantsPlanted);
console.log(weekTenPlantsrequiredSpace);

try {
    if (weekTenPlantsRequiredSpace > maxCapacity) {
        throw new Error("Space required for week 10 plants is greater than max capacity.");
    }
} catch (error) {
    console.error("Error:", error.message);
}
