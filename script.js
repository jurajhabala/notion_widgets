// List of image URLs
const imageUrls = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_960_720.jpg",
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