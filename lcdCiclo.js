const lcdPatterns = [
    [" - ", "   ", " - ", " - ", "   ", " - ", " - ", " - ", " - ", " - "],
    ["| |", "  |", "  |", "  |", "| |", "|  ", "|  ", "  |", "| |", "| |"],
    [" - ", "   ", " - ", " - ", "   ", " - ", " - ", "   ", " - ", " - "],
  ];
  
  const lcdNumbers = {
    0: [0, 4, 0, 4, 0],
    1: [1, 3, 3],
    2: [0, 1, 2, 4, 6],
    3: [0, 1, 2, 3, 6],
    4: [5, 1, 2, 3],
    5: [0, 5, 2, 3, 6],
    6: [0, 5, 2, 3, 4, 6],
    7: [0, 1, 3],
    8: [0, 1, 2, 3, 4, 5, 6],
    9: [0, 1, 2, 3, 5, 6],
  };
  
  function displayLCDNumber(number) {
    const lcdNum1 = [];
    const lcdNum2 = [];
    const lcdNum3 = [];
  
    for (let i = 0; i < 3; i++) {
      for (const digit of number) {
        const pattern = lcdNumbers[digit];
        lcdNum1.push(lcdPatterns[i][pattern[0]]);
        lcdNum2.push(lcdPatterns[i][pattern[1]]);
        lcdNum3.push(lcdPatterns[i][pattern[2]]);
      }
    }
  
    console.log(lcdNum1.join("") + "\n" + lcdNum2.join("") + "\n" + lcdNum3.join(""));
  }
  
  const numero = "1237839388328392839";
  displayLCDNumber(numero);
  