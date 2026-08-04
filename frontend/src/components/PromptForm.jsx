import { useState } from "react";
import { generateImage } from "../services/api";

function PromptForm({setImage,setLoading}){

    const [prompt,setPrompt]=useState("");

    async function handleSubmit(e){

        e.preventDefault();

        if(prompt==="") return;

        try{

            setLoading(true);

            const image=await generateImage(prompt);

            setImage(image);

        }

        catch(error){

            alert("Failed to generate image");

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <form onSubmit={handleSubmit}>

            <textarea

                className="input-box"

                placeholder="Enter your prompt..."

                value={prompt}

                onChange={(e)=>setPrompt(e.target.value)}

            />

            <button
                className="generate-btn"
            >
                Generate Image
            </button>

        </form>

    );

}

export default PromptForm;