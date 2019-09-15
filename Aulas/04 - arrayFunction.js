const arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

const newArr = arr.map(function (item, index) {
    return item + index;
    //return item * 2;
});

console.log(newArr);

const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function (item) {
    return item % 2 == 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);


for (const t of arr) {
    console.log(t);
}