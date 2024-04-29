import inquirer from "inquirer";

const currency: any = {
  USD: 1, //base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBO", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "EUR", "GBO", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number",
    choices: ["USD", "EUR", "GBO", "INR", "PKR"],
  },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let basedAmount = amount / fromAmount; //USD base currency //4
let convertedAmount = basedAmount * toAmount;
console.log(convertedAmount);
