const audioIcon = document.getElementById('audio-icon');
        const audioPlayer = document.getElementById('audio-player');
        const audioControl = document.getElementById('audio-control');

        let audioPlaying = false;

        audioControl.addEventListener('click', () => {
            if (audioPlaying) {
                audioPlayer.pause();
                audioIcon.classList.remove('on');
                audioIcon.classList.add('off');
            } else {
                audioPlayer.play();
                audioIcon.classList.remove('off');
                audioIcon.classList.add('on');
            }
            audioPlaying = !audioPlaying;
            audioControl.classList.toggle('active');
        });