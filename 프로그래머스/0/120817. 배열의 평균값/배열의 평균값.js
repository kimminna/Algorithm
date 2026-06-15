function solution(numbers) {
    var answer = 0;
    
    numbers.reduce((acc, cur) => answer = acc + cur )
    
    return answer / numbers.length
    
}