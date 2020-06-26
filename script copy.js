let tadaBtn = document.getElementById('tada-btn');
let keyBtn = document.getElementById('kf-btn');

let tadaText = document.getElementById('tada-text');
let keyframeText = document.querySelector('#keyframe-text');

console.log("123");

tadaBtn.addEventListener('click', function () {
    tadaText.classList.remove('hidden');
    tadaText.classList.add('shown');
    tadaBtn.innerHTML = "Hide";

    tadaBtn.setAttribute("id", "tada-btn-hide");
    // tadaBtn.removeAttribute('tada-btn');
    console.log(tadaBtn.id);

    // let tadaBtnHide = document.getElementById('tada-btn-hide');
    // tadaBtnHide.addEventListener('click', function(){
    //     console.log("456");
        tadaText.classList.remove('shown');
        tadaText.classList.add('hidden');
        tadaBtnHide.innerHTML = "Show More";

    //     tadaBtnHide.setAttribute("id", "tada-btn");
    //     // tadaBtnHide.removeAttribute('tada-btn-hide');
    //     console.log(tadaBtnHide.id);    
    //     let tadaBtn = document.getElementById('tada-btn');
    // })  
})

keyBtn.addEventListener('click', function () {

    if (keyframeText.style.display = "none") {
        keyframeText.classList.remove('hidden');
        console.log("inbtw");
        keyframeText.classList.add('shown');
        console.log("add");

    } else {
        keyframeText.classList.remove('shown');
        keyframeText.classList.add('hidden');
        console.log('delete');
    }
})