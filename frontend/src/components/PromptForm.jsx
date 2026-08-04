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

            <input

            type="text"

            placeholder="Enter your prompt..."

            value={prompt}

            onChange={(e)=>setPrompt(e.target.value)}

            style={{
                width:"100%",
                padding:"15px",
                marginBottom:"20px",
                borderRadius:"10px",
                border:"1px solid #ccc"
            }}

            />

            <button

            style={{
                width:"100%",
                padding:"15px",
                background:"#2563eb",
                color:"white",
                border:"none",
                borderRadius:"10px",
                cursor:"pointer"
            }}

            >

                Generate Image

            </button>

        </form>

    );

}

export default PromptForm;