var icons = [
    'win1.png','win2.png','win3.png','win4.png','win5.png','win6.png','win7.png','win8.png'
];



//confetti
const Confettiful = function(el) {
    this.el = el;
    this.containerEl = null;

    this.confettiFrequency = 3;
    this.confettiColors = [`url('img/star.png') no-repeat 50% 0/contain`, `url('img/star.png') no-repeat 50% 0/contain`, `url('img/star.png') no-repeat 50% 0/contain`, `url('../img/star.png') no-repeat 50% 0/contain`];
    this.confettiAnimations = ['slow', 'medium', 'fast'];


    this._setupElements();
    this._renderConfetti();

};

Confettiful.prototype._setupElements = function() {
    const containerEl = document.createElement('div');
    const elPosition = this.el.style.position;

    if (elPosition !== 'relative' || elPosition !== 'absolute') {
        this.el.style.position = 'absolute';
    }

    containerEl.classList.add('confetti-container');

    this.el.appendChild(containerEl);

    this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function() {
    this.confettiInterval = setInterval(() => {
        const confettiEl = document.createElement('div');
        const confettiSize = (Math.floor(Math.random() * 3) + 17) + 'px';
        const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
        const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
        const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

        confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.background = confettiBackground;


        confettiEl.removeTimeout = setTimeout(function() {
            confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);

        this.containerEl.appendChild(confettiEl);
    }, 60);


};

window.confettiful = new Confettiful(document.querySelector('.js-container'));




var slots = document.querySelector('.bao__slot');
var cols = document.querySelectorAll('.col');
var col1 = document.querySelector('.col-one');
var col2 = document.querySelector('.col-two');
var col3 = document.querySelector('.col-three');
for(var i in cols) {
    if (!cols.hasOwnProperty(i))
        continue;
    var col = cols[i];
    var str = '';
    var firstThree = '';
    for(var x = 0; x < 30; x++) {
        var part = '<img class="icon" src="img/slots/'+icons[Math.floor(Math.random()*icons.length)]+'">';
        str += part
        if (x < 3) firstThree += part;
    }
    let content = col.innerHTML
    col.innerHTML = content + str+firstThree;
}

let win3 = document.querySelectorAll('.start3')
let win2 = document.querySelectorAll('.start2')
let overlay = document.querySelector('.bao__overlay')
let firstWin = document.querySelector('.bao__firstWin')
let firstWinBtn = document.querySelector('.bao__firstWin-btn')
let secondWin = document.querySelector('.bao__secondWin')
let textMain = document.querySelector('.bao__text')
let textWin = document.querySelector('.bao__textWin')
let btn = document.querySelector('.bao__btn')
let firstwinAnim = document.querySelector('.win-fire')
let secondwinAnim = document.querySelector('.win-fire-blue')
let firstWinScale = document.querySelectorAll('.win-scale')
let secondWinScale = document.querySelectorAll('.win-scale-blue')
let counter = ''

btn.addEventListener('click', ()=> {
    spin(this)
    counter++
    btn.classList.add('pointer-none')
})

firstWinBtn.addEventListener('click', ()=> {
    btn.classList.remove('pointer-none')
    overlay.classList.add('opacity')
    firstWin.classList.add('hidden')
    col2.classList.remove('win')
    col3.classList.remove('win')
    firstwinAnim.classList.remove('_add')
    firstWinScale.forEach(item=>{
        item.classList.remove('_add')
    })
})

function spin(elem) {
    slots.classList.toggle('spinning', true);
    window.setTimeout(function() {
        let startIcon = document.querySelectorAll('.start')
        startIcon.forEach(item => {
            item.style.display = 'none'
        })
        win2.forEach(item => {
            item.style.display = 'block'
            item.style.transform = 'scaleX(-1) rotate(180deg)'
        })
            var icons = [
                'win1.png','win2.png','win3.png','win4.png','win5.png','win6.png','win7.png','win8.png'
            ];

            if(counter === 1){
                var results1 = [
                    icons[0],
                    icons[0],
                    icons[0]
                ]
                var results2 = [
                    icons[5],
                    icons[7],
                    icons[6]
                ]
                var results3 = [
                    icons[4],
                    icons[2],
                    icons[3]
                ]
                var icons = col1.querySelectorAll('.icon');
                for(var x = 0; x < 3; x++) {
                    icons[x].setAttribute('src', 'img/slots/'+results1[x]);
                    icons[(icons.length-3)+x].setAttribute('src', 'img/slots/'+results1[x]);
                }
                var icons2 = col2.querySelectorAll('.icon');
                var icons3 = col3.querySelectorAll('.icon');
                for(var x = 0; x < 3; x++) {
                    icons2[x].setAttribute('src', 'img/slots/'+results2[x]);
                    icons2[(icons.length-3)+x].setAttribute('src', 'img/slots/'+results2[x]);
                    icons3[x].setAttribute('src', 'img/slots/'+results3[x]);
                    icons3[(icons.length-3)+x].setAttribute('src', 'img/slots/'+results3[x]);
                }

                col2.classList.add('win')
                col3.classList.add('win')
                textWin.classList.add('visible')
                setTimeout(() => {
                    firstwinAnim.classList.add('_add')
                    firstWinScale.forEach(item=>{
                        item.classList.add('_add')
                    })
                }, 1500)


                setTimeout(() => {
                    overlay.classList.remove('opacity')
                    firstWin.classList.remove('hidden')
                    textMain.innerHTML = 'One attempt left'

                }, 3300);

            }
            if(counter === 2){

                win3.forEach(item => {
                    item.style.display = 'block'
                    item.style.transform = 'scaleX(-1) rotate(180deg)'
                })
                //for ios fox
                for(var x = 0; x < 9; x++) {
                    win2[0].setAttribute('src', 'img/slots/win1.png');
                    win2[1].setAttribute('src', 'img/slots/win7.png');
                    win2[2].setAttribute('src', 'img/slots/win6.png');
                    win2[3].setAttribute('src', 'img/slots/win3.png');
                    win2[4].setAttribute('src', 'img/slots/win3.png');
                    win2[5].setAttribute('src', 'img/slots/win3.png');
                    win2[6].setAttribute('src', 'img/slots/win5.png');
                    win2[7].setAttribute('src', 'img/slots/win3.png');
                    win2[8].setAttribute('src', 'img/slots/win4.png');
                }

                var results1 = [
                    icons[0],
                    icons[6],
                    icons[5]
                ]
                var results2 = [
                    icons[2],
                    icons[2],
                    icons[2]
                ]

                var icons = col1.querySelectorAll('.icon');
                var icons2 = col2.querySelectorAll('.icon');
                for(var x = 0; x < 3; x++) {
                    icons[x].setAttribute('src', 'img/slots/'+results1[x]);
                    icons[(icons.length-3)+x].setAttribute('src', 'img/slots/'+results1[x]);
                    icons2[x].setAttribute('src', 'img/slots/'+results2[x]);
                    icons2[(icons.length-3)+x].setAttribute('src', 'img/slots/'+results2[x]);
                }

                col1.classList.add('win')
                col3.classList.add('win')
                setTimeout(() => {
                    secondwinAnim.classList.add('_add')
                    secondWinScale.forEach(item=>{
                        item.classList.add('_add')
                    })
                }, 1500)

                setTimeout(() => {
                    overlay.classList.remove('opacity')
                    secondWin.classList.remove('hidden')
                }, 3300);
            }
    }, 1500);


    window.setTimeout(function() {
        slots.classList.toggle('spinning', false);

    }.bind(elem), 3500);
}


(function () {
    let url = new URL(window.location.href)

    if (url.searchParams.has('qtag')) {
        localStorage.setItem('qtag', url.searchParams.get('qtag'))
    }

    window.addEventListener('click', function (e) {
        const parent = e.target.closest('a')
        if (parent) {
            e.preventDefault()
            let link = new URL(parent.href)
            link.searchParams.set('qtag', localStorage.getItem('qtag'))
            document.location.href = link
        }
    })
})();






