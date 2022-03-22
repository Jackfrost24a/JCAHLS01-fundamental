// CLASS OBJECT AT JAVASCRIPT
// Template yang diperuntukan untuk membuat data object
/** 
 * class structure :
 * class className{
 *      constructor(arg1,arg2...){
 *          this.propertyName = arg1;
 *          this.propertyName = arg2
 *       }
 *        method=()=>{
 *             // code         
 *          }
 * }
 * 
 */

class Manusia {
    constructor(_name, _birth, _gender) {
        this.name = _name;
        this.birth = _birth;
        this.gender = _gender;
        console.log(Manusia)
    }
    getAge = () => {
        let birthyear = parseInt(this.birth.split("-")[2])
        let date = new Date();
        return date.getFullYear() - birthyear
    }
    Introduce = () => {
        return (`My Name is ${this.name}, I am born at ${this.birth},my age ${this.getAge()} years old, i am a ${this.gender}`)
    }
}

let dataPenduduk = [];

dataPenduduk.push(new Manusia("Renold", "12-11-1980", 20, "L"));
dataPenduduk.push(new Manusia("Reva", "12-10-2000", 18, "P"))

console.log(dataPenduduk)

dataPenduduk[1].Introduce()
let list = dataPenduduk.map((value, index) => {
    return `${index + 1}.` + value.Introduce()
})

console.log(list.join("\n"))

// Inheritance ==> pewarisan data dari class utama agar dapat digunakan oleh class turunannya
// class turunan karena extends terhadap kelas manusia
class pekerjaan extends Manusia {
    constructor(_name, _birth, _gender, _profesi, _salary) {
        super(_name, _birth, _gender);// menggunakan property dari class utama
        this.profession = _profesi;
        this.salary = _salary;
        this.age= this.getAge();
    }
}

let dbJob = [];

dbJob.push(new pekerjaan("Arnold", "13-10-1985", "male", "chef", 30000000))
console.log(dbJob);

let jobDesk={
    job:"prepare tools",
    getStatus:()=>{
        return `Done`
    }
}
console.log(jobDesk.getStatus())

