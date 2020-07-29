//SOAL 1
console.log("------Soal Satu------")
{
    const circle = (radius) => {
        let luas = 3.14*radius*radius
        let keliling = 2*3.14*radius
        return console.log(`Hasil Luas = ${luas} \nHasil Keliling = ${keliling}`)
    } 
    circle(12)
}
//SOAL 2
console.log("------Soal dua------")
{
    let kalimatPertama = "saya"
    let kalimatKedua = "adalah"
    let kalimatKetiga = "seorang"
    let kalimatKeempat = "frontend"
    let kalimatKelima = "developer"
    const kalimat = (paramSatu,paramDua,paramTiga,paramEmpat,paramLima) => {
        return console.log(`${paramSatu} ${paramDua} ${paramTiga} ${paramEmpat} ${paramLima}`)
    }
    kalimat(kalimatPertama,kalimatKedua,kalimatKetiga,kalimatKeempat,kalimatKelima)
}

//SOAL 3
console.log("------Soal tiga------")
{
    class Book{
        constructor(name,totalPage,price) {
            this.name = name
            this.totalPage = totalPage
            this.price = price
        }
    }
    class Komik extends Book{
        constructor(name,totalPage,price,isColorful) {
            super(name,totalPage,price)
            this.isColorful = isColorful
        }
    }
    bukuSatu = new Book("Happy Potter",3000,320000)
    komikSatu = new Komik("Fruit Basket",200,80000,false)
    console.log(bukuSatu)
    console.log(komikSatu)
}