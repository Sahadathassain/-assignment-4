//  Problem-1 (maidGame) \/

// --        Description          --  //   
// Firstly number function mindGame. After calling a function, giving the parameter. I will run the program with code like problem condition with if, else condition //
//  Code   //

function mindGame(num) {
    if (typeof num !== 'number') {
        return 'You Give Only Number';
    }
    else {
        let newNum = (num * 3 + 10) / 2 - 5;
        return newNum;
    }
}
let total = mindGame();


//  Problem-2 (evenOdd)\/

//    --     Description      --      // 
// function evenOdd, After calling a function, giving the parameter. Call with the conditions of the program in if, else, then run with let type outside the function.//
//  Code  start //

function evenOdd(str) {
    if (typeof str !== 'string') {
        return 'You Give Only String';
    }
    else if (str.length % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
let typeEvenOdd = evenOdd();


//  Problem-3 (isLGSeven)\/


//   --      Description       --     //
// function isLGSeven, After calling a function, giving the parameter. I  run the conditions of the function in the if, else, ruturn and let.  I will call with the return value//

function isLGSeven(num) {
    let difference = num - 7;
    if (typeof num !== 'number') {
        return 'You Give Only Number';
    }
    else if (difference < 7) {
        return difference;
    }
    else {
        return num * 2;
    }
}
let returnNum = isLGSeven();


//  Problem-4 (findingBadData )\/

//   --      Description      --      //
//  array function isLGSeven, After calling a function, giving the parameter. Then for loop will run with the if condition and return badData//


function findingBadData(arr) {
    if (!Array.isArray(arr)) {
        return 'You Give Only Array';
    }
    let badDataCount = 0;
    for (const value of arr) {
        if (typeof value !== 'number') return 'You Give Only Array';
        if (value < 0) badDataCount++;
    }
    return badDataCount;
}
let result = findingBadData([]);


//  Problem-5 (gemsToDiamond)\/

//  --       Description        --    //
//  number function gemsToDiamond. After calling a function, giving the parameter.Then Multiply the fnd1 21 by the fnd2 32 and the fnd3 by 43 and add it again and return totalDiamond by running the if condition.//


function gemsToDiamond(fnd1, fnd2, fnd3) {
    if (typeof fnd1 !== 'number' || typeof fnd2 !== 'number' || typeof fnd3 !== 'number') {
        return 'You Give Only Number';
    }
    let totalDiamond = fnd1 * 21 + fnd2 * 32 + fnd3 * 43;
    if (totalDiamond > 1000) {
        totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
}
let returnDaimond = gemsToDiamond();