function solution(seoul) {
    
    var answerIndex = 0;
    
    seoul.forEach((element, index) => {
       if (element === 'Kim') answerIndex = index;
    })
    
    return `김서방은 ${answerIndex}에 있다`
}