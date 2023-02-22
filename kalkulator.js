const readline = require('readline');

// Fungsi untuk menampilkan daftar operasi yang tersedia
function showMenu() {
  console.log('Operasi yang tersedia:');
  console.log('+ = penjumlahan');
  console.log('- = pengurangan');
  console.log('* = perkalian');
  console.log('/ = pembagian');
  console.log('akar = akar kuadrat');
  console.log('lper = luas persegi');
  console.log('vkub = volume kubus');
  console.log('vtub = volume tabung');
}

// Fungsi untuk meminta masukan dari pengguna
function getInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question('Masukkan angka pertama: ', input1 => {
      rl.question('Masukkan angka kedua: ', input2 => {
        rl.question('Masukkan operasi: ', operasi => {
          rl.close();
          resolve({ input1, input2, operasi });
        });
      });
    });
  });
}

// Fungsi untuk melakukan kalkulasi
function calculate(input1, input2, operasi) {
  if (operasi === '+') {
    hasil = parseFloat(input1) + parseFloat(input2);
  } else if (operasi === '-') {
    hasil = parseFloat(input1) - parseFloat(input2);
  } else if (operasi === '*') {
    hasil = parseFloat(input1) * parseFloat(input2);
  } else if (operasi === '/') {
    hasil = parseFloat(input1) / parseFloat(input2);
  } else if (operasi === 'akar') {
    hasil = Math.sqrt(parseFloat(input1));
  } else if (operasi === 'lper') {
    hasil = parseFloat(input1) ** 2;
  } else if (operasi === 'vkub') {
    hasil = parseFloat(input1) ** 3;
  } else if (operasi === 'vtub') {
    hasil = Math.PI * parseFloat(input1) ** 2 * parseFloat(input2);
  } else {
    console.log('Operasi tidak valid');
    return null;
  }
  return hasil;
}

// Program utama
async function main() {
  while (true) {
    showMenu();
    const { input1, input2, operasi } = await getInput();
    const hasil = calculate(input1, input2, operasi);
    if (hasil !== null) {
      console.log('Hasil: ', hasil);
    }
    const lagi = await new Promise(resolve => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question('Lakukan perhitungan lagi? (y/n): ', jawaban => {
        rl.close();
        resolve(jawaban);
      });
    });
    if (lagi !== 'y') {
      break;
    }
  }
}

main();
