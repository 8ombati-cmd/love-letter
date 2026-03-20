// 🔐 PASSWORD SYSTEM (ADDED)
const correctPassword = "14th August";
let attempts = 0;

// 🔊 SOUND EFFECTS (LEVEL 2)
const unlockSound = new Audio("unlock.wav"); // add file
const errorSound = new Audio("error.wav");   // add file

// 🔥 ADDED: LEVEL 3 HACK EFFECT
let hackDone = false;

function startHackEffect(){
  const hackScreen = document.createElement("div");
  hackScreen.style.position = "fixed";
  hackScreen.style.top = "0";
  hackScreen.style.left = "0";
  hackScreen.style.width = "100%";
  hackScreen.style.height = "100%";
  hackScreen.style.background = "black";
  hackScreen.style.color = "#00ffcc";
  hackScreen.style.fontFamily = "monospace";
  hackScreen.style.padding = "20px";
  hackScreen.style.zIndex = "9999";

  document.body.appendChild(hackScreen);

  const lines = [
    "Initializing secure access...",
    "Bypassing encryption...",
    "Decrypting memories...",
    "Accessing heart database...",
    "Verifying emotional signature...",
    "Connection established ❤️"
  ];

  let i = 0;

  function typeLine(){
    if(i >= lines.length){
      hackDone = true;
      hackScreen.remove();
      setTimeout(() => {
  const lock = document.getElementById("lockScreen");

  unlockSound.play();

  lock.style.transition = "opacity 1.5s, filter 1.5s";
  lock.style.opacity = 0;
  lock.style.filter = "blur(10px)";

  setTimeout(()=> lock.style.display="none",1500);
}, 300);
      return;
    }

    const p = document.createElement("p");
    hackScreen.appendChild(p);

    let j = 0;
    function typeChar(){
      if(j < lines[i].length){
        p.textContent += lines[i][j];
        j++;
        setTimeout(typeChar, 25);
      } else {
        i++;
        setTimeout(typeLine, 250);
      }
    }
    typeChar();
  }

  typeLine();
}

