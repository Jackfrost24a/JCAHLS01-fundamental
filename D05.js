//  Day 05 : obejct => data penampung seperti array, tetapi tidak harus berurutan. dan alamat menggunakan property

/**
 * Array => penampung data yang berdasatkan alamat index
 * Object => penampung data yang berdasarkan alamat nama property/string
 * 
 * let variableArray = [data1, data2, data3];
 * let variableObject = {
 *          namaProperty:data,
 *          namaProduct: "Sepatu Air Jordan",
 *          Price:250000,
 *          isReady:true,
 *          size:[42,43,45],
 *          total(parameter)=>{block code}
 * }
 * 
 * */

// menulis data object
// cara 1 :syntax object literal
let instructor = {
    name: "Abdi Alghi",
    class: "JCWDAHLS-01",
    age: 27,
    materi: [
        "Fundamental", "Front-End", "Back-end"
    ]
};

console.log(instructor.materi) //ciri ciri object ditandai dengan titik
console.log(instructor["materi"]); // cara ke dua jika property nya dinamis. 
console.log(instructor.name, instructor.class); //manggil lebih dari satu  

// cara 2 : syntax object "new" keyword
let student = new Object();

student.name = "Andrew";
student.age = 23;
student.classes = "Full stack";
student.age = 23; // re-assign

// object Destructuring || memanggil nya langsung ke property nya
let { name, age, classes  } = student;
console.log(age);

// object Array || memanggil nya langsung ke property nya
let data = ["Edo","Jr", 27];
let [namaDepan, namaBelakang, usia] = data;
console.log(namaDepan);
console.log(namaBelakang);
console.log(usia);


// Array of OBJECT
let product =[
    {
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        name: "sepatu",
        stock: 10,
        price: 8000
    }
];
console.log(product[0].name) //cara manggil nya

// Looping pada Object
for(let property in instructor){
    console.log(property);
    console.log(instructor[(property)]);
}
