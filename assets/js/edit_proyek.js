import { putBiasa } from "./tools/api.js";
import { getValue } from "./tools/element.js";

export default function EditProyek(){
    let id = getValue("proyek_id");
    let nama_proyek = getValue("nama_proyek");
    let client = getValue("client");
    let tgl_mulai = getValue("tgl_mulai");
    let tgl_selesai = getValue("tgl_selesai");
    let pimpinan_proyek = getValue("pimpinan_proyek");
    let keterangan = getValue("keterangan");
    let APIProyek = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/proyek/";
    const APIEditProyek = APIProyek+id+"?nama_proyek="+nama_proyek+"&client="+client+"&tgl_mulai="+tgl_mulai+"&tgl_selesai="+tgl_selesai+"&pimpinan_proyek="+pimpinan_proyek+"&keterangan="+keterangan;

    let datainjson = {
    }
    
    putBiasa(APIEditProyek,datainjson,responseData);
    alert("data masuk")
}

function responseData(result) {
    console.log(result)
}