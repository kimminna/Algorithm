function solution(x) {
    var sum = 0;
    x.toString().split('').forEach((element) => sum += Number(element))
    
    if(x % sum === 0) return true;
    return false;
}