// Function
/**
 * 1. Function : sekumpulan program, yang digunakan untuk menyelesaikan tugas tertentu, dan umumnya bisa digunakan berkali-kali
 * 2.(bagian proses)  untuk menggunakan fucntion, maka kita akan membuat function
 * 3. Function bersifat reusable
 * 4. Build-in Function : function bawaan javascript "console log, prompt, alert"
 * 5. User-Defined function : function yang kita buat sendiri
 *      a.menggunakan keyword function
 *      b.Nama function
 *      c. Parameter/argument : agar function dapat menirma data dari luar function
 *          i. Disimpan didalam ()
 *          ii. Boleh ada, boleh tidak
 *          iii. jika argument lebih dari 1, maka harus dipisah dengan ","
 */

/** Declarative Function
 * 
 * keywordFunction namaFunction(argument){
 *       //function code
 * 
 * }
 * 
 */

// global Variable yang digunakan untuk satu variable
// let angka1 = 200;
// let angka2 = 25;
// // deklarasi function / pembuatan function
// function penjumlahan() {
//     let hasil = angka1 + angka2; // no argument
//     console.log(hasil);
// }

// // memanggil function
// penjumlahan;



// menggunakan/menjalankan function
// penjumlahan();

// function pengurangan(argument1, argument2) {
//     let hasil = argument1 - argument2
//     console.log(hasil);
// }

// pengurangan(100, 35)

/** Function expression
 * 
 * keywordVariable namaVariable = keywordFunction(argument){
 *      //function code
 * }
 * 
 */

// const perkalian = function (argument1, argument2) {
//     let hasil = argument1 * argument2;
//     console.log(hasil)
// }

// perkalian(3, 3)

/** Arrow Function
 * keywordVariable namaVariable=(argument)=>{
 *      //function code
 * 
 * }
 **/

// const pembagian = (argument1, argument2) => {
//     let hasil = argument1 / argument2
//     console.log(hasil)
// }
// pembagian(12, 6);

// Default value Argument

// const kelipatan = (number1, number2 = 2) => {
//     let hasil = number1 % number2;
//     if (hasil = 0) {
//         console.log(`${number1} adalah kelipatan ${number2}`)
//     }else {
//         console.log(`${number1} bukan kelipatan ${number2}`)
// }}

// kelipatan(15, 6)

// return : keyword yang diperuntukan untuk mengeluarkan nilai dari function
// const kelipatan = (number1, number2 = 2) => {
//     let hasil = number1 % number2;
//     if (hasil = 0) {
//         return `${number1} adalah kelipatan ${number2}`
//     }else {
//        return `${number1} bukan kelipatan ${number2}`
// }}

// console.log(kelipatan(15, 6));

// const kelipatan = (number1, number2 = 2) => {
//     let hasil = number1 % number2;
//     if (hasil = 0) {
//         return `${number1} adalah kelipatan ${number2}`
//     } else {
//         return `${number1} bukan kelipatan ${number2}`
//     }
// }

// const GanjilGenap = (number1, number2) => {
//     let hasil = number1 % number2;
//     if (hasil % 2 == 0) {
//         return `${number1},${number2} hasil adalah ganjil`
//     } else  {
//         return `${number1},${number2} hasil adalah genap`
//     }
// }
// console.log(GanjilGenap(10,0));

// let barang = ["jaket", "sepatu", "kaos"]

// let list = ''
// for (let i =0; i<barang.length; i++){
//     list += `${barang[i]};\n`;
// }

// namaVariableArray.forEach() : melooping sebuah data array dan tidak bisa mengasilkan array baru atau tidak menghasilkan return.
// const cetak = (value, index) => {
//     list += `${index + 1 } ${value};\n`
// }
// barang.forEach(cetak)// cara 1

// barang.forEach((value, index) => {
//     list += `${index + 1} ${value};\n`
// }) // cara 2

// console.log(list)

//  namaVariableArray.map(): melooping sekeumpulan data array tetapi bisa  menghasilan array baru atau menghasilkan return.

let numb = [2, 3, 4, 1, 6, 5];
// let kali = (value, index) => {
//     return value * 2
// }

// let numbArr = numb.map(kali); // cara 1

// let numbArr = numb.map((value, index) => {
//     return `${value + 1}. ini angaka ${value * 2}`
// })

// console.log(numbArr)

// const jumlah = (cb, pengali) => {
//     return angka1 + angka2
// };

// const jumlahdikali = (cb, pengali) => {
//     return cb(2, 3) * pengali
// }

// console.log(jumlahDikali(jumlah, 5)) // == 25 cb yang isi nya angka satu dan dua diisi 2 dan 3 dimana di console.log akan dikali dengan 5

//  .join mengganti array to string (console.log(index.string))

// namaVariableArray.filter()   : megolah data array sehingga menghasilkan array baru berdasarkakan condition yang diberikan.
let filterGenap = numb.filter((value, index) => {
    return value % 2 == 0
});
console.log(filterGenap)

// return database.map ((vale, idx) =>{
//     return `${idx + 1}. ${value}`
// }).join("\n")