//SOAL 1
{
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftarPeserta = {
	nama: "Asep",
	jenisKelamin: "laki-laki",
	hobi: "baca buku",
	tahunLahir: "1992"
}
	console.log(objectDaftarPeserta)
}

//SOAL 2
{
var buah = [{nama: "strawberry", warna: "merah", biji: "tidak", harga: 9000},{nama: "jeruk", warna: "oranye", biji: "ada", harga: 8000}, {nama: "Semangka", warna: "Hijau & Merah", biji: "ada", harga: 10000}, {nama: "Pisang", warna: "Kuning", biji: "tidak", harga: 5000}]

console.log(buah[0])
}

//SOAL 3
{
var dataFilm = []
	dataFilm["nama"]="Rambo First Blood"
	dataFilm["durasi"]="90 Menit"
	dataFilm["genre"]=["fight","action","adventure"]
	dataFilm["tahun"]=1982

console.log(dataFilm)
}

//SOAL 4
//RELEASE 0

    class Animal {
        constructor(name,legs,cold_blooded) {
            this.name = name
            this.legs = legs
            this.cold_blooded = cold_blooded
        }
    }
     
    var sheep = new Animal("shaun",4,false);
     
    console.log(sheep.name)
    console.log(sheep.legs)
    console.log(sheep.cold_blooded)

//RELEASE 1

    class Ape extends Animal{
        constructor(name) {
            super(name)
        }
        yell(){
            return console.log("Auooo")
        }
    }
    class Frog extends Animal{
        constructor(name) {
            super(name)
        }
        jump(){
            return console.log("hop hop")
        }
    }
 
    var sungokong = new Ape("kera sakti")
    sungokong.yell() 
    
    var kodok = new Frog("buduk")
    kodok.jump() 

//SOAL 5
{
    class Clock {
        constructor({ template }){
            this.template = template
        }
        render(){
          var date = new Date();
      
          var hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          var mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          var secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
        }
      
        stop() {
          clearInterval(this.timer);
        };
      
        start() {
            this.render();
          this.timer = setInterval(function(){this.render()} , 1000);
        };
      
      }
      
      var clock = new Clock({template: 'h:m:s'});
      clock.start(); 
}
