function solution(arr1, arr2) {
    var answer = 0;
    
    if(arr1.length !== arr2.length){
        if(arr1.length > arr2.length){
            answer = 1;
        }else{
            answer = -1;
        }
        
    }else{
        var sum1 = 0;
        var sum2 = 0;
        
        arr1.forEach((a)=>{
            sum1+=a;
        })
        arr2.forEach((a)=>{
            sum2+=a;
        })
        
        if(sum1>sum2) answer = 1;
        else if (sum1<sum2) answer = -1;
        else answer = 0;
    }
    
    return answer;
}