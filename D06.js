// Array of Object
/**
 * 1. Merupakan struktur data yang biasa digunakan untuk output database
 * 2. juga digunakan untuk data JSON (Javascript Object Notation) struktur data tipe utama object diperuntungkan sebagai media penyimpanan data
 * 3. Struktur penulisan :
 *      let arrObj = [
 *        {
 *             id,
 *             name : "Jacket",
 *             Stock;[
 *                  {
 *                   Type: "Red",
 *                   qty : 20
 * 
 *                  }
 * 
 *              ], 
 *         
 *         }   
 * 
 *      ]
 * 
 * 
 * */

//  array.map() ==> ditunjukan untuk mengolah data array of Object =>> Output : Array
//  array.filter() ==> ditunjukan untuk mencari data array of Object ==> output : Array
//  Array.findINdex()==> ditunjukan untuk mencari alamat index.==> output : number (karena mencari Index dari data kita nya)

// let dataProduct = [
//     {
//         nama: "jacket",
//         stock: [
//             {
//                 Type: "M",
//                 qty: 8
//             },
//             {
//                 Type: "L",
//                 qty: 12
//             },
//             {
//                 Type: "XL",
//                 qty: 5
//             }
//         ]
//     }, {
//         nama: "Shoes",
//         stock: [
//             {
//                 Type: "M",
//                 qty: 8
//             },
//             {
//                 Type: "L",
//                 qty: 12
//             },
//             {
//                 Type: "XL",
//                 qty: 5
//             }
//         ]
//     }

// ]
// console.table(dataProduct)

// let searchData = dataProduct.filter((value, index) => {
//     return value.name == "jacket"
// })
// let dataIdx = dataProduct.findIndex((value, index) => {
//     return value.name == "jacket"
// })
// console.table(searchData)
// console.table(dataIdx);
// dataProduct[dataIdx].name = "Jaket";

// concatination/conCat ==> penggabungan Data atau menduplikasi data

let mobil = ["Tesla", "Ferrari", "Lamborghini"];
let motor = ["Honda", "Yamaha", "Kawasaki"];
// let kendaraan = mobil.concat(motor,["KTM","Wuling"]);
let kendaraan = [...mobil, ...motor, "KTM"];//split operator (nilai langsung di outputkan di tempat baru butuh [...] diperuntungkan untuk membuat data temporary

let sepedaMotor = [...motor];// biar yang motor tidak berubah pakai split
sepedaMotor[0] = "Suzuki"
// console.log(motor)
// console.log(sepedaMotor)
let dbA = {
    name: "Reno",
    usia: 12,
    alamat: "BSD"}
let dbB = {
    pekerjaan : "Coder",
    gaji: 7500000
}

let dataDB = {...dbA,...dbB, status:"Aktif"};// bisa digunakan untuk update data juga
console.log(dataDB);