// mengambil data dari Local Storage
const nama = localStorage.getItem("nama");
const email = localStorage.getItem("email");
const jenis_kelamin = localStorage.getItem("jenis_kelamin");
const jenjang = localStorage.getItem("jenjang");
const disukai = JSON.parse(localStorage.getItem("disukai"));
const alasan = localStorage.getItem("alasan");

// menampilkan data ke halaman HTML
document.getElementById("nama").innerHTML = nama;
document.getElementById("email").innerHTML = email;
document.getElementById("jenis_kelamin").innerHTML = jenis_kelamin;
document.getElementById("jenjang").innerHTML = jenjang;
document.getElementById("disukai").innerHTML = disukai.join(", ");
document.getElementById("alasan").innerHTML = alasan;