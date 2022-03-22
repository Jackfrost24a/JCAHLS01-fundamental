// variable : penampung data pada program
/**
 * 
 * susunan variable ==> keywordVariable namaVariable = nilaiVariable;
 *keywordVariable : Var, let, const
 * namaVariable : harus diawali dengan huruf atau symbol "_" atau syombol "$"
 * 
 * valueVariable : berdasarkan tipe data ==> string, number, array, object
*/


// keyword var : Redeclare, Reassign
// var name = "Randy"; //deklarasi variable : tahap pertama ketika membuat variable
// var name = "Edo"; // Redeclare (deklarasi ulang)
// name = "Budi"; // Reassign

// console.log(name); //untuk menampilkan nilai pada terminal

// keyword let : Non-Redeclare, Reassign (untuk mencegah penamaan ganda sama variable)
// let age = 26;
// let age = 20; Non-Redeclare ❌
// age = 30;
// console.log(age);

// keyword const : Non-Redeclare, Non-Reassign (constant:tetap)
// const PI = 3.14;
// const PI = 14; this won't work
// PI = 22/7; This wont work too

// console.log(PI)

////////////////////////////////////////// ATURAN PENULISAN VARIABLE ////////////////////
// 1. Harus diawali huruf
// let 1nama ; ❌
// let pekerjaan; ✅
// var alamat = "surabaya"; // ✅

// 2. Boleh diawali dengan symbol ("_" atau "$")
// let_telp = "0123456"
// let $fax = "0123456"

// 3. Variable yang terdiri dari 2 suku kata atau lebih
// let fullName = "Randy Steven"//camelCase
// let harga_barang = "20000"; //snake_case
// let namaproduk = "Air Jordan" // ✅
// let stok barang // ❌
// let stok-barang // ✅

// keyboard shortcut yang biasa digunakan////

// shift + alt + f : merapihkan program
// ctrl + / : membuat comment
// ALT + up or down
// Shift + ALT + up or down

//////////////////////////////  DATA TYPE //////////////////////////////
// 1. String : untuk huruf atau character
let namaToko = "Gladius 'A'\"Toko\"\n Olahraga"; // double quote
let nama_toko = 'Gladius \'B\'Toko Olahraga'; // single quote
let namatoko = `Gladius 'C' Toko Olahraga`; // backtick

let alamatToko = "Jl. Sudirman No 23";

// let alamatLengkap = namaToko + alamatToko // cara 1
let alamatLengkap = `Pak Eko, ${namaToko}, ${alamatToko}`; //cara 2

console.log(alamatLengkap)

/////////// FUNGSI PADA TIPE DATA STRING //////////////////
let greeting = "Hello, Purwadhika Student";

// typeof : memeriksa tipe data
console.log("⚠output dari typeof =====>", typeof greeting);// nilai dari variable
console.log("⚠output dari typeof =====>", typeof "hello");// nilai langsung


// String.length = menghitung data string
console.log("⚠output dari typeof =====>", greeting.length);

// string.toLowerCase() : merubah semua huruf menjadi huruf kecil
console.log("⚠output dari string.toLowerCase =====>", greeting.toLowerCase);

// string.toUpperCase() : merubah semua huruf menjadi huruf Besar
console.log("⚠output dari string.toUpperCase =====>", greeting.toUpperCase);

// string.Includes() : memastikan sebuah kata ada pada variable
console.log("⚠output dari string.includes('kata_cari') =====>", greeting.includes("Purwadhika"));


// 2. Number : berkaitan dengan angka

let jarak = 1500; // Nilai Integer atau nilai bulat
let berat = 90.25 // Nilai FLOAT atau Decimal
let saldoATM = 25e6; // 25000000

// Arithmetic operator : +, -, *, /, %
let hasil = jarak + 500;

// console.log(1 + 2 +"2"+ 4) = hasil jadi 324 1+2 "type of number" and then number again"


// Increment
// jarak++ // 1501
// jarak++ // 1502
// jarak++ // 1503
// jarak++ // 1504

// jarak +=5 // jarak = jarak + 5 // 1509
// jarak +=5 // jarak = jarak + 5 // 1514 // kelipatan


// Decrement
// jarak --;
// jarak --;
// jarak --;
// jarak --;

// jarak-=5
// jarak-=5

