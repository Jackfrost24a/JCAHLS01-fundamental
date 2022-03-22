// let sharp = ''
// let rows = 5
// for (let i = 1; i <= rows ; i++) {
//     for (let j = 1; j <= rows; j++) {
//         sharp += ` # `
//     }sharp += `\n`
// }
// console.log(sharp)

// let sharp = ''
// let rows = 5
// for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= rows; j++) {
//         if (i == j) {
//             sharp += `${i}`
//         } else {
//             sharp += `0`
//         }
//     }
//     if (i < 5) {
//         sharp += `\n`
//     }


// }

// console.log(sharp)

var stars = ``
rows = 5
for (let i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
        stars += `*`
    }stars += `\n`
} 

console.log(stars)


// let db = [
//     {
//         idproduct: 1,
//         name: "Hoodie",
//         stock: 12,
//         price: 75000
//     },
//     {
//         idproduct: 2,
//         name: "Sepatu",
//         stock: 10,
//         price: 80000
//     }
// ];

// let beli = [
//     {
//         iduser: 1,
//         user: "budi",
//         keranjang: [
//             {
//                 idproduct: 2,
//                 qty: 2,
//                 subtotal: 160000
//             },
//             {
//                 idproduct: 1,
//                 qty: 2,
//                 subtotal: 150000
//             },
//         ]
//     },
//     {
//         iduser: 2,
//         user: "Edo",
//         keranjang: [
//             {
//                 idproduct: 1,
//                 qty: 1,
//                 subtotal: 75000
//             },
//         ]
//     },
//     {
//         iduser: 3,
//         user: "Edi",
//         keranjang: [
//             {
//                 idproduct: 2,
//                 qty: 5,
//                 subtotal: 400000
//             },
//         ]
//     }
// ]