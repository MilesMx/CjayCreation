const music = new Audio('Miles Away  Next to You Lyrics ft Mercedes ArnHorn.mp3');

// create Array

const songs = [
    {
        id:'1',
        songname: ' Fly <br> <div class="subtitle">Marshmello</div>',
        poster: "835.jpg"
    },
    {
        id:'2',
        songname: ' Alone <br> <div class="subtitle">Marshmello</div>',
        poster: "836.jpg"
    },
    {
        id:'3',
        songname: ' Happier <br> <div class="subtitle">Marshmello</div>',
        poster: "838.jpg"
    },
    {
        id:'4',
        songname: ' Summer <br> <div class="subtitle">Marshmello</div>',
        poster: "841.jpg"
    },
    {
        id:'5',
        songname: ' Next to you <br> <div class="subtitle">Miles Away</div>',
        poster: "842.jpg"
    },
    {
        id:'6',
        songname: ' Fly <br> <div class="subtitle">Marshmello</div>',
        poster: "834.jpg"
    },
    {
        id:'7',
        songname: ' Queen of Heart <br> <div class="subtitle">Westlife</div>',
        poster: "842.jpg"
    },
    {
        id:'8',
        songname: ' Faded <br> <div class="subtitle">Alan Walker</div>',
        poster: "838.jpg"
    },
    {
        id:'9',
        songname: ' Alone <br> <div class="subtitle">Marshmello</div>',
        poster: "843.jpg"
    },
    {
        id:'10',
        songname: ' Better <br> <div class="subtitle">Khalid</div>',
        poster: "837.jpg"
    },
    {
        id:'11',
        songname: ' Next to you <br> <div class="subtitle">Miles Away</div>',
        poster: "208.jpg"
    },
    {
        id:'12',
        songname: ' Summer <br> <div class="subtitle">Marshmello</div>',
        poster: "841.jpg"
    },
    {
        id:'13',
        songname: ' Mad <br> <div class="subtitle">Neyo</div>',
        poster: "842.jpg"
    },
]

Array.from(document.getElementsByClassName('songitem')).forEach((Element, i)=>{
    Element.getElementsByTagName('img')[0].src=songs[i].poster;
    Element.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
})

let masterplay = document.getElementById('masterplay');
let wave = document.getElementsByClassName('wave')[0];

masterplay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterplay.classList.remove('btn2');
        masterplay.classList.add('btn2');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterplay.classList.add('btn2');
        masterplay.classList.remove('btn2');
        wave.classList.remove('active2');
    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
        })   
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music .src = `Html Projects /${index}.mp3`;
        poster_master_play.src = `Html Projects/${index}.jpg`;
        music.play();
    })
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
      })
          song_title.forEach(ele =>{
              let {songname} = ele;
              title.innerHTML = songname;

    })
})

function openPage() {
    var x = document.getElementById("search").value;

    if (x === "") {
        window.open("");
    }

    if (x === "") {
        window.open("");
    }

}