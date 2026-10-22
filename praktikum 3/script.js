// ==========================================
// Bagian A: Tabel Perkalian
// ==========================================
function buatTabelPerkalian(n) {
    let isi = "<tr><th>Operasi</th><th>Hasil</th></tr>";
    
    // Perulangan for untuk perkalian 1 s.d. 10
    for (let i = 1; i <= 10; i++) {
        const hasil = n * i;
        // Modifikasi Analisis 2: Baris dengan hasil genap diberi class 'genap' (latar abu-abu)
        const kelasGenap = hasil % 2 === 0 ? ' class="genap"' : '';
        isi += `<tr${kelasGenap}><td>${n} × ${i}</td><td>${hasil}</td></tr>`;
    }
    
    document.getElementById("tabelKali").innerHTML = isi;
}

// Event listener tombol "Tampilkan"
document.getElementById("buat").addEventListener("click", function () {
    buatTabelPerkalian(Number(document.getElementById("angka").value));
});

// Tampilan awal tabel perkalian (default angka 7)
buatTabelPerkalian(7);


// ==========================================
// Bagian B: Array of Object dengan for...of
// ==========================================
// Langkah 4: Menambahkan 2 mata kuliah baru (IF205 dan IF206)
const mataKuliah = [
    { kode: "IF201", nama: "Pemrograman Web", sks: 3 },
    { kode: "IF202", nama: "Basis Data", sks: 3 },
    { kode: "IF203", nama: "Sistem Operasi", sks: 3 },
    { kode: "IF204", nama: "Statistika", sks: 2 },
    // 2 Mata kuliah tambahan
    { kode: "IF205", nama: "Pemrograman Berorientasi Objek", sks: 3 },
    { kode: "IF206", nama: "Bahasa Inggris Terapan", sks: 3 }
];

let baris = "<tr><th>No</th><th>Kode</th><th>Mata Kuliah</th><th>SKS</th></tr>";
let total = 0;
let no = 1;

for (const mk of mataKuliah) {
    baris += `<tr><td>${no}</td><td>${mk.kode}</td><td>${mk.nama}</td><td>${mk.sks}</td></tr>`;
    total += mk.sks;
    no++;
}

document.getElementById("tabelMK").innerHTML = baris;
document.getElementById("totalSks").textContent = `Total SKS: ${total}`;
