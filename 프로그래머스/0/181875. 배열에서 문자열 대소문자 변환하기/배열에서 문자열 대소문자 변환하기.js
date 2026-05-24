function solution(strArr) {
    var answer = [];
    
    strArr.forEach((char, index) => {
        if( index % 2 === 0 ) answer.push(char.toLowerCase());
        else answer.push(char.toUpperCase());
    })
    
    return answer;
}