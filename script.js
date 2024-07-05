window.addEventListener('load', () => {
    const image = document.getElementById('animatedImage');
    let isEnlarged = false;

    const animateImage = () => {
        if (isEnlarged) {
            image.style.transform = 'scale(1)';
        } else {
            image.style.transform = 'scale(1.5)';
        }
        isEnlarged = !isEnlarged;
    };

    // Animar la imagen cada 2 segundos
    setInterval(animateImage, 2000);
});
