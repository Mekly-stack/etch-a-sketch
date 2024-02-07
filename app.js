document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");

    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        gridContainer.appendChild(div);
    }

    gridContainer.addEventListener('mouseover', function(event) {
        if (event.target.matches('div')) {
            event.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    });
});