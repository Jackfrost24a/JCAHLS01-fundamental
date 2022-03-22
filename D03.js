//Day 03 : Array Data Type
/**
 * 1. Definisi : sebuah tipe data penampung. Dikarenakan dapat menampung banyak data dan berbagai data yang lain.
 *              setiap data pada array memiliki alamat index. Index pada array memiliki tipe data angka/number
 * 2. Tujuan   : mempermudah pengelolaan data. 
 * 3. Array bertipe object. Tipe data object (yang dapat mengelompokan tipe data lain), Index beserta number, object barang.
 * 4. Array itu ditandai dengan []
 * 
 */

//Syntax Array
let namaApel = "Apel"; // ❌
let namaJeruk = "Jeruk";//❌

let namaBuah = ["Apel", "Jeruk", "Durian", "Melon"]; // cara 1 ✅
let stock = Array(10, 15, 25, 12);// cara 2 ✅
let harga = []; // cara 3 ✅
harga[0] = 5000;
harga[1] = 2500;
harga[2] = 10000;
harga[3] = 7000;
namaBuah[2] // pasti dimulai dari 0 alamat index
// akses data pada array ==> namaVariable index
console.log("Nama Buah:",namaBuah[1]);
console.log("Stock Buah:",stock[1]);
console.log("Harga Buah:",harga[1]);
console.log(`Buah ${namaBuah[0]} Stoknya ada ${stock[0]} dan harga nya Rp. ${harga[0]};`)
// string to array:
// let toko = "toko buah manis"
// console.log(toko.split(' '))
// let polin = "Malam";
// let arrpolin = polin.split('') //string menjadi array
// console.log(arrpolin);
// // console.log(arrpolin.reverse());//membalik urutan array
// polin = arrpolin.reverse().join('');
// console.log(polin)
let listBuah=''
for (let i = 0; i < namaBuah.length; i++) {
    listBuah += `${i+1} Buah ${namaBuah[i]} Stoknya ada ${stock[i]} dan harga nya Rp. ${harga[i]};\n`//"\n untuk enter"
}
console.log(listBuah)

// merubah value dari salah satu data pada array
// // Reassign
// namaBuah[0] = "Semangka"
// console.table(namaBuah);

///////////////////////////// ARRAY FUNCTION //////////////////////////
// 1. namaVariableArray.length : untuk mengetahui jumlah data yang ada di dalam array
//  OUTPUT dari length adalah NUMBER INT
console.log("banyak data array :", namaBuah.length);
console.log("Value terkahir :", namaBuah[namaBuah.length - 1]);

// namaVariableArray.push(data) Adds new elements to the end of an array, and returns the new length
namaBuah.push("Alpukat")
stock.push(20)
harga.push(6500)
console.table(namaBuah)

// namaVariableArray.pop() : menghapus data terakhir dari array
namaBuah.pop();
stock.pop();
harga.pop();

// namaVariableArray.unshift(data) : adds new elements to the beginning of an array
namaBuah.unshift("Nangka");
stock.unshift(10);
harga.unshift(2500);

// namaVariableArray.shift() : Removes the first element of an array
namaBuah.shift();
stock.shift();
harga.shift();

// lebih sering menggunakan length dan push
// namaVariableArray.reverse() : Reverses the order of the elements in an array

// namaVariableArray.join("seperator") : menggabungkan semua data array menjadi data string
let motor = ["yamaha", "honda", "triumph", "ducati"]
motor.reverse()
console.log(motor.join()); // Ducati,triumph, honda, yamaha
console.log(motor.join(" ")); // Ducati triumph  honda yamaha
console.log(motor.join(" / ")); // Ducati/triumph/honda/yamaha

//namaVariable.splice(indexAwal, jumlahDataYangDihapus, dataBaru) : menghapus data Array pada index tertentu
// Fungsi 1. : menghapus data array pada index tertentu
let mobil = ["Daihatsu", "Toyota", "Lexus","BMW"]
console.log("Sebelum dihapus", mobil)
mobil.splice(2, 1);//lexus dan jumlah nya 1
console.log("SESUDAH DIHAPUS :",mobil)

// fungsi ke 2 Splice : menyisipkan data baru
console.log("SEBELUM DISISIPKAN :", mobil);
mobil.splice(2, 0, "Lexus", "Mazda", "Wuling");
console.log("Sesudah DISISIPKAN :", mobil);

// fungsi 3 splice : Mengganti data
console.log("SEBELUM Diganti :", mobil);
mobil.splice(1, 1, "Ferrari")
console.log("Sesudah Diganti :", mobil);

// namaVariableArray.Slice(StartINdex, endIndex);
console.log(mobil.slice(1, 5));

// namaVariableArray.includes("data") : memastikan data tersebut ada atau tidak
console.log(mobil.includes("Lexus")); //true
console.log(mobil.includes("Izuzu")); //false

// namaVariableArray.indexof("data") : mencari alamat index
console.log(mobil.indexOf("BMW")); // 5
console.log(mobil.indexOf("Isuzu")); // -1

let nama = ["Budi", "Edo", "Budi"]
console.log(nama.indexOf("Budi"))