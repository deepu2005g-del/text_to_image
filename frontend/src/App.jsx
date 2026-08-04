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

      <div className="layout">

        <div className="left-panel">

            <h1 className="title">
                Text To Image Generator
            </h1>

            <p className="subtitle">
                Generate beautiful images from text
            </p>

            <PromptForm
                setImage={setImage}
                setLoading={setLoading}
            />

            {loading && <Loader />}

        </div>

        <div className="right-panel">

            {image ? (
                <ImagePreview image={image} />
            ) : (
                <div className="placeholder">
                    Generated image will appear here
                </div>
            )}

        </div>

      </div>

    </div>
  );
}

export default App;