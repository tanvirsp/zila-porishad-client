export const EnglishToBangla = (englishNumber) =>{

    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return englishNumber
    .toString()
    .split('')
    .map(digit => (/\d/.test(digit) ? banglaDigits[digit] : digit))
    .join('');

}
