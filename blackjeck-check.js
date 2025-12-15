let count = 0;

function cc (card) {
  if (card >= 2 && card <= 6) {
    count++;
  }

  else if (card == 7||card == 8||card == 9) {
    //оставляем без изменений
  }

  else if (card==10||card=="J"||card=="Q"||card =="K"||card=="A") {
    count--;
  }

  if (count > 0) {
    return `${count} Bet`
  }
  else {
    return `${count} Hold`
  } 
}