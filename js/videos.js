document.addEventListener("DOMContentLoaded", function() {
    const playlistItems = document.querySelectorAll('.playlist-item .video-thumbnail');

    playlistItems.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const parent = thumbnail.parentElement;
            const videoId = thumbnail.src.match(/vi\/([^/]+)/)[1];
            const iframe = document.createElement('iframe');

            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            thumbnail.style.display = 'none';
            parent.appendChild(iframe);
        });
    });
});
