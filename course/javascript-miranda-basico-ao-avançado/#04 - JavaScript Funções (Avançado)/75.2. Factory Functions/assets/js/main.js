function calculate() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.run();
        },

        run() {
            document.addEventListener('click', clicked => {
                target = clicked.target
                
                if (target.classList.contains('btn-clear')) {
                    this.displayClean()
                }

                if (target.classList.contains('btn-eq')) {
                    this.displayCalc()
                }

                if (target.classList.contains('btn-num')) {
                    this.displayScript(target.innerText)
                }

            })
        },

        displayClean() {
            this.display.value = ''
        },

        displayScript(value) {
            this.display.value += `${value}`
        },

        displayCalc() {
            let result = eval(this.display.value)

            try {
                if (!result) {
                    self.displayClean()
                    alert('Soma inválida')
                    return
                }
                this.display.value = String(result)
                return
            } catch (error) {
                alert('Soma inválida')
                return
            }

        }
    };
}

calculate().start();