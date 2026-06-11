function solution(num_list, n) {
    var answer = [];
    
    num_list.forEach((element, index)=> answer.length !== n && answer.push(element))
    
    return answer;
}