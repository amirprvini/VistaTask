import React, { useState } from 'react';

const ImageUploadButton: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
    }
  };

  const handleUpload = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('handle upload')

    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      // Replace with your upload endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Upload successful:', data);
      } else {
        console.error('Upload failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading the image:', error);
    }

  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <button
          className="chooseBtnWrapper bg-gray-400 flex justify-around items-center py-2 px-4 rounded-sm text-black"
          onClick={handleUpload}
        >
          <img
            src="https://img.icons8.com/?size=100&id=83225&format=png&color=000000"
            alt="uploadIcon"
            width={"20px"}
          />
          <p className="fontBold">Choose photo...</p>
        </button>
      </label>
      {/* {selectedImage && (
        <div>
          <p>Selected File: {selectedImage.name}</p>
          <button onClick={handleUpload}>Upload Image</button>
        </div>
      )} */}
    </div>
  );
};

export default ImageUploadButton;
