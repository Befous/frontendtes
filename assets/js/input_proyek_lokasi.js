import { putBiasa } from "./tools/api.js";
import { getValue } from "./tools/element.js";

export default function InputProyekLokasi(){
    let proyek_id = getValue("proyek_id");
    let lokasi_id = getValue("lokasi_id");
    let APIInputProyek = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/proyek/";
    const APIInputProyekLokasi = APIInputProyek+proyek_id+"/lokasi/"+lokasi_id;

    let datainjson = {
    }
    
    putBiasa(APIInputProyekLokasi,datainjson,responseData);
    alert("data masuk")
}

function responseData(result) {
    console.log(result)
}