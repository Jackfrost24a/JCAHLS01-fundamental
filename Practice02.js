let product = [
    {
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        name: "sepatu",
        stock: 10,
        price: 80000
    }
];

// menghitung total harga
// let total = 0;
// product.forEach(function(value, index){
//     total += value.price

// })
// console.log(total)

// menghitung total harga menggunakan duplikasi forEach
// const duplicateForEach = (cbfn, array) => {
//     for(let i = 0; i<array.length; i++){
//         cbfn(array[i], i)
//     }

// }

// let total = 0;
// duplicateForEach((value, index) => {
//     total += value.price;
// }, product);
// console.log(total);

//membuat list barang menggunakan funsi map
// const duplicateMap = (cbfn, array) => {
//     let tempArr = [] // karena array baru maka harus ada ini
//     for (let i = 0; i < array.length; i++) { 
//         tempArr.push(cbfn(array[i], i)) } {

//     }
//     return tempArr; //callback function masuk kesini



// }
// let newDB = duplicateMap((value, index) => {
//     return `${index + 1},${value.name}`
// }, product);
// console.log(newDB.join("\n"));

// membuat list filter barang menggunakan duplikasi fungsi array filter callback nya (cond)
// const duplicateFilter = (cbfn, array) => {
//     let tempArr = [] // karena array baru maka harus ada ini
//     for (let i = 0; i < array.length; i++) {
//         let bool = cbfn(array[i], i);
//         if (bool) {
//             tempArr.push(array[i])
//         }



//     } return tempArr

// }
// let newDB = duplicateFilter((value, index) => {
//     return `${value.price}` > 10000
// }, product);
// console.log(newDB)

// object function 
let student = {
    nama: "Edo Renlado",
    usia: 20,
    kelas: "IPA"
}

// Object.keys(student); // "[nama","usia","kelas"]
// console.log(object.keys(student))

// const duplicateGetKeys = (obj) => {
//     let temp = []
//     for (let property in obj) {
//         temp.push([property])

//     }
//     return temp

// }
// console.log(duplicateGetKeys(student))

const duplicateGetValue = (obj) => {
    let temp = []
    for (let values in obj) {
        temp.push(student[values])

    }
    return temp
}
console.log(duplicateGetValue(student)) // ["Edo Renaldo,20,IPA"]

const duplicateGetEntries = (obj) => {
    let temp = []
    for (let property in obj) {
        temp.push([`${property},${obj[property]}`])

    }
    return temp

}
console.log(duplicateGetEntries(student)); //[["nama, edo ronaldo"]]