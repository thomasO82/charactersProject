let gameManager = new CharacterManager()

document.querySelector('#createChar').addEventListener('click',()=>{
    let name = document.querySelector("#name").value
    let strong = document.querySelector("#strong").value
    let intel = document.querySelector("#intel").value
    let char = new Character(name,strong,intel)
    gameManager.createCharacter(char)

})

