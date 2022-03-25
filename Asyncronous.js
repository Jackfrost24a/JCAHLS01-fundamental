// ASYNCRONUS
/**
 * Proses Eksekusi Program pada javascript
 * 1. Syncronus : mengeksekusi program secara berurutan per baris
 * 
 * 2.Asyncronus : 
 * 
 * 
 * 
 * 
 */

// syncronus

function funA() {
    console.log("funsi A")
}

function funB() {
    console.log("funsi B")

}

function funC() {
    console.log("funsi C")

}

funA()
funB()
funC()


// Asyncronus function Javascript : setTimeout, setInterval
function funD() {
    console.log("funsi D")
}

function funE() {
    setTimeout(() => { 
        console.log("funsi E") 
    }, 500)


}

function funF() {
    console.log("funsi F")

}

funD()
funE()
funF()