function solution(arr) {
    if(arr.length === 1) return [-1];
    
    const minNumber = Math.min(...arr);
    
    const minIndex = arr.indexOf(minNumber);
    
    arr.splice(minIndex, 1);
    
    return arr;
    
}