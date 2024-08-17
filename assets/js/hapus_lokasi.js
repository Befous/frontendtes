import { deleteBiasa } from "./tools/api.js";
import { getValue } from "./tools/element.js";

export default function HapusLokasi(){
    let id = getValue("lokasi_id");
    let APILokasi = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/lokasi/";
    const APIHapuslokasi = APILokasi+id;

    let datainjson = {
    }
    
    deleteBiasa(APIHapuslokasi,datainjson,responseData);
    alert("data terhapus")
}

function responseData(result) {
    console.log(result)
}