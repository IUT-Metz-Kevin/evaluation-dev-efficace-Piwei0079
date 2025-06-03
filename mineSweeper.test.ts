import { assertEquals } from "jsr:@std/assert";


function minesweeper(input : String): string{

    if (input === "*"){
        return "*";
    }
    return "0";
}


Deno.test("MineSweeper test 1: une seule case vide", () => {
  const input = ".";
  const expected = "0";
  assertEquals(minesweeper(input), expected);
});

Deno.test("MineSweeper test 2: une case * ", ()=>{
    const input = "*";
    const expected = "*";
    assertEquals(minesweeper(input), expected)
});

