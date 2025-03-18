document.addEventListener('DOMContentLoaded', function() {
    const sumbit = document.querySelector('.txt');

    sumbit.addEventListener('click', function () {
        const form = document.querySelector('.form');

        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
        } else if (form.style.display === 'block') {
            form.style.display = 'none';
        }
    });
});

window.addEventListener('DOMContentLoaded', function () {
    const audioElements = document.querySelectorAll('.mp3-audio');
    const downloadOn = this.sessionStorage.getItem('downloadOn');
    let currentPlaying = null;


    if (downloadOn === 'true') {
        audioElements.forEach(audioElement => {
            audioElement.controlsList.remove('nodownload');
            sessionStorage.setItem('downloadOn', 'false');
        })        
    } 
    
    audioElements.forEach(audioEl => {
        audioEl.addEventListener('play', ()=> {
            if(currentPlaying && currentPlaying !== audioEl) {
                currentPlaying.pause();
                const currentImage = currentPlaying.closest('.container').querySelector('.image');
                currentImage.classList.remove('play');
            } 
                
            currentPlaying = audioEl;
            const image = audioEl.closest('.container').querySelector('.image');
            image.classList.add('play');
            
            audioEl.addEventListener('pause', () => {
                image.classList.remove('play');
            })
                   
        })
    })

    this.sessionStorage.setItem('reload', 'false'); 
}); 

document.querySelector('.submit-btn').addEventListener('click', function () {
    const form = document.querySelector('.login-form');
    if(form.checkValidity()) {
        const audioElements = document.querySelector('.mp3-audio');
   
        if (audioElements.controlsList.contains('nodownload')) {
            audioElements.controlsList.remove('nodownload');
    
            sessionStorage.setItem('downloadOn', 'true');
        } 
    
        alert('Thank you for accepting.  \nDownload is available');
    } else {
        event.preventDefault();
        form.reportValidity();
    }

});

window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('reload', 'true');
});

window.addEventListener('pagehide', () => {  
    const reload = sessionStorage.getItem('reload') === 'true';
    if (!reload) {
        sessionStorage.removeItem('downloadOn');
    }
}); 