function solution(absolutes, signs) {
    
    var result = 0;
    
    absolutes.forEach((element, index) => {
        if (signs[index] === true) {
            result += element;
        } else {
            result += -element; 
        }
    });
    
    return result;
    
    
}