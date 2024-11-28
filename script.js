const images = document.querySelectorAll('.image');
let draggedElement = null;

images.forEach(image => {
    // Handle drag start
    image.addEventListener('dragstart',(e) => {
        draggedElement = e.target;
    });

    // Allow dropping by preventing default behavior
    image.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // Handle drop
    image.addEventListener('drop', (e) => {
        e.preventDefault();
        if(draggedElement !== e.target) {
            // Swap background images
            const draggedStyle = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = draggedStyle;
        }
    });

    // Reset dragged element after drag ends
    image.addEventListener('dragend', () => {
        draggedElement = null;
    });
});
