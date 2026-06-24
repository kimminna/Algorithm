function solution(s) {
    var array = [];
    
    s.split(' ').forEach((element, index) => {
        array.push(Number(element))
    })
        
    const min = Math.min(...array);
    const max = Math.max(...array);
        
    return min + ' ' + max;
}