var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var clear = require('clear');
var chalk = require('chalk');
var figlet = require('figlet');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('CARDS', {horizontalLayout: 'full'})
    )
  );

function QueryService()
{

  var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  
 
  var guest = new XMLHttpRequest();
  guest.open("GET", url, false);
  guest.setRequestHeader("Content-Type", "text/plain");
  guest.send();
  var state = guest.status
  switch(state) {
  	case 200:
  	  console.log("Deck of card: \n" + guest.responseText);
  	  break;
  	default:
  	  console.log("The request didn't succeed!\n The response was: " + guest.state + " " + guest.statusText)
  }
};

QueryService()