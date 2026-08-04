import axios from "axios";

const API = "http://localhost:5000/generate";

export async function generateImage(prompt){

    const response = await axios.post(

        API,

        { prompt },

        {
            responseType:"blob"
        }

    );

    return URL.createObjectURL(response.data);

}