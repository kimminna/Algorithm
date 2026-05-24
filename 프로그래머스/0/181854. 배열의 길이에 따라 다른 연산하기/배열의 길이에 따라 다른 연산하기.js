function solution(arr, n) {
    var answer = [];
    
    if (arr.length % 2 !== 0) {
        arr.forEach((a, index)=>{
            if(index % 2 === 0){
                answer.push(a + n);
            } 
            else{
                answer.push(a)
            }
        })
    }
    else{
        arr.forEach((a, index)=>{
            if(index % 2 === 0){
                answer.push(a);
            } 
            else{
                answer.push(a + n)
            }
        })
        
    }
    return answer;
}