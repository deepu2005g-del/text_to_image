import axios from "axios";

const API = "https://text-to-image-eh8f.onrender.com";

export async function generateImage(prompt) {

    const response = await axios.post(

        API,

        { prompt },

        {
            responseType: "blob"
        }

    );

    return URL.createObjectURL(response.data);

}