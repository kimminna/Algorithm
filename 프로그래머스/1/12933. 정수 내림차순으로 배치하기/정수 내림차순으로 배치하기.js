function solution(n) {
    var array = n.toString().split('');
    
    return Number(array.sort().reverse().join(''))
}