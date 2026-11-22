function playSound(duration, breaks) {

    const frequency = 440 //440hz = A4 Note
    const type = 'sine'

    const audioContext = new (window.AudioContext || window.webkitAudioContext)(); 

    const now = audioContext.currentTime;
    
    //sound source
    const oscillator = audioContext.createOscillator();

    //volume
    const gainNode = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);

    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(now + breaks);
    oscillator.stop(now + duration + breaks);
}

export default async function soundGen(string){

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 0; i < string.length; i++){
        if (string[i] === "0") {
            playSound(0.05, 0.1);
            await sleep(150);
        } else if (string[i] === "1") {
            playSound(0.2, 0.1);
            await sleep(300);
        }
    }
}
