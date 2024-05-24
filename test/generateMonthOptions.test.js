
// monthOptions.test.js
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import  generateMonthOptions  from '../generateMonthOptions';

describe('generateMonthOptions', () => {
    let originalDate;

    beforeAll(() => {
        // Save the original Date object
        originalDate = global.Date;
    });

    afterAll(() => {
        // Restore the original Date object
        global.Date = originalDate;
    });

    function mockDate(date) {
        // Mock the Date object to control the current date
        global.Date = class extends originalDate {
            constructor() {
                return new originalDate(date);
            }

            static now() {
                return new originalDate(date).getTime();
            }

            getDate() {
                return new originalDate(date).getDate();
            }

            getMonth() {
                return new originalDate(date).getMonth();
            }

            getFullYear() {
                return new originalDate(date).getFullYear();
            }
        };
    }

    it('should generate correct month options when today is the 1st of the month', () => {
        mockDate('2024-05-01T00:00:00Z'); // May 1, 2024

        const expectedOptions = [
            'June 2024', 'July 2024', 'August 2024', 'September 2024', 'October 2024', 
            'November 2024', 'December 2024', 'January 2025', 'February 2025', 'March 2025', 
            'April 2025', 'May 2025'
        ];

        expect(generateMonthOptions()).toEqual(expectedOptions);
    });

    it('should generate correct month options when today is any other day of the month', () => {
        mockDate('2024-05-23T00:00:00Z'); // May 23, 2024

        const expectedOptions = [
            'July 2024', 'August 2024', 'September 2024', 'October 2024', 'November 2024', 
            'December 2024', 'January 2025', 'February 2025', 'March 2025', 'April 2025', 
            'May 2025', 'June 2025'
        ];

        expect(generateMonthOptions()).toEqual(expectedOptions);
    });
});
