function solution(num_list) {
    var even = 0;
    var odd = 0;
    
    num_list.forEach((element) => element % 2 === 0 ? even += 1 : odd += 1)
    
    return [even, odd];
}