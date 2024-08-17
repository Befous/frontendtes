import { deleteBiasa } from "./tools/api.js";
import { getValue } from "./tools/element.js";

export default function HapusProyek(){
    let id = getValue("proyek_id");
    let APIProyek = "https://tesmagangapi-iesmjressa-uc.a.run.app/api/proyek/";
    const APIHapusProyek = APIProyek+id;

    let datainjson = {
    }
    
    deleteBiasa(APIHapusProyek,datainjson,responseData);
    alert("data terhapus")
}

function responseData(result) {
    console.log(result)
}