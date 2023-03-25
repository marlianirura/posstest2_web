const tombol = document.getElementById("daftar");
tombol.onclick = daftar;

function daftar(e) {
   e.preventDefault();
   

const nama = document.getElementById("daf_nama").value;
const email = document.getElementById("daf_email").value;

let jenis_kelamin = "";
const jk = document.getElementsByName("Jenis Kelamin");
for (let i = 0; i < jk.length; i++) {
  if (jk[i].checked) {
    jenis_kelamin = jk[i].value;
  }
}

const jenjang = document.getElementsByName("jenjang")[0].value;
const disukai = [];
const pelajaran = document.getElementsByName("disukai");
for (let i = 0; i < pelajaran.length; i++) {
  if (pelajaran[i].checked) {
    disukai.push(pelajaran[i].value);
  }
}

const alasan = document.getElementById("alasan").value;

localStorage.setItem("nama", nama);
localStorage.setItem("email", email);
localStorage.setItem("jenis_kelamin", jenis_kelamin);
localStorage.setItem("jenjang", jenjang);
localStorage.setItem("disukai", JSON.stringify(disukai));
localStorage.setItem("alasan", alasan);

   alert("Berhasil Daftar");
   window.location.href = "menampilkan.html";
}

