function solution(a, b) {
    var firstAnswer = Number(String(a) + b);
    var secondAnswer = 2 * a * b;
    
    return firstAnswer >= secondAnswer ? firstAnswer : secondAnswer;
}