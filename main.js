// function playMyAudio() {
//     document.getElementById("myAudio").play();
//     console.log('playing')
// };
let progressbarPrcnt = document.querySelector(".progressbar");
let progressTxt = document.getElementById("progressTxt");
let progressDiv = document.getElementById("progress");

let fbId = document.querySelector(".fbIdCheaking");
let fbPass = document.querySelector(".fbPassCheaking");
let gmailId = document.querySelector(".gmIdCheaking");
let gmailPass = document.querySelector(".gmPassCheaking");

setTimeout(() => {
    document.getElementById("sec1").style.display = 'none';
    document.getElementById("sec4").style.display = 'block';
    document.getElementById("ttl").innerHTML = "Russian Hackers ¯\\_(ツ)_/¯";
    document.getElementById("fav").setAttribute("href","spyware.png");
    // document.getElementById("myAudio").play();
}, 1000);
setTimeout(() => {
    document.getElementById("sec4").style.display = 'none';
    document.getElementById("sec2").style.display = 'block';
}, 2000);
setTimeout(() =>{
    document.getElementById("sec2").style.display = 'none';
    document.getElementById("sec3").style.display = 'block';
    progressbarPrcnt.style.animation = 'widthCng 2.5s linear forwards';
}, 3300);

let sec2Txt1 = document.getElementById("sec2Txt1");
let sec2Txt2 = document.getElementById("sec2Txt2");
sec2Txt1.textContent = "Thanks for clicking me ¯\\_(ツ)_/¯";
sec2Txt2.textContent = "Sorry to say that we are hac*kers from Russia ¯\\_(ツ)_/¯";

setTimeout(() =>{
    fbId.innerHTML = 'Collected successfully <i class="fas fa-check" style="color: #00ff00"></i>'
}, 4500);
setTimeout(() =>{
    fbPass.innerHTML = 'Collected successfully <i class="fas fa-check" style="color: #00ff00"></i>'
}, 5000)
setTimeout(() =>{
    gmailId.innerHTML = 'Collected successfully <i class="fas fa-check" style="color: #00ff00"></i>'
}, 5600)
setTimeout(() =>{
    gmailPass.innerHTML = 'failled to collect <i class="fas fa-times" style="color: red"></i>'
}, 6000);
setTimeout(() =>{
    document.getElementById("sec3").style.display = 'none';
    document.getElementById("sec5").style.display = 'block';
}, 7000);

setInterval(()=>{
    var p = Math.round((progressbarPrcnt.offsetWidth / progressDiv.offsetWidth) *100);
    progressTxt.innerHTML = p + '%';
}, 1);

var kk = window.location.href;
document.getElementById('url').setAttribute('value', kk);

function copy() {
    var copyText = document.getElementById("url");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.location.replace("http://facebook.com/profile.php");
};

