class Artist {
    constructor(name, cur) {
        this.name = name
        this.cur = cur
        this.songprice = 0.15;
        this.profit = 0;
        this.songlist = []
    }
    formatCurrency(num) {
        return (num / 100).toFixed(2) + this.cur
    }
    intro() {
        return `Hi, my name is ${this.name} and I am a musician!`

    }

    songPrice(newPrice) {
        this.songprice = newPrice;
        return `${this.name}'s price per song is ${(this.songprice / 100)}`;
    }

    playSong() {
        this.profit += this.songprice
    }
    playlist() {
        return `${this.name}'s playlist:\n===========\n ${this.songlist.join(` `)}`
    }
    addSong(song) {
        this.songlist.push(`${song}\n`)

        
    }

    fortune() {
        return `Total lifetime wealth of ${this.name} is ${this.formatCurrency(this.profit)} right now!`;
    }
}

module.exports = Artist;