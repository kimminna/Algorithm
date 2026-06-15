function solution(money) {
   
    const americano = Math.floor(money / 5500);
    const remaining = Math.floor(money - americano * 5500)
    
    return [americano, remaining];
}