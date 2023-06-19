function gemsToDiamond(fg1, fg2, fg3) {
    let totalDiamonds = fg1 * 21 + fg2 * 32 + fg3 * 43;
    if (totalDiamonds > 1000) {
        return totalDiamonds - 2000;
    }
    else {
        return totalDiamonds;
    }
}
console.log(gemsToDiamond(1, 1, 1));