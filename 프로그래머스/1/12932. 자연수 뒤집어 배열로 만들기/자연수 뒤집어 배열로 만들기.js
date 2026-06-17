function solution(n) {
    var term = n.toString().split('').reverse();
    var answer = [];
    
    term.forEach((element) => answer.push(Number(element)));
    
    return answer;
}