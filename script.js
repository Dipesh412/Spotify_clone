console.log("welcome to spotify");
// let audioElement = new Audio('songs/1.mp3');
// audioElement.play();


// Initialize the variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "summer high", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "heart", filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "ma balle", filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Excuses", filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "maja a", filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "majha", filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "mjha", filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
]

songitem.forEach((Element,i)=>{
    // console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity =0;
    }
})
//Listen to Events


audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
    progrss = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progrss);
    myprogressbar.value = progrss;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songtime')).forEach((Element)=>{
        Element.classList.remove('fa-circle-play');
        Element.classList.add('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songtime')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})  

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})  
