
let sad = ['gif/s1.gif', 'gif/s2.gif', 'gif/s3.gif', 'gif/s4.gif', 'gif/s5.gif', 'gif/s6.gif'];

let cute = ['gif/l1.gif', 'gif/l4.gif', 'gif/l7.gif', 'gif/l8.gif'
    , 'gif/l9.gif', 'gif/l14.gif', 'gif/l15.gif', 'gif/l16.gif'];

let cutie = ['gif/l2.gif', 'gif/l3.gif', 'gif/l5.gif', 'gif/l6.gif', 'gif/l10.gif', 'gif/l11.gif', 'gif/l12.gif', 'gif/l13.gif', 'gif/l17.gif'
    , 'gif/l18.gif'];

    let happysong =['song/dandelion.mp3','song/timropratiksha.mp3','song/youreyes.mp3','song/alagasman.mp3','song/hosanna.mp3','song/omahi.mp3','song/wannabeyours.mp3'];
    let sadsong=['song/moyemoye.mp3','song/hasibngye.mp3','song/tuhaikahan.mp3','song/mix.mp3','song/gul.mp3','song/pahelebhimain.mp3'];

    


let func1 = () => {
    document.getElementById("g").style.display = "block";
    document.getElementById("e").style.display = "none";
}

 async function playhappysong(){
    let happynum = Math.floor(Math.random() * happysong.length);
    let happygana = happysong[happynum];
    var audio =  new Audio(happygana);
    await audio.play();
    audio.volume = 0.45;
    audio.loop = true;
   }
  async function playsadsong(){
    let sadnum = Math.floor(Math.random() * sadsong.length);
    let sadgana = sadsong[sadnum];
    var audio = new Audio(sadgana);
    await audio.play();
    audio.volume = 0.45;
    audio.loop = true;
  
   }


let f = () => {
   
    let random;
    random = Math.floor(Math.random() * 100);
  
    if (random < 50) {

        let random1 = Math.floor(Math.random() * sad.length);
        document.getElementById("gif").src = sad[random1];
        document.getElementById("text-h1").innerHTML = "Sometimes life takes unexpected turns, but trust that everything happens for a reason. 🫤 ";

    } else if (random < 70) {
        let random2 = Math.floor(Math.random() * cute.length);
        document.getElementById("gif").src = cute[random2];
        document.getElementById("text-h1").innerHTML = "in a world of billions, finding someone who complements you perfectly is a rare blessing. 💞";
    } else {
        let random3 = Math.floor(Math.random() * cutie.length);
        document.getElementById("gif").src = cutie[random3];
        document.getElementById("text-h1").innerHTML = "Two hearts meant to be together will always find their way. 😘";
    }
    document.getElementById("lv").innerHTML = random + "%";
    document.getElementById("percent").style.display = "block";

 if(random>=50){
    playhappysong();
 }else if(random<50){
    playsadsong();
 }
   


}



let f2 = () => {
    document.getElementById("mess").style.display = "block";
}
 










