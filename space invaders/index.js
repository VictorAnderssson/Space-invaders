const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//sträcker ut canvas över hela skärmen
canvas.width = innerWidth
canvas.height = innerHeight

class Projectile{
    constructor(){
        this.position = {
            x: 1000,
            y:850
        }
        const image = new Image()
        image.src = 'img/projectile.png'
        image.onload = () => {
        }
        this.image = image 
        this.width = image.width
        this.height = image.height    
    }
        draw() {
            //c.fillStyle = 'red'
            //c.fillRect(this.position.x, this.position.y, this.width, this.height)
            c.drawImage(this.image, this.position.x, this.position.y, this.height, this.width)
        }
    
}

class Player {
    constructor(){
        this.position = {
            x: 1000,
            y: 850
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image()
        image.src = 'img/spaceship.png'
        image.onload = () => {
        }

        this.image = image 
        this.width = image.width
        this.height = image.height    
    }
        draw() {
            //c.fillStyle = 'red'
            //c.fillRect(this.position.x, this.position.y, this.width, this.height)
            c.drawImage(this.image, this.position.x, this.position.y, this.height, this.width)
        }
}
const projectiles = new Array()
const player = new Player()
player.draw()

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle =  'green'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    projectiles.forEach(element => {
        element.draw()
    });
}

animate()

addEventListener("keydown", (event)=>{
    switch(event.key){
        case "a":
            player.position.x += -100
            console.log("left")
            break
        case "d":
            player.position.x += 100
            console.log("right")
            break
        case " ":
            projectiles.push(new Projectile())
            console.log("space")
            break
    }    
})

