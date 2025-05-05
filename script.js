const imageInput = document.querySelector("#imageInput");
const display = document.querySelector("#display");

imageInput.addEventListener("change", function () {
    const files = this.files;

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const imageContainer = document.createElement("div");
            imageContainer.style.backgroundImage = `url(${reader.result})`;
            display.appendChild(imageContainer);
        });
        reader.readAsDataURL(file);
    });
});