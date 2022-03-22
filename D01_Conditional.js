///////////////////////// CONDITIONAL STATEMENT///////////////////
/**
 * Aturan :
 * 1. Dia membutuhkan nilai Boolean
 *  
 * Jenis :
 * 1. IF STATEMENT (for one condition)
 * 2. IF...ELSE STATEMENT (for 2 conditions)
 * 3. IF...ELSE IF....ELSE STATEMENT (for 3 conditions or more)
 * 4. SWITCH...CASE STATEMENT : untuk memastikan sebuah nilai dengan case yang ditentukan  
 */

// 1. IF STATEMENT
let nama = "leonardo";
let usia = 20;
let email = "leo@mail.com";
/***
 * Aturan Penulisan :
 * if(condition){
 *   //task
 * } else if (condition) {
 *  // task
 * }else{
 *  // task
 * }
 * note :
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON / LOGICAL OPERATOR/ TRUTHLY / FALSY)
 * - task : apa yang ingin dijalankan ketika condition dipenuhi
*/

// // Example Case : memverifikasi usia pendaftaran SIM yang harus minimal 17 tahun
// if (usia >= 17) {
//     console.log("Verifikasi Usia Berhasil ✅", nama) // cara 1
//     console.log(`Verifikasi Usia ${nama} Berhasil ✅, periksa ${email} anda ⚠`) // cara 2
// }

// // 2. IF....ELSE STATEMENT
if (usia >= 17) {
    console.log("Verifikasi Usia Berhasil ✅", nama) // cara 1
} else {
    console.log(`Verifikasi Usia ${nama} gagal ❌`) // cara 2
}

// 3. IF....ELSE IF..... ELSE
// let nilai = 50;

// if (nilai >= 90) {
//     console.log("Grade A", nilai)
// } else if (nilai >= 80 && nilai <= 89) {
//     console.log("Grade B", nilai)
// } else if (nilai >= 70 && nilai <80) {
//     console.log("Grade C", nilai)
// } else {
//     console.log("grade D", nilai)
// }


// 4. SWTICH...CASE
let profesi = "Coder";
switch (profesi) {
    case "Coder":
        console.log("Saya Suka bikin Aplikasi");
        break;
    case "Dokter":
        console.log("saya suka menolong orang")
        break;
    case "Polisi":
        console.log ("saya suka menilang orang")
    default:
        console.log ("ga tau mau ngapain")
        break;
}

//  Ternary Operator : condition ? task : task 
let validasi_usia = usia > 17 ? "usia cukup" : "usia tidak mencukupi"
console.log(validasi_usia)