import { assertEquals } from "jsr:@std/assert";

function minesweeper(input: string): string {
  // on split la chaine
  const lines = input.split("\n");
  const rows = lines.length;
  const cols = lines[0].length;
  let result = "";

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (lines[row][col] === "*") {
        result += "*";
      } else {
        let countMine = 0;

        // On vérifie les cases adjacentes
        for (let caseRow = -1; caseRow <= 1; caseRow++) {
          for (let caseCol = -1; caseCol <= 1; caseCol++) {
            if (caseRow === 0 && caseCol === 0) {
              continue;
            }

            const newRow = row + caseRow;
            const newCol = col + caseCol;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              if (lines[newRow][newCol] === "*") {
                countMine++;
              }
            }
          }
        }

        result += countMine.toString();
      }
    }

    if (row < rows - 1) {
      result += "\n";
    }
  }

  return result;
}

Deno.test("MineSweeper test 1: une seule case vide", () => {
  const input = ".";
  const expected = "0";
  assertEquals(minesweeper(input), expected);
});

Deno.test("MineSweeper test 2: une case * ", () => {
  const input = "*";
  const expected = "*";
  assertEquals(minesweeper(input), expected);
});

Deno.test("MineSweeper test 3: deux cases vides côte à côte 00", () => {
  const input = "..";
  const expected = "00";
  assertEquals(minesweeper(input), expected);
});

Deno.test(
  "MineSweeper test 4 : case vide a droite cote d'une mine devient 1",
  () => {
    const input = ".*";
    const expected = "1*";
    assertEquals(minesweeper(input), expected);
  }
);

Deno.test(
  "MineSweeper test 4 : case vide a gauche d'une mine devient 1",
  () => {
    const input = "*.";
    const expected = "*1";
    assertEquals(minesweeper(input), expected);
  }
);

Deno.test("MineSweeper test 4 : mine entoure de cases vides", () => {
  const input = ".*.";
  const expected = "1*1";
  assertEquals(minesweeper(input), expected);
});

Deno.test("MineSweeper test 5: grille 2x2 simple", () => {
  const input = "..\n..";
  const expected = "00\n00";
  assertEquals(minesweeper(input), expected);
});

Deno.test("MineSweeper test 6 : grille 2x2 avec une mine", () => {
  const input = "*.\n..";
  const expected = "*1\n11";
  assertEquals(minesweeper(input), expected);
});

Deno.test("MineSweeper test 7 : grille 3x6 case vide simple",()=>{
    const input = "......\n......\n......";
    const expected = "000000\n000000\n000000";
    assertEquals(minesweeper(input),expected);

});


Deno.test("MineSweeper test 9: grille 3x6 mines et nombres",()=>{
    const input = ".*.**.\n....*.\n..*...";
    const expected ="1*2**2\n1234*2\n01*211";
    assertEquals(minesweeper(input),expected);

});

Deno.test("MineSweeper test 8 : grille 3x6 mines entourees de cases vides",()=>{
    const input = ".*....\n...*..\n......*";
    const expected ="1*1111\n111*11\n11111*";
    assertEquals(minesweeper(input),expected);
});

