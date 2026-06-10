function solution(name, yearning, photo) {
   let map = new Map();
    for(let i=0; i<name.length; i++){
        map.set(name[i], yearning[i])
    }
    return photo.map((arr)=>{
        let sum = 0;
        arr.forEach((v)=>{
            sum += map.get(v)?map.get(v):0
        })
        return sum
    });
}