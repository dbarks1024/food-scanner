import axios from 'axios';
import { CURRENT_ITEM } from "./types";

export const sendBarcode = (barcode) => {
  return (dispatch) => {
    const options = {
      "async": true,
      "crossDomain": true,
      "method": "GET",
      "headers": {
        "Cache-Control": "no-cache",
        "Postman-Token": "050a5c56-47b7-4893-ba99-28c254181dfa"
      }
    }

    axios.get(`https://ssl-api.openpetfoodfacts.org/api/v0/product/${barcode}.json`, options)
    .then(response => {
      console.log(response);
    // dispatch({
    //   type: CURRENT_ITEM,
    //   payload: response
    // })
    }); 
  }
}
