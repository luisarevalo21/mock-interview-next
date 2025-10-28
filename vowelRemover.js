// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// given a string of letters
//my task remove the vowels then return the string without the vowles
// aeiou

//stratgey
//resStr =" " +letter
//const vowels =[']
//i need to iterste through the entire string, i would check if the letter is a vowel if its it is i skip it
//if its not i will add it to my resString

function vowelRemover(str) {
  let resStr = "";
  const vowels = ["a", "e", "u", "i", "o"];
  for (let i = 0; i < str.length; i++) {
    const lowerCaseLetter = str[i].toLowerCase();
    if (!vowels.includes(lowerCaseLetter)) {
      resStr += str[i];
    }
  }

  return resStr;
}
console.log(vowelRemover("This website is for losers LOL!"));
