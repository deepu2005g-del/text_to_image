function ImagePreview({image}){

    return(

        <div
        style={{
            marginTop:"30px",
            textAlign:"center"
        }}
        >

            <img

            src={image}

            alt="Generated"

            style={{
                width:"100%",
                maxWidth:"500px",
                borderRadius:"15px"
            }}

            />

            <br/>

            <a

            href={image}

            download="image.png"

            >

                <button

                style={{
                    marginTop:"20px",
                    padding:"12px 25px",
                    border:"none",
                    background:"#16a34a",
                    color:"white",
                    borderRadius:"10px",
                    cursor:"pointer"
                }}

                >

                    Download Image

                </button>

            </a>

        </div>

    );

}

export default ImagePreview;