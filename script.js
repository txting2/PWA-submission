let tadaBtn = document.getElementById('tada-btn');
let keyBtn = document.getElementById('kf-btn');
let nusBtn = document.getElementById('nus-btn');
let sajcBtn = document.getElementById('sajc-btn');
let s1Btn = document.getElementById('skill1-btn');
let s2Btn = document.getElementById('skill2-btn');
let s3Btn = document.getElementById('skill3-btn');
let s4Btn = document.getElementById('skill4-btn');

let tadaText = document.getElementById('tada-text');
let keyframeText = document.querySelector('#keyframe-text');
let nusText = document.querySelector('#nus-text');
let sajcText = document.querySelector('#sajc-text');
let s1Text = document.querySelector('#skill1-text');
let s2Text = document.querySelector('#skill2-text');
let s3Text = document.querySelector('#skill3-text');
let s4Text = document.querySelector('#skill4-text');

console.log("123");


tadaBtn.addEventListener('click', function () {
    if (tadaBtn.innerHTML === "Show More") {
        tadaText.classList.remove('hidden');
        tadaText.classList.add('shown');
        tadaBtn.innerHTML = "Hide";
        console.log("hide");
    } else {
        tadaText.classList.remove('shown');
        tadaText.classList.add('hidden');
        tadaBtn.innerHTML = "Show More";
        console.log("show");
    }
})

keyBtn.addEventListener('click', function () {
    if (keyBtn.innerHTML === "Show More") {
        keyframeText.classList.remove('hidden');
        keyframeText.classList.add('shown');
        keyBtn.innerHTML = "Hide";
        console.log("hide");
    } else {
        keyframeText.classList.remove('shown');
        keyframeText.classList.add('hidden');
        keyBtn.innerHTML = "Show More";
        console.log("show");
    }
})

nusBtn.addEventListener('click', function () {
    if (nusBtn.innerHTML === "Show More") {
        nusText.classList.remove('hidden');
        nusText.classList.add('shown');
        nusBtn.innerHTML = "Hide";
        console.log("hide");
    } else {
        nusText.classList.remove('shown');
        nusText.classList.add('hidden');
        nusBtn.innerHTML = "Show More";
        console.log("show");
    }
})

sajcBtn.addEventListener('click', function () {
    if (sajcBtn.innerHTML === "Show More") {
        sajcText.classList.remove('hidden');
        sajcText.classList.add('shown');
        sajcBtn.innerHTML = "Hide";
        console.log("hide");
    } else {
        sajcText.classList.remove('shown');
        sajcText.classList.add('hidden');
        sajcBtn.innerHTML = "Show More";
        console.log("show");
    }
})

s1Btn.addEventListener('click', function () {
    if (s1Btn.innerHTML === "Show More") {
        s1Text.classList.remove('hidden');
        s1Text.classList.add('shown');
        s1Btn.innerHTML = "Hide";
        console.log("hide");
    } else {
        s1Text.classList.remove('shown');
        s1Text.classList.add('hidden');
        s1Btn.innerHTML = "Show More";
        console.log("show");
    }
})
s2Btn.addEventListener('click', function () {
    if (s2Btn.innerHTML === "Show More") {
        s2Text.classList.remove('hidden');
        s2Text.classList.add('shown');
        s2Btn.innerHTML = "Hide";
        console.log("hide");
    } else {
        s2Text.classList.remove('shown');
        s2Text.classList.add('hidden');
        s2Btn.innerHTML = "Show More";
        console.log("show");
    }
})
s3Btn.addEventListener('click', function () {
    if (s3Btn.innerHTML === "Show More") {
        s3Text.classList.remove('hidden');
        s3Text.classList.add('shown');
        s3Btn.innerHTML = "Hide";
        console.log("hide");
    } else {
        s3Text.classList.remove('shown');
        s3Text.classList.add('hidden');
        s3Btn.innerHTML = "Show More";
        console.log("show");
    }
})
s4Btn.addEventListener('click', function () {
    if (s4Btn.innerHTML === "Show More") {
        s4Text.classList.remove('hidden');
        s4Text.classList.add('shown');
        s4Btn.innerHTML = "Hide";
        console.log("hide");
    } else {
        s4Text.classList.remove('shown');
        s4Text.classList.add('hidden');
        s4Btn.innerHTML = "Show More";
        console.log("show");
    }
})