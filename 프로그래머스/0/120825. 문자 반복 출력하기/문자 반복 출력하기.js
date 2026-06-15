function solution(my_string, n) {
    var answer = [];
    my_string.split('').forEach((element)=> {
        for (var i = 1; i <= n; i++) answer.push(element)})
    
    return answer.join(''); 
}