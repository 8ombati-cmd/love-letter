// 🔐 PASSWORD SYSTEM (ADDED)
const correctPassword = "14th August";
let attempts = 0;

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");
  const hint = document.getElementById("hint");

  if(input === correctPassword){
    const lock = document.getElementById("lockScreen");
    lock.style.transition = "opacity 1.5s";
    lock.style.opacity = 0;
    setTimeout(()=> lock.style.display="none",1500);
  } else {
    attempts++;
    error.innerText = "Wrong password 💔";
    // Shake animation
    document.getElementById("lockScreen").animate([
      { transform: 'translateX(0px)' },
      { transform: 'translateX(-10px)' },
      { transform: 'translateX(10px)' },
      { transform: 'translateX(0px)' }
    ], { duration:300 });
    if(attempts === 2) hint.innerText="Hint: It's something we share in Common ❤️";
    if(attempts === 3) hint.innerText="Hint: Pick your date and Month...";
    if(attempts >=4) hint.innerText="Okay... it's 'Your Favorite ' 💝";
  }
}

// ENTER KEY triggers unlock
document.getElementById("passwordInput").addEventListener("keypress", function(e){
  if(e.key==="Enter") checkPassword();
});

// ======================
// YOUR ORIGINAL CODE STARTS BELOW (UNCHANGED)
// ======================

// Recipient Name
const recipientName = "Susan"; // <-- Replace with the person's name

// Show recipient name outside the envelope
document.getElementById("recipient-name-outside").textContent = recipientName;

const envelope = document.getElementById("envelope");
const background = document.getElementById("background");
const poemContainer = document.getElementById("poem-container");
const poemDiv = document.getElementById("poem");
const music = document.getElementById("bg-music");

const lines = [
  `In the quiet hum of twilight’s glow,`,
  `${recipientName}, your presence lingers, soft and slow.`,
  "A spark that dances, pure and bright,",
  "Turning ordinary into starlit night.",
  `${recipientName}, your laughter drifts—a gentle song,`,
  "A melody where my heart belongs.",
  `${recipientName}, your eyes, like galaxies, vast and deep,`,
  "Hold secret dreams I long to keep.",
  "Your heart moves with a graceful fire,",
  "A rhythm that stirs my own desire.",
  "In every gesture, tender, small,",
  "I see the wonder that conquers all.",
  `I wish to write your name in stars above,`,
  `To tell the cosmos of my endless love.`,
  `But since the sky is far too wide,`,
  `I whisper it where my soul resides.`,
  `You are my story, my secret melody,`,
  "The softest sunset, my reverie.",
  "Hopelessly, endlessly, completely true,",
  `Forever enchanted, I am by you, ${recipientName}.`
];

function startPoem() {
  envelope.classList.add("open");
  setTimeout(() => {
    envelope.style.display = "none";
    background.style.opacity = 1;
    poemContainer.style.opacity = 1;
    poemContainer.style.pointerEvents = "all";

    // Typing & disappearing lines
    let lineIndex = 0;

    function typeLine() {
      if(lineIndex >= lines.length) return;
      let line = lines[lineIndex];
      let i = 0;
      poemDiv.textContent = ""; 
      poemDiv.style.opacity = 1;

      function typeChar() {
        if(i < line.length){
          poemDiv.textContent += line[i];
          i++;
          setTimeout(typeChar, 60);
        } else {
          setTimeout(()=>{
            poemDiv.style.opacity = 0;
            setTimeout(()=>{
              lineIndex++;
              typeLine();
            },600);
          },800);
        }
      }
      typeChar();
    }

    typeLine();

    music.play();

    // Stars
    for(let i=0;i<100;i++){
      let star = document.createElement("div");
      star.className="star";
      star.style.left=Math.random()*100+"vw";
      star.style.top=Math.random()*100+"vh";
      star.style.animationDuration=(2+Math.random()*3)+"s";
      poemContainer.appendChild(star);
    }

    // Shooting stars
    setInterval(()=>{
      let s=document.createElement("div");
      s.className="shooting-star";
      s.style.left=Math.random()*80+"vw";
      s.style.top=Math.random()*50+"vh";
      poemContainer.appendChild(s);
      setTimeout(()=>s.remove(),2000);
    },3000);

    // Star photos
    const photoUrl = "Susan.jpeg"; 
    for(let i=0;i<10;i++){
      let starPhoto=document.createElement("div");
      starPhoto.className="star-photo";
      starPhoto.style.left=Math.random()*90+"vw";
      starPhoto.style.top=Math.random()*80+"vh";
      let img=document.createElement("img");
      img.src=photoUrl;
      starPhoto.appendChild(img);

      // Random floating animation
      let floatAnim = Math.random()>0.5 ? "floatX" : "floatY";
      starPhoto.style.animation = `${floatAnim} ${4+Math.random()*3}s ease-in-out infinite alternate, twinkle ${2+Math.random()*2}s infinite alternate`;

      poemContainer.appendChild(starPhoto);
    }

    // Voice narration
    const speechText = lines.join(" ");
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate=1; 
    utterance.pitch=1.2; 
    utterance.volume=1;
    speechSynthesis.speak(utterance);

    // Background sparkles
    for(let i=0;i<30;i++){
      let sparkle = document.createElement("div");
      sparkle.className="sparkle";
      sparkle.style.left=Math.random()*100+"vw";
      sparkle.style.top=Math.random()*100+"vh";
      background.appendChild(sparkle);
    }

  },1000);
}

envelope.addEventListener("click", startPoem);

// Tap for extra shooting stars
poemContainer.addEventListener("click",(e)=>{
  let s=document.createElement("div");
  s.className="shooting-star";
  s.style.left=e.clientX+"px";
  s.style.top=e.clientY+"px";
  poemContainer.appendChild(s);
  setTimeout(()=>s.remove(),2000);

  let sparkle = document.createElement("div");
  sparkle.className="star";
  sparkle.style.left=e.clientX+"px";
  sparkle.style.top=e.clientY+"px";
  sparkle.style.width="5px";
  sparkle.style.height="5px";
  poemContainer.appendChild(sparkle);
  setTimeout(()=>sparkle.remove(),1000);
});