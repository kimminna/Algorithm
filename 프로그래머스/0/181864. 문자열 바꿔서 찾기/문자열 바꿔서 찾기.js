function solution(myString, pat) {
    var answer = 0;
    
    const newString = myString.split('').map((char)=> char === 'A' ? 'B' : 'A').join('');
    
    answer = newString.includes(pat) ? 1 : 0;
    
    return answer;
}