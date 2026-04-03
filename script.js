document.addEventListener('DOMContentLoaded', () => {
    const easterBtn = document.getElementById('easter-btn');
    const emojis = ['🌷', '🌸', '🌼', '🥚', '🐣', '🐥', '🐤', '🐇', '🐰', '🍭', '🦋', '🌱'];

    easterBtn.addEventListener('click', () => {
        createEmojiShower();
    });

    function createEmojiShower() {
        const particleCount = 60;
        
        for (let i = 0; i < particleCount; i++) {
            // Add a small delay for each emoji to make it look like a shower
            setTimeout(() => {
                const emoji = document.createElement('div');
                emoji.className = 'emoji-particle';
                emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                
                // Randomize horizontal position (0-100vw)
                const leftPos = Math.random() * 100;
                emoji.style.left = `${leftPos}vw`;
                
                // Add a random horizontal sway
                const sway = (Math.random() - 0.5) * 40; // up to +/- 20px sway
                emoji.style.setProperty('--sway', `${sway}px`);
                
                // Randomize animation duration (2.5-6 seconds)
                const duration = 2.5 + Math.random() * 3.5;
                emoji.style.animationDuration = `${duration}s`;
                
                // Randomize size slightly
                const size = 1.2 + Math.random() * 1.8;
                emoji.style.fontSize = `${size}rem`;

                document.body.appendChild(emoji);

                // Remove the element after animation is done
                setTimeout(() => {
                    emoji.remove();
                }, duration * 1000);
            }, i * (35 + Math.random() * 40)); // Randomize timing between spawns
        }
    }
});
