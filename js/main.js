const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');


//Se obtiene las dimenciones de la pantalla actual
const window_height=window.innerHeight; 
const window_width=window.innerWidth;

//Le asgina el tamaño de la pantalla al canvas
canvas.height=window_height;
canvas.width=window_width; 

canvas.style.background= '#FF8'; // Color de fondo

class Circle {
    constructor(x, y, radio, color, text){
        //Se crea el circulo
        this.posX= x;
        this.posY = y;
        this.radio = radio;
        this.color = color;
        this.text = text;
    }
    //Se dibuja el circulo
    draw(Context){
        Context.beginPath(); // Se inicia el dibujo
        Context.fillText(this.text,this.posX,this.posY); // Se escribe el texto
        ctx.textAlign = "center"; 
        ctx.textBaseline = "middle"; 
        ctx.font = "30px Consolas"
        Context.strokeStyle = this.color; // Color del perimetro del circulo
        Context.lineWidth = 5; // Ancho del perimetro del circulo
        Context.arc(this.posX, this.posY, this.radio, 0, 2*Math.PI, false); 
        Context.stroke();
        Context.closePath();

    }
}

let arrayCircle=[];
for (let i = 0; i < 10; i++){
    var radioRandom = Math.floor(Math.random()*100+10);

    let circle = new Circle(Math.random()*window_width, Math.random()*window_height, radioRandom, 'blue', i+1);
    arrayCircle.push(circle);
    arrayCircle[i].draw(ctx);
}




