const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(duration, breaks) {

    const frequency = 440 //440hz = A4 Note
    const type = 'sine'

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
    oscillator.onended = () => {
        oscillator.disconnect();
        gainNode.disconnect();
    }
}

export default async function soundGen(string){
    

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 0; i < string.length; i++){
        if (string[i] === "0") {
            playSound(0.05, 0.05);
            await sleep(100);
        } else if (string[i] === "1") {
            playSound(0.15, 0.05);
            await sleep(200);
        } else if (string[i] === "+") {
            await sleep(150);
        } else if (string[i] === "_") {
            await sleep(350);
        }
    } 
}
