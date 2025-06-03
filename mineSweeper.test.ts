import { assertEquals } from "jsr:@std/assert";


function minesweeper(input : String): string{
 let result = "";

 for(let i=0;i<input.length;i++){
    if (input[i] === "*"){
       result +="*";
    }
    else{
        // case vide devient 1
        let countMine = 0;
        // ici mine a gauche
        if(i>0 && input[i-1] === "*"){
            countMine++;
        }
        
        
        else{
            result +="0";
        }

        result +=countMine.toString();
        
   
       
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

Deno.test("MineSweeper test 3: deux cases vides côte à côte 00", () => {
  const input = "..";
  const expected = "00";
  assertEquals(minesweeper(input), expected);
});

Deno.test("MineSweeper test 4 : case vide a droite cote d'une mine devient 1",()=>{
    const input = ".*";
    const expected ="1*";
    assertEquals(minesweeper(input), expected);

});

Deno.test("MineSweeper test 4 : case vide a gauche d'une mine devient 1",()=>{
    const input ="*.";
    const expected = "*1";
    assertEquals(minesweeper(input), expected);

});

