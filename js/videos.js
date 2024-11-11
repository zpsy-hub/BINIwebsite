document.addEventListener("DOMContentLoaded", function() {
    const playlistItems = document.querySelectorAll('.playlist-item');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const iframeSrc = item.getAttribute('data-src');
            const iframe = document.createElement('iframe');
            iframe.src = iframeSrc;
            iframe.allowFullscreen = true;
            item.innerHTML = ''; // Clear the current content
            item.appendChild(iframe); // Add the iframe
        });
    });
});
