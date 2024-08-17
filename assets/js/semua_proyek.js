import { getBiasa } from "./tools/api.js";

export default function SemuaProyek(){
    let APIAmbilProyek = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/proyek";
    getBiasa(APIAmbilProyek,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('data-proyek');
    const posts = result;
    
    posts.forEach(data => {
        // Create a new div for each post
        const postDiv = document.createElement('tr');
        postDiv.classList.add('post');

        // Check if lokasiProyek is not empty
        const namaLokasi = data.lokasiProyek.length > 0 ? data.lokasiProyek[0].nama_lokasi : 'Lokasi tidak tersedia';

        // Set the HTML content for the post
        postDiv.innerHTML = `
            <td>${data.id}</td>
            <td>${data.nama_proyek}</td>
            <td>${data.client}</td>
            <td>${data.tgl_mulai}</td>
            <td>${data.tgl_selesai}</td>
            <td>${data.pimpinan_proyek}</td>
            <td>${data.keterangan}</td>
            <td>${namaLokasi}</td>
            <td><a class="btn btn-primary btn-user btn-block" href="halaman/edit?proyek_id=${data.id}&nama_proyek=${data.nama_proyek}&client=${data.client}&tgl_mulai=${data.tgl_mulai}&tgl_selesai=${data.tgl_selesai}&pimpinan_proyek=${data.pimpinan_proyek}&keterangan=${data.keterangan}#formproyek">Edit</a></td>
            <td><a class="btn btn-danger btn-user btn-block" href="halaman/hapus?proyek_id=${data.id}#formproyek">Hapus</a></td>
        `;
        // Append the post div to the post container
        postContainer.appendChild(postDiv);
    });
}