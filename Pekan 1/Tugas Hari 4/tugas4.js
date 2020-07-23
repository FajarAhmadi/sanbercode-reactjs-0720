console.log('SOAL 1');
{
    console.log("LOOPING PERTAMA")
    var angka = 1;
    while(angka <= 20){
        if(angka%2==0){
            console.log(angka + " "+ "- I Love Coding");
        }
        angka++
    }
    console.log("LOOPING KEDUA")
    var b = 20;
    while(b >= 1){
        if(b%2==0){
            console.log(b + " "+ "- I will become a frontend developer");
        }
        b--
    }
}

console.log('SOAL 2');
{
    for(c=1;c<=20;c++){
        if(c%2==0){
          console.log(c + "- Berkualitas")
        }
        else if(c%3==0 && c%2!==0){
          console.log(c + "- I Love Coding")
        }
        else if(c%2!=0){
          console.log(c + "- Santai")
        }
    }
}

console.log('SOAL 3');
{
    var baris = "";
    for (var d = 1; d <= 7; d++) {
      for (var e = 1; e <= d; e++) {
        baris += "#"
      }
      baris += "\n";
    }
    console.log(baris)
}

console.log('SOAL 4');
{
    var kalimat="saya sangat senang belajar javascript"
    console.log(kalimat.split(' '));
}

console.log('SOAL 5');
{
    var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
    for (var f = 0 ; f < daftarBuah.length ; f++){
        daftarBuah.sort()
        console.log(daftarBuah[f])
    }
}