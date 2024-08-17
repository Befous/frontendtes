import { putBiasa } from "./tools/api.js";
import { getValue } from "./tools/element.js";

export default function EditLokasi(){
    let id = getValue("lokasi_id");
    let nama_lokasi = getValue("nama_lokasi");
    let negara = getValue("negara");
    let provinsi = getValue("provinsi");
    let kota = getValue("kota");
    let APILokasi = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/lokasi/";
    const APIEditProyek = APILokasi+id+"?nama_lokasi="+nama_lokasi+"&negara="+negara+"&provinsi="+provinsi+"&kota="+kota;

    let datainjson = {
    }
    
    putBiasa(APIEditProyek,datainjson,responseData);
}

function responseData(result) {
    alert(result.message)
}