function solution(s){
    var array = [];
    
    for (const element of s) {
        if(element === '(') {
            array.push('(')
        } else if (element === ')') {
            if(array.length === 0) {
                return false
            }
            
            array.pop()
        }
    }

    return array.length === 0;
}