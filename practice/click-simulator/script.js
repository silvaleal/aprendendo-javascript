const colors = [
    'green', 'blue', 'red', 'white'
]

const randomBG = () =>{return colors[Math.floor(Math.random()*colors.length)]}

function simulator() {
    return {
        display: document.body.querySelector('.window'),
        coins: document.getElementById('coins'),

        start() {
            document.addEventListener('click', event => {
                target = event.target
                console.log(target)
                this.count()
            })
        },

        count() {
            document.body.style.background = randomBG()
            document.body.style.color = randomBG()
            this.coins.textContent++
        }
    }
}


const sim = simulator()
sim.start()