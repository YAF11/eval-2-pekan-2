//soal 1
let myArray = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'd']
let text = "";
for (const string of myArray) {
   text += string 
    document.writeln(string);
}

//soal 2
let data = {
    Senin: 55400,
    Selasa: 61600,
    Rabu: 49300,
    Kamis: 53200,
    Jumat: 54500,
    Sabtu: 51500,
    Minggu: 70000
}

for (const jumlah in data) {
 jumlah++
  console.log(data[jumlah]);  
}

//soal 3
let bank = [
    {
     jam: "11:59",
     masuk: "Karyawan 001" 
    },
    {
     jam: "12:01",
     masuk: "Karyawan 015"   
    },
    {
     jam: "12:10",
     masuk: "Tidak dikenal"   
    },
    {
     jam: "12:13",
     masuk: "Karyawan 004"   
    },
    {
     jam: "12:14",
     masuk: "Tidak dikenal"   
    }
]
let bank2 = [
    {
     jam: "12:10",
     masuk: "Tidak dikenal"   
    },
   
    {
     jam: "12:14",
     masuk: "Tidak dikenal"   
    }
]

console.table(bank2)

//soal 4
let question = true;
while (question) {
   let player = prompt("pilihlh! gunting/batu/kertas")
   let comp =  random("gunting", "batu", "kertas");

   while (player != comp){
        if (player != comp) {
            alert("")
        }
   }

console.log(comp);








}