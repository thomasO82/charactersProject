class CharacterManager {
    constructor() {
        this.characters = []
    }
    createCharacter(char) {
        this.characters.push(char)
        this.displayCharacter()
    }
    displayCharacter() {
        let parent = document.querySelector('#containerCharracters')
        parent.innerHTML = ""
        this.characters.forEach(element => {
            let container = document.createElement('div')
            container.classList.add('card-character')
            parent.appendChild(container)
            let containerimg = document.createElement('div')
            containerimg.classList.add('icon')
            container.appendChild(containerimg)
            let img = document.createElement('img')
            img.src = element.img
            containerimg.appendChild(img)
            let cardBody = document.createElement('div')
            cardBody.classList.add('card-body')
            container.appendChild(cardBody)
            let namePara = document.createElement('p')
            namePara.innerHTML = "Nom: " + element.name
            cardBody.appendChild(namePara)
            let strongPara = document.createElement('p')
            strongPara.innerHTML = "Force: " + element.strong
            cardBody.appendChild(strongPara)
            let intelPara = document.createElement('p')
            intelPara.innerHTML = "Intel: " + element.intel
            cardBody.appendChild(intelPara)
            let btnUpdate = document.createElement('button')
            btnUpdate.innerHTML = "Update"
            let btnDelete = document.createElement('button')
            btnDelete.innerHTML = "delete"
            btnUpdate.addEventListener('click',()=>{
                this.displayModalChar(element)
            } )
            btnDelete.addEventListener('click',()=>{
                this.deleteChar(element)
            } )
            container.appendChild(btnDelete)
            container.appendChild(btnUpdate)
        });
    }
    displayModalChar(char) {
        let parent = document.querySelector('#containerCharracters')
        parent.innerHTML = ""
        parent.innerHTML = ` <form action="">
        <label for="name">nom</label>
        <input type="text" id="updateName" value=${char.name}>
        <label for="strong">strong</label>
        <input type="text" id="updateStrong" value=${char.strong}>
        <label for="intel">intel</label>
        <input type="text" id="updateIntel" value=${char.intel}>
        <button id="updateChar" type="button">Valider</button>
    </form>`
        document.querySelector('#updateChar').addEventListener('click', () => {
            let name = document.querySelector("#updateName").value
            let strong = document.querySelector("#updateStrong").value
            let intel = document.querySelector("#updateIntel").value
            let newChar = new Character(name, strong, intel)
            this.updateChar(newChar, char)
        })
    }
    updateChar(char, oldCar) {
        let index = this.characters.indexOf(oldCar)
        this.characters[index] = char
        this.displayCharacter() 
    }
    deleteChar(char) {
        let index = this.characters.indexOf(char)
        this.characters.splice(index,1)
        this.displayCharacter() 
    }
}

