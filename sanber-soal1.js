// Tugas pekanan 3 - Soal1.js
// Petunjuk pengerjaan 

/*Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
Hint : gunakan rumus sqrt(x)*/


//Jawaban dari Soal1.js
console.log("Program Untuk Mencari Akar Kuadrat Dari Bilangan Genap")

//Modul untuk membaca input dari user melalui terminal
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//user input bilangan genap untuk mencari akar kuadratnya
rl.question('Masukkan bilangan genap : ', (input) => {
  const bilangan = parseInt(input);
  const result = Math.sqrt(bilangan);

  if (bilangan < 0) {
    console.log("Tidak bisa input bilangan negatif");
  } 
  else if (bilangan % 2 !== 0) {
    console.log('Tidak bisa input bilangan ganjil');
  } 
  else {
    console.log(`Akar pangkat 2 dari ${bilangan} adalah : ${result}`);
  }

  rl.close();
});



