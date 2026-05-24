function solution(num_str) {
    var answer = 0;
    
    var arrays = [];
    
    arrays = num_str.split('');
    
    arrays.forEach((char)=>{
        answer += Number(char)
    })
    return answer;
}