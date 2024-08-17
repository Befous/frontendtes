import { getBiasa } from "./tools/api.js";

export default function SemuaLokasi(){
    let APIAmbilLokasi = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/lokasi";
    getBiasa(APIAmbilLokasi,responseData);
}

function responseData(result) {
    const postContainer = document.getElementById('data-lokasi');
    const posts = result;
    
    posts.forEach(data => {
        // Create a new div for each post
        const postDiv = document.createElement('tr');
        postDiv.classList.add('post');

        // Set the HTML content for the post
        postDiv.innerHTML = `
            <td>${data.id}</td>
            <td>${data.nama_lokasi}</td>
            <td>${data.negara}</td>
            <td>${data.provinsi}</td>
            <td>${data.kota}</td>
            <td><a class="btn btn-primary btn-user btn-block" href="halaman/edit?lokasi_id=${data.id}&nama_lokasi=${data.nama_lokasi}&negara=${data.negara}&provinsi=${data.provinsi}&kota=${data.kota}">Edit</a></td>
            <td><a class="btn btn-danger btn-user btn-block" href="halaman/hapus?lokasi_id=${data.id}">Hapus</a></td>
        `;
        // Append the post div to the post container
        postContainer.appendChild(postDiv);
    });
}