console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "people", filePath: "songs/1.mp3", coverPath: "images/covers1.jpg"},
    {songName: "Desi Kalakar", filePath: "songs/2.mp3", coverPath: "images/covers2.jpg"},
    {songName: "Under X Inflence", filePath: "songs/3.mp3", coverPath: "images/covers3.jpg"},
    {songName: "Dakku slowed reverb", filePath: "songs/4.mp3", coverPath: "images/covers4.jpg"},
    {songName: "fearlees", filePath: "songs/5.mp3", coverPath: "images/covers5.jpg"},
    {songName: "Kahhani suno", filePath: "songs/6.mp3", coverPath: "images/covers6.webp"},
    {songName: "Kossandra-remix", filePath: "songs/7.mp3", coverPath: "images/covers7.jpg"},
    {songName: "I was never think", filePath: "songs/8.mp3", coverPath: "images/covers8.png"},
    {songName: "Sia- Unstoppable", filePath: "songs/9.mp3", coverPath: "images/covers9.jpg"},
    {songName: "Swaha-X- Faded", filePath: "songs/10.mp3", coverPath: "images/covers8.webp"},
    {songName: "No Love", filePath: "songs/11.mp3", coverPath: "images/covers11.webp"},
    {songName: "Star boy", filePath: "songs/12.mp3", coverPath: "images/covers12.jpg"},
    {songName: "Headlights", filePath: "songs/13.mp3", coverPath: "images/covers12.webp"},
    {songName: "Heat- Waves", filePath: "songs/14.mp3", coverPath: "images/covers14.jpg"},
    {songName: "Rise up", filePath: "songs/15.mp3", coverPath: "images/covers15.webp"},
    {songName: "Xiyonat", filePath: "songs/16.mp3", coverPath: "images/covers16.jpg"},
    {songName: "Liyakun", filePath: "songs/17.mp3", coverPath: "images/covers17.jpg"},
    {songName: "Mallibu", filePath: "songs/18.mp3", coverPath: "images/covers18.jpg"},
    {songName: "On&On", filePath: "songs/19.mp3", coverPath: "images/covers23.jpg"},
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=19){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
