function solution(n) {
    var array = [];
    
    for (var i = 0; i<= n; i++){
        if (n % i === 1) array.push(i)
    }
    
    return Math.min(...array);
}