/**
 * Generates an array of month options based on the current date.
 *
 * @return {Array<string>} An array of month options in the format "Month Year".
 */
 function generateMonthOptions() {
    const today = new Date();
    const currentDay = today.getDate(); // Fix: Correct method to get the current day of the month
    const increment = (currentDay === 1) ? 1 : 2; // Fix: Compare the current day, not the date object
    const firstOptionMonth = today.getMonth() + increment;

    const options = [];
  
    for (let i = 0; i < 12; i++) { // Fix: Start from 0 to include the current month and adjust to cover 12 months
        const month = (firstOptionMonth + i) % 12;
        const year = today.getFullYear() + Math.floor((firstOptionMonth + i) / 12);
        const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
        options.push(`${monthName} ${year}`);
    }

    return options; // Fix: Return the options array
}

export default generateMonthOptions;