class Character {
    constructor(_name, _strong, _intel, _img) {
        this.id = Math.floor(Math.random() * Date.now())
        this.name = _name
        this.strong = _strong
        this.intel = _intel
        this.img = "./assets/img/testImg.png"
        //hello syl 
    }
}