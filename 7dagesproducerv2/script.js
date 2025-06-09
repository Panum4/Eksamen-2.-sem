// Vi kan nu tilgå YouTube-spilleren i hele scriptet.
let player;

// Her opretter vi vores YouTube videoafspiller.
function onYouTubeIframeAPIReady() {
  // Vi initialiserer en ny YouTube Player og knytter den til elementet med id 'video-frame'.
  player = new YT.Player('video-frame', {
    // Vi angiver intro videoens unikke ID 
    videoId: 'F5LK3G5Z0Rc',
    
    // playerVars bruger vi til at sætte forskellige parametre for intro videoen:
    playerVars: {
      autoplay: 1,        // Vi sætter videoen til at starte automatisk 
      mute: 1,            // Videoen starter med at være muted, da browsere blokerer video med autoplay + lyd samtidig
      controls: 1,        // Vi viser de standard afspilnings muligheder som play/pause.
      modestbranding: 1,  // Vi minimerer YouTubes branding på videoen.
    },
    
    // Her sætter vi op, hvilke events vi vil lytte efter. Når player er klar kaldes onPlayerReady.
    events: {
      onReady: onPlayerReady
    }
  });
}

// Denne funktion bliver kaldt "onPlayerReady". Altså når videoafspilleren er færdig med at loade og er klar til brug.
function onPlayerReady() {
  // Det er her vi finder knappen med id 'unmute-knap' i vores HTML.
  const btn = document.getElementById('unmute-knap');
  
  // Vi sætter en eventlistener på knappen, så når brugeren klikker på den, sker der noget.
  btn.addEventListener('click', () => {
    // Når man klikker på unmute knappen starter videoen altså forfra, så man ser den hele med lyd
    player.seekTo(0);

    // Vi fjerner muten på videoen, så lyden kan høres.
    player.unMute();
    
    // Derefter skjuler vi knappen, da den ikke længere er nødvendig.
    btn.style.display = 'none';
  });
}