var fortunes = [
    // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
    "You will win a <em>million</em> dollars! Yay!",
    "You will step on a piece of gum.",
    "You will be attacked by a fluffy bunny."

  ];
  
  function tellFortune() {
    
    // generate a random number between 0 and the number of the array items
    var randomNumber = Math.floor(Math.random() * fortunes.length);
  
    // take the fortune at the random spot in the array and insert it into the "fortune" div
   document.getElementById("fortune").indexHTML= fortunes[randomNumber];
  }
  
  function reset() {
    // what goes here? (hint: make the fortune div contain an empty string)
    
  }