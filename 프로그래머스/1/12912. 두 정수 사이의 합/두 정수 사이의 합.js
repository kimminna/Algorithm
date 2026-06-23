function solution(a, b) {
    var answer = 0;
    
    temp = a;
    
    if (a > b){ 
        a = b;
        b=temp;
    }
    
    for (var i = a; i <= b; i++ ){
        answer += i;
    }
    
    return answer;
}