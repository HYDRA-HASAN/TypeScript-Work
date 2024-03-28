import inquirer from 'inquirer';
// Define the currency conversion rates
const conversionRates = {
    USD: 1, // 1 USD = 1 USD
    EUR: 0.85, // 1 USD = 0.85 EUR
    GBP: 0.73, // 1 USD = 0.73 GBP
    JPY: 110.25, // 1 USD = 110.25 JPY
    // Add more currencies and their conversion rates here
};
// Prompt the user for the amount and currency
inquirer
    .prompt([
    {
        type: 'number',
        name: 'amount',
        message: 'Enter the amount of money:',
    },
    {
        type: 'list',
        name: 'currency',
        message: 'Select the currency:',
        choices: Object.keys(conversionRates),
    },
])
    .then((answers) => {
    const { amount, currency } = answers;
    // Perform the currency conversion
    const convertedAmount = amount * conversionRates[currency];
    // Display the result
    console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${currency}`);
})
    .catch((error) => {
    console.error('An error occurred:', error);
});
