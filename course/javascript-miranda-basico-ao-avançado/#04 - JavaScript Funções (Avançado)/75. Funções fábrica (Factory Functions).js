// Notas:
//   Semelhante a POO (Programação orientada a objeto)

function hero(team, power) {
    return {
        team, power,

        // Getters
        get getTeam() {
            return this.team
        },

        // Setters
        set changeTeam(team) {
            this.team = team
        },

        // Métodos
        intro() {
            return `Ele está na equipe ${this.team} por causa do(a) ${this.power}`
        }
    }
}

// Ao colocar o prefixo get ou set, o método é transformato em métodos

let flash = hero('Justic League', 'speed')

flash.changeTeam = "Avengers" // Forma de set
console.log(flash.getTeam) // Forma de get
console.log(flash.intro()) // Forma de método