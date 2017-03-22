function setup(){
    createCanvas(600,400);
    background(0);
    
}

function draw(){
    
    
  
   
    var x = 0;
    while(x<width){
         fill(0, 255, 0);
         ellipse(x,  200, 25, 25);
        x = x + 50;
    }
   
   for(var x = 0; x < 650; x = x + 50){
       fill(255, 0, 200)
       ellipse(x, 100, 25, 25);
   }
       
}
