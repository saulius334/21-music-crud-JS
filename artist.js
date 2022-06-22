class Artist {
    constructor(name, cur) {
        this.name = name
        this.cur = cur
        this.songprice = 0.15;
        this.profit = 0;
        this.songlist = []
    }
    format(num) {
        return (num / 100).toFixed(2) + this.cur
    }
    intro() {
        return `Hi, my name is ${this.name} and I am a musician!`

    }

    songPrice(newPrice) {
        this.songprice = newPrice;
        return `${this.name}'s price per song is ${(this.songprice / 100)}`;
    }

    addSong(song) {
        this.songlist.push({
            id: 1,
            name: song,
            count: 0,
        })

        
    }
    playSong(a) {
        this.profit += this.songprice
        let song = this.songlist[a]
        song.count++
    }
    playlist() {
        let list = 0
        this.pl = `${this.name}'s playlist:\n==============`
        for (const song of this.songlist) {
            return `${this.pl}\n ${++list}. ${song} ${song.count}`
        }
    }

    fortune() {
        return `Total lifetime wealth of ${this.name} is ${this.format(this.profit)} right now!`;
    }
}

module.exports = Artist;