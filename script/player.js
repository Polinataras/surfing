
let player;
const playerContainer = $(".player");

    var widthVideo = 662;
    var heigtVideo = 386;

    function myFunction(x) {
        if (x.matches) { 
            widthVideo = 480;
            heigtVideo = 351;
        } 
      }
      
      var x = window.matchMedia("(max-width: 768px)")
      myFunction(x) 

      
    function myFunction1(y) {
        if (y.matches) { 
            widthVideo = 385;
            heigtVideo = 211;
        } 
      }
      
      var y = window.matchMedia("(max-width: 480px)")
      myFunction1(y) 





let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();

        if (playerContainer.hasClass("paused")) {
           // playerContainer.removeClass("paused");
            player.pauseVideo();
        } else {
           // playerContainer.addClass("paused");
            player.playVideo();
        }
    });

    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

        $(".player__playback-button").css({
            left: `${newButtonPositionPercent}%`
        });

        player.seekTo(newPlaybackPositionSec);
    });

    $(".player__splash").click(e => {
        player.playVideo();
    })
};



const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);

    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return `${minutes} : ${seconds}`;
}

const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();

    $(".player__duration-estimate").text(formatTime(durationSec));

    if (typeof interval != "undefined") {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec)* 100;

        $(".player__playback-button").css({
            left: `${completedPercent}%`
        });

        $(".player__duration-completed").text(formatTime(completedSec));
    }, 1000);
};

const onPlayerStateChange = event => {
    switch (event.data) {
        case 1:
            playerContainer.addClass("active");
            playerContainer.addClass("paused");
            break;

        case 2:
        playerContainer.removeClass("active");
        playerContainer.removeClass("paused");
        break;
    }
};

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: heigtVideo,
    width: widthVideo,
    videoId: 'UagA3NO3NIg',
    events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
    },
    playerVars: {
        controls: 0,
        disablekb: 0,
        showinfo: 0,
        rel: 0,
        autoplay: 0,
        modestbranding: 0
    }
  });
}

eventsInit();
//x.addListener(myFunction) // Присоединить функцию прослушивателя при изменении состояния