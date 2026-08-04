function ImagePreview({ image }) {
  return (
    <div className="image-container">

      <img
        src={image}
        alt="Generated"
      />

      <br />

      <a href={image} download="generated.png">
        <button className="download-btn">
          Download Image
        </button>
      </a>

    </div>
  );
}

export default ImagePreview;