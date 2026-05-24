function solution(myString, pat) {
    var answer = 0;
    
    const lowerString = myString.toLowerCase();
    const lowerPat = pat.toLowerCase();
    
    answer = lowerString.includes(lowerPat) ? 1 : 0;
    
    return answer;
}