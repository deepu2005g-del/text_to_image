import "./App.css";
import PromptForm from "./components/PromptForm";
import ImagePreview from "./components/ImagePreview";
import Loader from "./components/Loader";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">

      <div className="card">

        <h1>🎨 AI Text To Image</h1>

        <p>Generate beautiful AI images from text</p>

        <PromptForm
          setImage={setImage}
          setLoading={setLoading}
        />

        {loading && <Loader />}

        {image && <ImagePreview image={image} />}

      </div>

    </div>
  );
}

export default App;