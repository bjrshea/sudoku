
import $ from 'jquery';
// Backend Logic

// export function CreateSudoku() {
//   console.log("hello");
// }

var numbersToInsert = [];
var gridSpotsToInsert = [];
//
// const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const columns = ["a", "b", "c", "d", "e", "f", "g", "h", "z"];
// const boxes = ["i", "j", "k", "l", "m", "n", "o", "p", "q"];
const gridSpots = ["i1a",
"i1b",
"i1c",
"i2a",
"i2b",
"i2c",
"i3a",
"i3b",
"i3c",
"j1d",
"j1e",
"j1f",
"j2d",
"j2e",
"j2f",
"j3d",
"j3e",
"j3f",
"k1g",
"k1h",
"k1z",
"k2g",
"k2h",
"k2z",
"k3g",
"k3h",
"k3z",
"l4a",
"l4b",
"l4c",
"l5a",
"l5b",
"l5c",
"l6a",
"l6b",
"l6c",
"m4d",
"m4e",
"m4f",
"m5d",
"m5e",
"m5f",
"m6d",
"m6e",
"m6f",
"n4g",
"n4h",
"n4z",
"n5g",
"n5h",
"n5z",
"n6g",
"n6h",
"n6z",
"o7a",
"o7b",
"o7c",
"o8a",
"o8b",
"o8c",
"o9a",
"o9b",
"o9c",
"p7d",
"p7e",
"p7f",
"p8d",
"p8e",
"p8f",
"p9d",
"p9e",
"p9f",
"q7g",
"q7h",
"q7z",
"q8g",
"q8h",
"q8z",
"q9g",
"q9h",
"q9z"];



export function CreateSudoku() {
  for (var i = 0; i < 30; i++) {
      FindNumbersToInsert();
  }
  for (var m = 0; m <30; m++) {
    getGridInserts();
  }
  Matching();
  // console.log(numbersToInsert);
  // console.log(gridSpotsToInsert);
  }

export function FindNumbersToInsert() {
  var randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  var ArrayFrequency = checkNumberArrayFrequency(randomNumber);
  if (ArrayFrequency <= 3 ) {
    numbersToInsert.push(randomNumber);
  } else {
    FindNumbersToInsert();
  }
}

function checkNumberArrayFrequency(randomNumber) {
    var checkNumber = randomNumber;
    var frequency = 0;
  for(var j = 0; j < numbersToInsert.length; j++) {
      if (numbersToInsert[j] == checkNumber) {
        frequency++;
      }
    }
    return frequency;
  }

function getGridInserts() {
  var gridNumber = gridSpots[Math.floor(Math.random()*gridSpots.length)];
  var checkDuplicates = checkDuplicateFrequency(gridNumber);
  if (checkDuplicates <= 1 ) {
    gridSpotsToInsert.push(gridNumber);
  } else {
    getGridInserts();
  }
}


function checkDuplicateFrequency(gridNumber) {
    var checkGrid = gridNumber;
    var frequency = 0;
  for (var k = 0; k < gridSpotsToInsert.length; k++) {
      if (gridSpotsToInsert[k] === checkGrid) {
        frequency++;
      }
    }
    return frequency;
  }




function Matching() {
  let positionLength = gridSpotsToInsert.length;
  for (var i = 0; i < positionLength; i++) {
    var gridPositionX = gridSpotsToInsert[i];
    var valuePositionX = numbersToInsert[i];
    var pos = gridPositionX;
    console.log(pos);
    $("." + pos).text(valuePositionX);
  }

  // $(".i1a").text(9);
}
