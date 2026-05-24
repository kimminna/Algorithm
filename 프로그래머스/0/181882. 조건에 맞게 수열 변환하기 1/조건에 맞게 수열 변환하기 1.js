function solution(arr) {
    return arr.map((a) => {
        if (a % 2 === 0 && a >= 50) {
            return a / 2;
        } else if (a % 2 !== 0 && a < 50) {
            return a * 2; 
        } else {
            return a;    
        }
    });
}