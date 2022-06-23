class Artist {
    constructor(name, cur) {
        this.name = name
        this.cur = cur
        this.songprice = 15;
        this.profit = 0;
        this.songlist = []
    }
    format(num) {
        return `${(num / 100).toFixed(2)} ${this.cur}`
    }
    intro() {
        return `Hi, my name is ${this.name} and I am a musician!`

    }

    songPrice(newPrice) {
        this.songprice = newPrice;
        return `${this.name}'s price per song is ${this.format(this.songprice)}`;
    }

    addSong(song) {
        this.songlist.push({
            title: song,
            count: 0,
        });
        return `Prideta daina: ${song}`

        
    }
    playlist() {
        const firstline = `${this.name}'s playlist:`
        let maxlength = firstline.length;
        let list = []
        for(let i = 0; i<this.songlist.length; i++) {
            const {title, count} = this.songlist[i];
            list.push(`${i + 1}. ${title} (${count})`);
            if (list[i].length > maxlength) {
                maxlength = list[i].length
            }
        }
            return `${firstline}\r\n${`=`.repeat(maxlength)}\r\n${list.join(`\r\n`)}`
    }
    
    playSong(a) {
        this.songlist[a].count++
        return `Playing song: ${this.songlist[a].title}`
    }
    fortune() {
        return `Total lifetime wealth of ${this.name} is ${this.format(this.profit)} right now!`;
    }
}

module.exports = Artist;