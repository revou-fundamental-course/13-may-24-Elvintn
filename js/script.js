// Ini JS
// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
    if (alas > 0 && tinggi > 0) {
        return 0.5 * alas * tinggi;
    } else {
        return "Alas dan tinggi harus bernilai positif";
    }
}


// Fungsi untuk menangani submit form dan menghitung hasil
function hitung(event) {
    event.preventDefault();  // Mencegah form submit default

    let form = document.getElementById('formSegitiga');
    let alas = parseFloat(form.alas.value);
    let tinggi = parseFloat(form.tinggi.value);

    let luas = hitungLuasSegitiga(alas, tinggi);
   
    document.getElementById('hasilLuas').innerText = "Luas Segitiga: " + luas;

}

// Fungsi untuk menghitung keliling segitiga
function hitungKelilingSegitiga(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return a + b + c;
    } else {
        return "Semua sisi harus bernilai positif";
    }
}

// Fungsi untuk menangani submit form dan menghitung hasil
function hitungkeliling(event) {
    event.preventDefault();  // Mencegah form submit default

    let form = document.getElementById('formSegitigaKeliling');
    let sisiA = parseFloat(form.sisiA.value);
    let sisiB = parseFloat(form.sisiB.value);
    let sisiC = parseFloat(form.sisiC.value);

    let keliling = hitungKelilingSegitiga(sisiA, sisiB, sisiC);
    document.getElementById('hasilKeliling').innerText = "Keliling Segitiga: " + keliling;
}

// Fungsi untuk mereset form dan hasil
function resetForm() {
    document.getElementById('formSegitigaKeliling').reset();
    document.getElementById('formSegitiga').reset();
    document.getElementById('hasilLuas').innerText = "Luas Segitiga: "
    document.getElementById('hasilKeliling').innerText = "Keliling Segitiga: ";
}

let isKelilingVisible = false;
function hideOrShow () {
if (isKelilingVisible == false) {
    isKelilingVisible = true;
    document.getElementById('Luas-section').style.display = 'none';
    document.getElementById('keliling-section').style.display = 'block';
} else {
    isKelilingVisible = false;
    document.getElementById('Luas-section').style.display = 'block';
    document.getElementById('keliling-section').style.display = 'none';
}
}

