const homeSec = document.querySelector('#home');
const aboutSec = document.querySelector('#about');
const developerSec = document.querySelector('#developer');
const artistSec = document.querySelector('#artist');
const leaderSec = document.querySelector('#leader');

const nightSky = document.querySelector('#night-sky');
const houseLights = document.querySelector('#house-lights');
const partyDeco = document.querySelector('#party-deco');
const nightOverlay = document.querySelector('#night-overlay');
const body = document.querySelector('#body');
// const partyLights = document.querySelector('#party-lights');

let pastSec = {};
let currentSec = {
    name: null,
    obj: null
};
let storyProgress = [];
let ticker = 0;

function checkStoryProgress(sec) {
    if (!storyProgress.includes(sec.name)) {
        storyProgress.push(sec.name);
    }

    if (storyProgress.length == 1 & ticker == 0) {
        body.classList.replace('show', 'hide');
        ticker += 1;
    } else if (storyProgress.length == 2 & ticker == 1) {
        partyDeco.classList.replace('hide', 'show');
        ticker += 1;
    } else if (storyProgress.length == 3 & ticker == 2) {
        houseLights.classList.replace('hide', 'show');
        nightSky.classList.replace('hide', 'show');
        ticker += 1;
    } else if (storyProgress.length == 4 & ticker == 3) {
        nightOverlay.classList.replace('hide', 'show');
        // partyLights.classList.replace('hide', 'show');
        ticker += 1;
    }
}

function show(sec) {
    console.log('showing');
    sec.obj.classList.remove(`${sec.name}_hide`);
    sec.obj.classList.add(`${sec.name}_show`);
    sec.obj.classList.remove(`${sec.name}_stay_hidden`);
    sec.obj.classList.add(`${sec.name}_stay_visible`);

    document.querySelector(`.${sec.name}_sq1`).classList.add(`${sec.name}_sq_show`);
    document.querySelector(`.${sec.name}_sq1`).classList.remove(`${sec.name}_sq_hide`);
}

function hide(sec) {
    sec.obj.classList.remove(`${sec.name}_show`);
    sec.obj.classList.add(`${sec.name}_hide`);
    sec.obj.classList.remove(`${sec.name}_stay_visible`);
    sec.obj.classList.add(`${sec.name}_stay_hidden`)

    document.querySelector(`.${sec.name}_sq1`).classList.remove(`${sec.name}_sq_show`);
    document.querySelector(`.${sec.name}_sq1`).classList.add(`${sec.name}_sq_hide`);
}

function getTime() {
    let time = 1500;
    if (pastSec.name == 'home' || pastSec.name == null) {
        time = 0;
    }
    return time;
}

function handlePastSec() {
    pastSec = currentSec;
    console.log(pastSec.name);
    if (pastSec.name != 'home' & pastSec.name != null) {
        console.log(`hiding ${pastSec.name}`);
        hide(pastSec)
    };
}

homeSec.addEventListener('click', (e) => {
    console.log(currentSec)
    if (e.target.id == 'home-link' & currentSec.name != 'home') {
        pastSec = currentSec;
        if (pastSec.name != null) hide(pastSec);
        currentSec.name = 'home';
        currentSec.obj = homeSec;
    } else if (e.target.id == 'about-link' & currentSec.name != 'about') {
        handlePastSec();
        let time = getTime();
        currentSec.name = 'about';
        currentSec.obj = aboutSec;
        checkStoryProgress(currentSec);
        setTimeout(function () { show(currentSec) }, time);
    } else if (e.target.id == 'developer-link' & currentSec.name != 'dev') {
        handlePastSec();
        let time = getTime();
        currentSec.name = 'dev';
        currentSec.obj = developerSec;
        checkStoryProgress(currentSec);
        setTimeout(function () { show(currentSec) }, time);
    } else if (e.target.id == 'artist-link' & currentSec.name != 'art') {
        handlePastSec();
        let time = getTime();
        currentSec.name = 'art';
        currentSec.obj = artistSec;
        checkStoryProgress(currentSec);
        setTimeout(function () { show(currentSec) }, time);
    } else if (e.target.id == 'leader-link' & currentSec.name != 'lead') {
        handlePastSec();
        let time = getTime();
        currentSec.name = 'lead';
        currentSec.obj = leaderSec;
        checkStoryProgress(currentSec);
        setTimeout(function () { show(currentSec) }, time);
    }
})