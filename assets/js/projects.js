document.querySelectorAll('.project-tile.has-video').forEach(tile => {
    const video = tile.querySelector('video');

    if (video){
        video.addEventListener('click', (event) => {
            if (video.paused) {
                video.muted = false;
                video.play().then(() => {
                    console.log('Video is playing');
                }).catch(error => {
                    console.error('Error trying to play video:', error);
                });
            } else {
                video.pause();
            }
            event.stopPropagation()
        });
    }

    tile.addEventListener('click', (event) => {
        // Toggle project expansion when the tile (but not the video) is clicked
        toggleProject(tile);
    });
});

document.querySelectorAll('.project-tile:not(.has-video)').forEach(tile => {
    tile.addEventListener('click', () => toggleProject(tile));
});


function toggleProject(tile) {
    // Close any currently open tiles
    document.querySelectorAll('.project-tile').forEach(otherTile => {
        if (otherTile !== tile) {
            otherTile.classList.remove('expanded');
        }
    });
    
    // Toggle the clicked tile
    tile.classList.toggle('expanded');

}


