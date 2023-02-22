const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Meminta masukan dari pengguna
rl.question("Masukkan angka pertama: ", (input1) => {
    rl.question("Masukkan angka kedua: ", (input2) => {
        rl.question("Masukkan operasi (+,-,*,/,akar,lper,vkub,vtub): ", (operasi) => {
            // Konversi input string menjadi angka jika diperlukan
            input1 = parseFloat(input1);
            input2 = parseFloat(input2);

            // Melakukan kalkulasi
            let hasil;
            if (operasi === '+') {
                hasil = input1 + input2;
            } else if (operasi === '-') {
                hasil = input1 - input2;
            } else if (operasi === '*') {
                hasil = input1 * input2;
            } else if (operasi === '/') {
                hasil = input1 / input2;
            } else if (operasi === 'akar') {
                hasil = Math.sqrt(input1);
            } else if (operasi === 'lper') {
                hasil = input1 ** 2;
            } else if (operasi === 'vkub') {
                hasil = input1 ** 3;
            } else if (operasi === 'vtub') {
                hasil = Math.PI * input1 ** 2 * input2;
            } else {
                console.log("Operasi tidak valid");
                rl.close();
                return;
            }

            // Menampilkan hasil
            console.log("Hasil:", hasil);
            rl.close();
        });
    });
});
