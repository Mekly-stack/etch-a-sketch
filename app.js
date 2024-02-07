document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");

    // Reset the background colors 
    function resetColors() {
        const gridCells = document.querySelectorAll('#grid-container div');
        gridCells.forEach(cell => {
            cell.style.backgroundColor = ''; // Resetting background color
        });
    }

    //  "Reset" button
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetColors);

    // Grid
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
