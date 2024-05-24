//  This code is intended to inject the correct month options into a dropdown based on the current date.
//  It works correctly if the list of months is always a set of twelve months, with years,
//  which are all listed in chronological order. 
//
//  The first month listed is next month if today is the 1st, 
//  but two months from now if today is any other day of the month.
//
//  Correct as many errors as you can, and add comments where you have made changes.

import generateMonthOptions from "./generateMonthOptions";

document.addEventListener('DOMContentLoaded', function() {
  generateMonthOptions();
  const selectElement = document.getElementById('month-select-dropdown');
  if (selectElement) {
      selectElement.innerHTML = generateMonthOptions()
          .map(option => `<option value="${option}">${option}</option>`)
          .join('');
  }
});
