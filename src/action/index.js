/**
 * @function {getSecretWord}
 * @param {}
 * @returns {Promise}
 */
import axios from "axios";
export   function getSecretWord(){
return  axios.get("https://random-word-api.herokuapp.com/word").then((response)=>{
            return response.data
    })
}