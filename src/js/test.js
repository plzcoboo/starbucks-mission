//new Set
let arr1 = ['사과','배','복숭아','사과','수박','수박','배'];
// 중복제거 - 한개 출력
let obj1 = new Set(arr1)
// console.log(obj1)
obj1 = ['딸기','포도',new Set(arr1)]
console.log(obj1)

let obj2 = ['딸기','포도',...new Set(arr1)]
console.log(obj2)