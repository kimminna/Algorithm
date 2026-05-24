function solution(myString) {
    var answer = [];
    
    
    tempAnswer = myString.split('x')
    
    tempAnswer.forEach((a)=>{
        answer.push(a.length)
    })
    
    return answer;
}