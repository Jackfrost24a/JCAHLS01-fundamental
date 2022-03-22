////////////////////LOOP STATEMENT///////////////
// LOOP : perulangan

/**
 * A. While LOOP : digunakan ketika akhir loop tidak pasti
 * 
 * while (condition){
 *      // program yang ingin dijalankan
 * }
 * 
 */

//Example :
let nilai = 10;

while (nilai > 0) {
    // console.log("angka :", nilai);
    nilai--;
}
// tanpa loop
// console.log("angka :",10)
// console.log("angka :",9)
// console.log("angka :",8)

/**
 * B. DO.... While LOOP
 * 
 * do{
 *     //program yang ingin dijalankan
 * }while (condition);
 */
let count = 1;
do {
    // console.log(`bus No. ${count}`);
    count++;
} while (count <= 10);

/**
 * C. FOR LOOP : digunakan ketika tau batas looping
 * 
 * for(statement_1;Statement_2;statement_3){
 *         //Program yang ingin dijalankan
 * }
 * Statement_1 : variable yang mendefinisikan nilai awal dari batas looping
 * statement_2 : condition untuk memeriksa variable statement_1 dengan batas looping nya apakah bernilai TRUE
 * statement_3 : berisi perintah increment atau decrement terhadap statement_1
 * 
 * keuntungan : kita dapat membatasi langsung jumlah loop sejak awal
 */

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`kereta no.${i}Genap`)
//     } else {
//         console.log(`kereta no.${i}Ganjil`)
//     }


for (let i=1; i <= 30; i++)
{
    if (i % 15 == 0)
        console.log(`${i}===>BizBuzz`);
    else if (i % 3 == 0)
        console.log(`${i}===>Bizz`);
    else if (i % 5 == 0)
        console.log(`${i}===>Buzz`);
    
}