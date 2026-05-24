function solution(num_list) {
    var answer = 0;
    let a = 0;
    let b = 0;
    
    num_list.forEach((v, i)=> i%2 ===0 ? a+=v : b+=v);
    if (a>b) return a;
    else return b; 
}