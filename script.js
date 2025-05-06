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

displayImages();