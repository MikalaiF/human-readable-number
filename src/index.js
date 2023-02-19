module.exports = function toReadable(number) {
   const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
   const decimel = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
   let resDecimel = decimel[Math.floor(number / 10) - 2];
   let hundred = Math.floor(number / 100);
   let remainder = number % 100;
   if (number >= 100 && number < 1000 && number % 100 > 0 && number % 100 < 20 && 10 != 0) {
      return numbers[hundred - 1] + ' hundred' + ' ' + numbers[remainder % 100 - 1];
   } else if (number >= 100 && number < 1000 && number % 100 === 0) {
      return numbers[hundred - 1] + ' hundred';
   }

   if (number == 0) {
      return 'zero';
   } else if (number < 20) {
      return numbers[number - 1];
   } else if (number >= 20 && number < 100 && number % 10 == 0) {
      return resDecimel;
   } else if (number >= 20 && number < 100) {
      return resDecimel += ' ' + numbers[number % 10 - 1];
   } else if (number >= 100 && number < 1000 && number % 10 != 0) {
      return numbers[hundred - 1] + ' hundred' + ' ' + decimel[Math.floor(remainder / 10) - 2] + ' ' + numbers[remainder % 10 - 1];
   } else {
      return numbers[hundred - 1] + ' hundred' + ' ' + decimel[Math.floor(remainder / 10) - 2];
   }
};