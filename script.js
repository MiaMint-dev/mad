const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

if (Days && Hours && Minutes && Seconds) {
const targetDate = new Date("August 20 2026 18:00:00").getTime();

function timer () {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  const days = Math.floor(distance / 1000 / 60 / 60/ 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  Days.textContent = days;
  Hours.textContent = hours;
  Minutes.textContent = minutes;
  Seconds.textContent = seconds;

  if(distance < 0){
    Days.textContent = "00";
    Hours.textContent = "00";
    Minutes.textContent = "00";
    Seconds.textContent = "00";

}
}

timer();
const countdown = setInterval(timer, 1000);
}

const button1 = document.getElementById('preset-1');
const button2 = document.getElementById('preset-2');
const button3 = document.getElementById('preset-3');
const radioText = document.getElementById('now-playing');
const volume = document.getElementById('radio-volume');
const radio = document.getElementById('radio');

if (radio) {

if (volume) {
volume.addEventListener('input', () => {

    const currentVolume = Number(volume.value);

    track1.volume = currentVolume;
    track2.volume = currentVolume;
    track3.volume = currentVolume;

});
}
const track1 = new Audio('preset-1.mp3');
const track2 = new Audio('preset-1.mp3');
const track3 = new Audio('preset-1.mp3');

track1.loop = true;
track2.loop = true;
track3.loop = true;


function stopAllTracks() {
    track1.pause();
    track2.pause();
    track3.pause();
 }

if (button1) {
 button1.addEventListener('click', () => {
        if (track1.paused) {
            stopAllTracks(); 
            track1.play();
            radioText.textContent = "Now Playing - The ocean is outside your window";
        } else{
            track1.pause();
            radioText.textContent = "Welcome To MAD FM * Tune into your preferred preset";
        }
        
   })};

   if (button2) {
button2.addEventListener('click', () => {
            if (track2.paused)  {
                stopAllTracks();
                track2.play();
                radioText.textContent = "Now Playing - The ocean is outside your window";
    
        }else {
            track2.pause();
            radioText.textContent = "Welcome To MAD FM * Tune into your preferred preset";
        }});            
}

if (button3) {
button3.addEventListener('click', () => {
    if (track3.paused) {
        stopAllTracks();
        track3.play();
        radioText.textContent = "Now Playing - The ocean is outside your window";
    }else {
        track3.pause();
        radioText.textContent = "Welcome to MAD FM * Tune into your preffered preset";
    }});
}
}

const avashell = document.getElementById('ava-shell');
const avacard = document.getElementById('ava-card');
const avax = document.getElementById('avax');

const aricshell = document.getElementById('aric-shell');
const ariccard = document.getElementById('aric-card');
const aricx = document.getElementById('aricx');

const ivanshell = document.getElementById('Ivan-shell');
const ivancard = document.getElementById('ivan-card');
const ivanx = document.getElementById('ivanx');

if(avashell && avacard) {
    avashell.addEventListener("click", () => {
        avacard.classList.remove("hidden");
    });
}
if (avax && avacard) {
    avax.addEventListener("click", () => {
        avacard.classList.add("hidden");
    });
}

if(aricshell && ariccard) {
    aricshell.addEventListener("click", () => {
        ariccard.classList.remove("hidden");
    });
}
if (aricx && ariccard) {
    aricx.addEventListener("click", () => {
        ariccard.classList.add("hidden");
    });
}

if (ivanshell && ivancard) {
    ivanshell.addEventListener('click', () => {
        ivancard.classList.remove("hidden");
    });
}
if (ivanx && ivancard) {
    ivanx.addEventListener("click", () => {
        ivancard.classList.add("hidden");
    });
}
const bottle = document.getElementById('greenbottle');
const whocard = document.getElementById('whocard');
const bottlex = document.getElementById('bottlex');

if ( bottle && whocard ) {
    bottle.addEventListener("click", () => {
        whocard.classList.remove("hidden");
    });
}
if (bottlex && whocard) {
    bottlex.addEventListener("click", () => {
        whocard.classList.add('hidden');
    });
}


const darkmode = document.getElementById('darkmode');
const sunsetmode = document.getElementById('sunsetmode');

if(darkmode) {
darkmode.addEventListener('click', () => {
    document.body.classList.remove('sunset-mode');
document.body.classList.toggle('dark-mode');
});
}

if(sunsetmode){
    sunsetmode.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
        document.body.classList.toggle('sunset-mode');
    });
}


