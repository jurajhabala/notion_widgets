// List of image URLs
const imageUrls = [
    "https://unbiased-relaxing-barnacle.ngrok-free.app/files/bethe_bloch.png",
    "https://unbiased-relaxing-barnacle.ngrok-free.app/files/bremmsstrahlung.png"
  ];
  
  // Function to display images
  const displayImages = () => {
    const gallery = document.getElementById("imageGallery");
  
    // Loop through the list of URLs
    imageUrls.forEach(url => {
      const imgElement = document.createElement("img");
      imgElement.src = url;  // Set the image source to the URL
      gallery.appendChild(imgElement);  // Append the image to the gallery
    });
  };
  
  // Call the function to display images
  displayImages();