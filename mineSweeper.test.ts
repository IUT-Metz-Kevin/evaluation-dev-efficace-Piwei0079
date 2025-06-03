import { assertEquals } from "jsr:@std/assert";


function minesweeper(input : String): string{
 let result = "";

 for(let i=0;i<input.length;i++){
    if (input[i] === "*"){
       result +="*";
    }
    else{
        result +="0";
    }

 }
    
    return result;
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

Deno.test("MineSweeper - deux cases vides côte à côte", () => {
  const input = "..";
  const expected = "00";
  assertEquals(minesweeper(input), expected);
});

