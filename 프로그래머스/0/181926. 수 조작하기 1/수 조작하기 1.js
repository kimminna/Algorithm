function solution(n, control) {
    var arrays = []
    
    arrays = control.split('')
    

    arrays.forEach((char)=>{
        switch(char) {
            case 'w':
                n +=1;
                break;
            case 's':
                n -=1;
                break;
            case 'd':
                n +=10;
                break;
            case 'a':
                n -=10;
                break;
    }
    
    })
    
    return n;
}