// console.log("jarak ==>", jarak)

///////////////////// Math Object /////////////////
// const PI_CIRCLE = Math.PI;
// console.log(PI_CIRCLE)

console.log(Math.abs(-25.5)); // nilai absolute positif
console.log(Math.abs(-25.5) * -1); // nilai absolute Negatif
console.log(-Math.abs(-25.5)); // nilai absolute Negatif

console.log(Math.pow(4, 2)); //pangkat
console.log(Math.sqrt(4));//pangkat 2
console.log(Math.cbrt(8));//pangkat 3

// Pembulatan
console.log(Math.round(2.5)); // pembulatan ke nilai terdekat
console.log(Math.ceil(2.1)); // pembulatan selalu keatas
console.log(Math.floor(2.9)); // pembulatan selalu kebawah

console.log(Math.min(3, 2, 67, 3, 1));//mencari nilai paling kecil
console.log(Math.max(3, 2, 67, 9, 1));// mencari nilai terbesar

console.log(Math.random()); // membuat nilai random dari 0.xx s/d 1

//parsing data string to number
let angka = "123.456";

console.log(typeof angka);
console.log(parseInt(angka)); //123
console.log(parseFloat(angka)); //123.456

//parsing data number to string
let angkaB = 150000;

console.log(angkaB.toString)// "150000"
console.log(angkaB.toLocaleString);// "150.000"

// memeriksa data apakah sebuah angka atau tidak
console.log(isNaN(2))//false
console.log(isNaN("a"))//true
console.log(isNaN("12"))//false (string masih angka)
//isNaN= is Not a Number

// 3.Boolean : Nilai benar ==> True atau salah ==> False
let benar = true;
let salah = false;
// untuk menentukan kondisi

// Comparison Operator : >, <, >=, <=, ==, ===, !=
let angka_A = 20;
let angka_B = 15;
console.log("Comparison :", angka_A > angka_B); // true
console.log("Comparison :", angka_A > angka_B); // false
console.log("Comparison :", angka_A == angka_A); // true
console.log("Comparison :", angka_A == angka_B); // false
console.log("Comparison :", angka_A != angka_B); // true
console.log("Comparison :", angka_A == 20); // true
console.log("Comparison :", angka_A == "20"); // true ==> selama nilai nya sama tipe nya berbeda akan menghasilkan true
console.log("Comparison :", angka_A === "20"); // false ==> nilai dan tipe datanya harus sama akan menghasilkan true
// == harus sama hasil/ jumlah tipe data berbeda tidak bermasalah e.g string and numbers
//  === tipe dan nilai harus sama e.g numbers and numbers, string and string (more Recommended)

// logical Operator : AND, OR, NOT

//  AND : menghasilkan nilai TRUE apabila kedua perbandingan bernilai TRUE
console.log("logical AND :", true && true)// true
console.log("logical AND :", true && false)// false
console.log("logical AND :", false && false)// false
console.log("logical AND :", angka_A > 19 && angka_B < 19)// True
console.log("logical AND :", angka_A < 19 && angka_B < 19)// False
// semua harus TRUE output baru TRUE


// OR : selama ada yang bernilai TRUE maka hasilnya adalah TRUE
console.log("logical OR :", true || true)// true
console.log("logical OR :", true || false)// true
console.log("logical OR :", false || true)// true
console.log("logical OR :", false || false)// false
console.log("logical OR :", angka_A >= 15 || angka_B <= 15)// true
console.log("logical OR :", angka_A >= 15 || angka_B > 15)// true


// NOT : membalik logila
console.log("logical NOT :", !true)// true
console.log("logical NOT :", !false)// false
// biasanya diwaliki boolean atau variable

// tipe data Truthly dan Falsy
//  Trythly ✅ : tipe data yang bernilai true
console.log(Boolean(2)); // True
console.log(Boolean("ABCD")); // True
console.log(Boolean(-2)); // True
console.log(Boolean("false")); // True
console.log(Boolean(" ")); // True
// semua nilai dan string yang mempunyai nilai diatas atau di bawa kosong akan menjadi TRUE

// Falsy ❌ :nilai pada tipe data yang bernilai False
console.log(Boolean(False))// false
console.log(Boolean(0))// false
console.log(Boolean(""))// false
console.log(Boolean(undefined))// false
console.log(Boolean(null))// false
