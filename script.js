var myscore = 0;
var compscore = 0;

// localStorage.removeItem('myscore');
// localStorage.removeItem('compscore');

if (localStorage.getItem("myscore") != null) {
    console.log(localStorage.getItem("myscore"));
    document.getElementById("myscore").innerHTML = localStorage.getItem("myscore");
    myscore = localStorage.getItem("myscore");
}
else {
    console.log(localStorage.getItem("myscore"));
    localStorage.setItem("myscore", 0);
    document.getElementById("myscore").innerHTML = localStorage.getItem("myscore");
    myscore = localStorage.getItem("myscore");
}
if (localStorage.getItem("compscore") != null) {
    console.log(localStorage.getItem("compscore"));
    document.getElementById("compscore").innerHTML = localStorage.getItem("compscore");
    compscore = localStorage.getItem("compscore");
}
else {
    console.log(localStorage.getItem("myscore"));
    localStorage.setItem("compscore", 0);
    document.getElementById("compscore").innerHTML = localStorage.getItem("compscore");
    compscore = localStorage.getItem("compscore");
}

var options = ['Rock', 'Paper', 'Scissor'];
const randomchoose = () => options[(Math.floor(Math.random() * options.length))]

function play(ele) {
    let myopt = ele.id;
    console.log('My option->', myopt);
    let compopt = randomchoose();
    console.log('PC option->', compopt);
    updatescore(myopt, compopt);
    let you = document.querySelector('.result > div:nth-of-type(1) > div:nth-of-type(2)')
    you.setAttribute('id', myopt);
    let youimg = document.querySelector('.result > div:nth-of-type(1) > div:nth-of-type(2) > img')
    youimg.setAttribute('src', myopt + '.svg');
    let comp = document.querySelector('.result > div:nth-of-type(3) > div:nth-of-type(2)')
    let compimg = document.querySelector('.result > div:nth-of-type(3) > div:nth-of-type(2) > img')
    compimg.setAttribute('src', compopt + '.svg')
    comp.setAttribute('id', compopt);
    document.querySelector('.result').style.display = "flex";
    document.querySelector('.game').style.display = "none";
}

function playagain() {
    document.querySelector('.result').style.display = "none";
    document.querySelector('.game').style.display = "block";
    document.querySelector('.next').style.display = "none";
    
    let you = document.querySelector('.result > div:nth-of-type(1) > div:nth-of-type(2)');
    you.setAttribute('class', 'opt');
    let comp = document.querySelector('.result > div:nth-of-type(3) > div:nth-of-type(2)');
    comp.setAttribute('class', 'opt');
}

function playagain2() {
    window.location.replace("https://heena99.github.io/RockPaperScissor/")

    document.querySelector('.result').style.display = "none";
    document.querySelector('.game').style.display = "block";
    document.querySelector('.next').style.display = "none";

    let you = document.querySelector('.result > div:nth-of-type(1) > div:nth-of-type(2)');
    you.setAttribute('class', 'opt');
    let comp = document.querySelector('.result > div:nth-of-type(3) > div:nth-of-type(2)');
    comp.setAttribute('class', 'opt');

}

function updatescore(opt1, opt2) {
    if (opt1 == opt2) {
        
        document.querySelector('.win').innerHTML = 'TIE UP';
        document.querySelector('.secondline').innerHTML = '\n';
        document.querySelector('.playagain').innerHTML = 'REPLAY';

    }
    else if ((opt1 == "Rock" && opt2 == "Scissor") || (opt1 == "Paper" && opt2 == "Rock") || (opt1 == "Scissor" && opt2 == "Paper")) {
        
        document.querySelector('.win').innerHTML = 'YOU WIN';
        document.querySelector('.secondline').innerHTML = 'AGAINST PC';
        document.querySelector('.playagain').innerHTML = 'PLAY AGAIN';

        myscore++;
        localStorage.setItem("myscore", myscore);
        document.getElementById("myscore").innerHTML = localStorage.getItem("myscore");

        let you = document.querySelector('.result > div:nth-of-type(1) > div:nth-of-type(2)');
        you.setAttribute('class', 'optwin');

        document.querySelector('.next').style.display = "inline";
    }
    else {
        
        document.querySelector('.win').innerHTML = 'YOU LOST';
        document.querySelector('.secondline').innerHTML = 'AGAINST PC';
        document.querySelector('.playagain').innerHTML = 'PLAY AGAIN';

        compscore++;
        localStorage.setItem("compscore", compscore);
        document.getElementById('compscore').innerHTML = localStorage.getItem("compscore");

        let comp = document.querySelector('.result > div:nth-of-type(3) > div:nth-of-type(2)');
        comp.setAttribute('class', 'optwin');
    }
}

function hurray() {
    window.location.replace("https://heena99.github.io/RockPaperScissor/index2.html");
}

function openrules() {
    document.querySelector('.rulelist').style.display = "block";
}

function closerules() {
    document.querySelector('.rulelist').style.display = "none";
}