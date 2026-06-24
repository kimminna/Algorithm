function solution(phone_number) {
    var answer = '';
    
    let stringLength = phone_number.length;
    let lastNumber = phone_number.slice(-4);
    
    answer = '*'.repeat(stringLength - 4) + lastNumber;
    
    return answer;
}