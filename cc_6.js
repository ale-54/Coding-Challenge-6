//Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; //calculating profit
    return `Total Profit: $${profit}`; //labeling the total profit
}; 
console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

//Task 2: Function Expression
function calculateSalesTax(amount, taxRate) {
    let salesTax = amount * taxRate;
    return `Sales Tax: $${salesTax}`;
}; //calculating tax based on the amount
console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"

//Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
    let bonus;
    if (performanceRating === "Excellent") {
        bonus = salary * .2; //20% bonus
    } else if (performanceRating === "Good") {
        bonus = salary * .1; //10% bonus
    } else if (performanceRating === "Average") {
        bonus = salary * .05; //5% bonus
    }; //set up how much bonus will be added to salary according to the performance rating
    return `Bonus: $${bonus}`; //labeling the bonuses
};
console.log(calculateBonus(5000, "Excellent")); // Expected output: "Bonus: $1000"
console.log(calculateBonus(7000, "Good")); // Expected output: "Bonus: $700"

//Task 4: Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let cost;
    if (plan === "Basic") {
        cost = 10; //$10/month for subscription
    } else if (plan === "Premium") {
        cost = 20; //$20/month for subscription
    } else if (plan === "Enterprise") {
        cost = 50; //$50/month for subscription
    } let totalCost = (cost * months) - discount; //formula
    return `Total Cost: $${totalCost}`; //labeling the total cost
};
console.log(calculateSubscriptionCost("Basic", 6, 10)); // Expected output: "Total Cost: $50"
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Expected output: "Total Cost: $240"

//Task 5: Returning Values
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    return `Converted Amount: $${convertedAmount}`; //labeling the converted amount
};
console.log(convertCurrency(100, 1.1)); // Expected output: "Converted Amount: $110.00"
console.log(convertCurrency(250, 0.85)); // Expected output: "Converted Amount: $212.50"