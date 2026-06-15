function solution(n)
{
    var answer = 0;
    
    n.toString().split('').forEach((element) => answer += Number(element))
    
    return answer;
}