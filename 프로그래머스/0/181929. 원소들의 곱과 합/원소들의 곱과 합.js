function solution(num_list) {
    var a = 1;
    var b = 0;
    var answer = 0;
    
    num_list.forEach((element)=>{ a*=element; b+=element});

    a < b*b ? answer = 1 : answer = 0;
    
    return answer; 
}