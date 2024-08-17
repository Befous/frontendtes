import { postBiasa } from "./tools/api.js";
import { getValue } from "./tools/element.js";

export default function InputProyek(){
    let nama_proyek = getValue("nama_proyek");
    let client = getValue("client");
    let tgl_mulai = getValue("tgl_mulai");
    let tgl_selesai = getValue("tgl_selesai");
    let pimpinan_proyek = getValue("pimpinan_proyek");
    let keterangan = getValue("keterangan");
    let APIInputProyek = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/proyek";

    let datainjson = {
        "nama_proyek": nama_proyek,
        "client": client,
        "tgl_mulai": tgl_mulai,
        "tgl_selesai": tgl_selesai,
        "pimpinan_proyek": pimpinan_proyek,
        "keterangan": keterangan
    }
    
    postBiasa(APIInputProyek,datainjson,responseData);
    alert("data masuk")
}

function responseData(result) {
    console.log(result)
}