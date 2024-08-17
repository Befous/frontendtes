import { postBiasa } from "./tools/api.js";
import { getValue } from "./tools/element.js";

export default function InputLokasi(){
    let nama_lokasi = getValue("nama_lokasi");
    let negara = getValue("negara");
    let provinsi = getValue("provinsi");
    let kota = getValue("kota");
    let APIInputLokasi = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/lokasi";

    let datainjson = {
        "nama_lokasi": nama_lokasi,
        "negara": negara,
        "provinsi": provinsi,
        "kota": kota
    }
    
    postBiasa(APIInputLokasi,datainjson,responseData);
    alert("data masuk")
}

function responseData(result) {
    console.log(result)
}