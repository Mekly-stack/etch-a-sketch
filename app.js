document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container")

    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
       gridContainer.appendChild(div);
      }
});
