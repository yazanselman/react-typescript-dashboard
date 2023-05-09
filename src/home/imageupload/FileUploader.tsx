import React, { useRef } from "react";

interface Props {
  onFileSelectSuccess: (file: any) => void;
}

export const FileUploader: React.FC<Props> = ({ onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e: any) => {
    // handle validations
    const file = e.target.files[0];
    onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button onClick={(e) => fileInput.current} className="btn btn-primary" />
    </div>
  );
};