// 🔥 LEVEL 4 MATRIX RAIN
function startMatrixRain(){
  startMatrixRain();
  const canvas = document.createElement("canvas");
  canvas.id = "matrixCanvas";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = [];
  for(let x = 0; x < columns; x++){
    drops[x] = 1;
  }

  function draw(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffcc";
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if(drops[i] * fontSize > canvas.height && Math.random() > 0.975){
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  const interval = setInterval(draw, 33);

  // remove after hack ends
  setTimeout(()=>{
    clearInterval(interval);
    canvas.remove();
  }, 6000);
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");
  const hint = document.getElementById("hint");
  const lock = document.getElementById("lockScreen");

  if(input === correctPassword){

     if(!hackDone){
    startHackEffect();
    return;
  }

    unlockSound.play(); // 🔊 play unlock sound

    // 💫 ADVANCED UNLOCK ANIMATION
    lock.style.transition = "opacity 1.5s, filter 1.5s";
    lock.style.opacity = 0;
    lock.style.filter = "blur(10px)";

    setTimeout(()=> lock.style.display="none",1500);

  } else {
    attempts++;
    error.innerText = "Wrong password 💔";

    errorSound.play(); // 🔊 error sound

    // 💥 SHAKE + GLOW EFFECT
    lock.animate([
      { transform: 'translateX(0px)' },
      { transform: 'translateX(-12px)' },
      { transform: 'translateX(12px)' },
      { transform: 'translateX(0px)' }
    ], { duration:300 });

    lock.style.boxShadow = "0 0 20px red";
    setTimeout(()=> lock.style.boxShadow = "none", 500);

    if(attempts === 2) hint.innerText="Hint: It's something we share in Common ❤️";
    if(attempts === 3) hint.innerText="Hint: Pick your date and Month...";
    if(attempts >=4) hint.innerText="Okay... it's 'Your Favorite ' 💝";
  }
}

// ✅ SAFE DOM LOAD FIX (ENHANCED LEVEL 2)
document.addEventListener("DOMContentLoaded", () => {

  const passwordInput = document.getElementById("passwordInput");

  // 🎯 AUTO FOCUS INPUT
  if(passwordInput){
    passwordInput.focus();

    passwordInput.addEventListener("keypress", function(e){
      if(e.key==="Enter") checkPassword();
    });
  }

  // 🖱️ BUTTON CLICK ANIMATION
  const unlockBtn = document.getElementById("unlockBtn");
  if(unlockBtn){
    unlockBtn.addEventListener("click", () => {
      unlockBtn.style.transform = "scale(0.9)";
      setTimeout(()=> unlockBtn.style.transform = "scale(1)", 150);
      checkPassword();
    });
  }

  // ======================
  // YOUR ORIGINAL CODE
  // ======================

  const recipientName = "Susan";
  document.getElementById("recipient-name-outside").textContent = recipientName;

  const envelope = document.getElementById("envelope");
  const background = document.getElementById("background");
  const poemContainer = document.getElementById("poem-container");
  const poemDiv = document.getElementById("poem");
  const music = document.getElementById("bg-music");

  const finalMessage = "💖 One last thing... I will always choose you. 💖";

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

      let lineIndex = 0;

      function typeLine() {

        if(lineIndex === lines.length){
          setTimeout(() => {
            poemDiv.style.opacity = 1;
            poemDiv.textContent = finalMessage;
            poemDiv.style.textShadow = "0 0 20px red, 0 0 40px pink";
          }, 1000);
          return;
        }

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

      for(let i=0;i<100;i++){
        let star = document.createElement("div");
        star.className="star";
        star.style.left=Math.random()*100+"vw";
        star.style.top=Math.random()*100+"vh";
        star.style.animationDuration=(2+Math.random()*3)+"s";
        poemContainer.appendChild(star);
      }

      setInterval(()=>{
        let s=document.createElement("div");
        s.className="shooting-star";
        s.style.left=Math.random()*80+"vw";
        s.style.top=Math.random()*50+"vh";
        poemContainer.appendChild(s);
        setTimeout(()=>s.remove(),2000);
      },3000);

      const photoUrl = "Susan.jpeg"; 
      for(let i=0;i<10;i++){
        let starPhoto=document.createElement("div");
        starPhoto.className="star-photo";
        starPhoto.style.left=Math.random()*90+"vw";
        starPhoto.style.top=Math.random()*80+"vh";

        let img=document.createElement("img");
        img.src=photoUrl;
        starPhoto.appendChild(img);

        let floatAnim = Math.random()>0.5 ? "floatX" : "floatY";
        starPhoto.style.animation = `${floatAnim} ${4+Math.random()*3}s ease-in-out infinite alternate, twinkle ${2+Math.random()*2}s infinite alternate`;

        poemContainer.appendChild(starPhoto);
      }

      const speechText = lines.join(" ");
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.rate=1; 
      utterance.pitch=1.2; 
      utterance.volume=1;
      speechSynthesis.speak(utterance);

      for(let i=0;i<30;i++){
        let sparkle = document.createElement("div");
        sparkle.className="sparkle";
        sparkle.style.left=Math.random()*100+"vw";
        sparkle.style.top=Math.random()*100+"vh";
        background.appendChild(sparkle);
      }

      setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        poemContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
      }, 500);

    },1000);
  }

  envelope.addEventListener("click", startPoem);

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

  document.addEventListener("mousemove", (e) => {
    let spark = document.createElement("div");
    spark.className = "sparkle";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";

    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 1000);
  });

  const loveBtn = document.getElementById("loveBtn");

  if(loveBtn){
    loveBtn.addEventListener("mouseover", () => {
      loveBtn.style.position = "absolute";
      loveBtn.style.left = Math.random() * 80 + "vw";
      loveBtn.style.top = Math.random() * 80 + "vh";
    });

    loveBtn.addEventListener("click", () => {
      alert("😂 You caught me... I love you more!");
    });
  }

});