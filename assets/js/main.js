import InputProyek from "./input_proyek.js";
import InputLokasi from "./input_lokasi.js";
import InputProyekLokasi from "./input_proyek_lokasi.js";
import SemuaProyek from "./semua_proyek.js";
import SemuaLokasi from "./semua_lokasi.js";
import EditProyek from "./edit_proyek.js";
import EditLokasi from "./edit_lokasi.js";
import HapusProyek from "./hapus_proyek.js";
import HapusLokasi from "./hapus_lokasi.js";

window.InputProyek = InputProyek;
window.InputLokasi = InputLokasi;
window.InputProyekLokasi = InputProyekLokasi;
window.EditProyek = EditProyek;
window.EditLokasi = EditLokasi;
window.HapusProyek = HapusProyek;
window.HapusLokasi = HapusLokasi;

const halamanutamaElement = document.getElementById('data-proyek');

if (halamanutamaElement) {
    SemuaProyek();
    SemuaLokasi();
} else {
    console.log("Element with ID 'semua-berita' not found. halamanutamaElement not executed.");
}

const halamaEditElement = document.getElementById('halaman-edit');
if (halamaEditElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const proyek_id = searchParams.get("proyek_id");
    const nama_proyek = searchParams.get("nama_proyek");
    const client = searchParams.get("client");
    const tgl_mulai = searchParams.get("tgl_mulai");
    const tgl_selesai = searchParams.get("tgl_selesai");
    const pimpinan_proyek = searchParams.get("pimpinan_proyek");
    const keterangan = searchParams.get("keterangan");

    const lokasi_id = searchParams.get("lokasi_id");
    const nama_lokasi = searchParams.get("nama_lokasi");
    const negara = searchParams.get("negara");
    const provinsi = searchParams.get("provinsi");
    const kota = searchParams.get("kota");

    // change value form
    document.getElementById("proyek_id").value = proyek_id;
    document.getElementById("nama_proyek").value = nama_proyek;
    document.getElementById("client").value = client;
    document.getElementById("tgl_mulai").value = tgl_mulai;
    document.getElementById("tgl_selesai").value = tgl_selesai;
    document.getElementById("pimpinan_proyek").value = pimpinan_proyek;
    document.getElementById("keterangan").value = keterangan;

    document.getElementById("lokasi_id").value = lokasi_id;
    document.getElementById("nama_lokasi").value = nama_lokasi;
    document.getElementById("negara").value = negara;
    document.getElementById("provinsi").value = provinsi;
    document.getElementById("kota").value = kota;
} else {
    console.log("Element with ID 'halaman-edit' not found.");
}

const halamaHapusElement = document.getElementById('halaman-hapus');
if (halamaHapusElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const proyek_id = searchParams.get("proyek_id");
    const lokasi_id = searchParams.get("lokasi_id");
    // change value form
    document.getElementById("proyek_id").value = proyek_id;
    document.getElementById("lokasi_id").value = lokasi_id;
} else {
    console.log("Element with ID 'halaman-hapus' not found.");
}