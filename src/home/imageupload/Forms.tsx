import React, { useState } from "react";
import axios from "axios";
import { FileUploader } from "./FileUploader";

const Forms = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);

    // axios
    //   .post(UPLOAD_URL, formData)
    //   .then((res) => {
    //     alert("File Upload success");
    //   })
    //   .catch((err) => alert("File Upload Error"));
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)} />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
};

export default Forms;
