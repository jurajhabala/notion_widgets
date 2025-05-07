const SERVER_URL = "https://unbiased-relaxing-barnacle.ngrok-free.app";

const displayImages = async () => {
  const gallery = document.getElementById("imageGallery");

  try {
    const res = await fetch(`${SERVER_URL}/files`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
        "Accept": "application/json"
      }
    });

    const imageUrls = await res.json();
    gallery.innerHTML = "";

    for (const url of imageUrls) {
      const imageRes = await fetch(url, {
        headers: {
          "ngrok-skip-browser-warning": "69420"
        }
      });

      const blob = await imageRes.blob();
      const imgURL = URL.createObjectURL(blob);

      const img = document.createElement("img");
      img.src = imgURL;
      img.alt = "Uploaded image";
      gallery.appendChild(img);
    }
  } catch (error) {
    console.error("Image loading failed:", error);
  }
};


const upload = async () => {
  const files = document.getElementById('fileInput').files;
  if (files.length === 0) return alert('Select at least one file.');

  for (const file of files) {
    const formData = new FormData();
    formData.append('file', file); // Keep the field name consistent with your server

    try {
      await fetch(`${SERVER_URL}/upload`, {
        method: 'POST',
        body: formData
      });
    } catch (error) {
      console.error(`Error uploading ${file.name}:`, error);
    }
  }

  alert('All files uploaded!');
};