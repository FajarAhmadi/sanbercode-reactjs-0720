//SOAL 1
{
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(kataPertama + " " + kataKedua.charAt(0).toUpperCase() + kataKedua.substring(1) + " " + kataKetiga+ " " + kataKeempat.toUpperCase())
}

//SOAL 2
{
    var kataPertama = "1";
    var kataKedua = "2";
    var kataKetiga = "4";
    var kataKeempat = "5";
    console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat))
}

//SOAL 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); // do your own! 
var kataKetiga = kalimat.substring(15,18); // do your own! 
var kataKeempat = kalimat.substring(19,24); // do your own! 
var kataKelima = kalimat.substring(25,31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//SOAL 4
{
var nilai = 75;
if(nilai >= 80){ 
	console.log("A");
} 
if(nilai >= 70 && nilai < 80){
	console.log("B")
}
if(nilai >= 60 && nilai < 70){
	console.log("C")
}
if(nilai >= 50 && nilai < 60){
	console.log("D")
}
if(nilai < 50){
	console.log("E")
}
}

//SOAL 5
var tanggal = 21;
var bulan = 11;
var tahun = 1997;
switch(bulan) {
	case 1: { console.log('JANUARI');break}
	case 2: { console.log('FEBRUARI');break}
	case 3: { console.log('MARET');break}
	case 4: { console.log('APRIL');break}
	case 5: { console.log('MEI');break}
	case 6: { console.log('JUNI');break}
	case 7: { console.log('JULI');break}
	case 8: { console.log('AGUSTUS');break}
	case 9: { console.log('SEPTEMBER');break}
	case 10: { console.log('OKTOBER');break}
	case 11: { console.log('NOVEMBER');break}
	case 12: { console.log('DESEMBER');break}
}