
var page = 1;
var f = createFont("serif");
textFont(f);

var boromir = function() {

/***
 * face
***/
//{
rectMode(CORNER);

//face frame
fill(230, 226, 141);
noStroke();
ellipse(200, 250, 50, 70);

//neck
fill(230, 226, 141);
quad(180, 285, 175, 300, 225, 300, 220, 285);

//face features

//nose
 stroke(66, 66, 66);
strokeWeight(1.5);
arc(200, 255, 10, 5, 45, 125);

//eyes
fill(255, 255, 255);
noStroke();
ellipse(190, 245, 10, 5);
ellipse(210, 245, 10, 5);
stroke(0, 0, 0);
strokeWeight(0.5);
arc(190, 245, 10, 5, 0, 180);
arc(210, 245, 10, 5, 0, 180);
noStroke();
fill(0, 0, 0);
ellipse(190, 244.5, 2, 2);
ellipse(210, 244.5, 2, 2);

//mouth
fill(255, 255, 255);
arc(200, 272, 10, 7, 180, 360);
strokeWeight(1);
stroke(0, 0, 0);
arc(200, 270, 10, 3, 180, 360);

//hair
fill(87, 73, 17);
noStroke();
arc(200, 230, 60, 50, 180, 360);
rect(220, 230, 10, 50);
rect(170, 230, 10, 50);
ellipse(185, 230, 30, 20);
ellipse(215, 230, 30, 20);
ellipse(180, 280, 20, 20);
ellipse(220, 280, 20, 20);


//facial hair
noFill();
stroke(87, 73, 17);
strokeWeight(5);
line(190, 263, 210, 263);
line(190, 263, 190, 280);
line(210, 263, 210, 280);
line(190, 280, 210, 280);
line(190, 280, 180, 270);
line(210, 280, 220, 270);
noStroke();
fill(87, 73, 17);
ellipse(200, 282, 24, 15);

//}



/***
 * body
***/
//{

//torso frame
noStroke();
rectMode(CENTER);
fill(0, 0, 0);
noStroke();
rect(200, 320, 100, 50, 4);
quad(150, 340, 160, 401, 240, 401, 250, 340);


//shoulder guards
noStroke();
fill(212, 212, 212);
arc(160, 330, 100, 90, 180, 270);
fill(212, 212, 212);
arc(240, 330, 100, 90, 270, 360);


//left arm
fill(56, 43, 5);
quad(250, 330, 270, 400, 300, 400, 285, 330);
fill(0,0,0);
quad(283, 330, 298, 400, 300, 400, 285, 330);

//right arm
fill(56, 43, 5);
quad(150, 330, 115, 330, 100, 370, 130, 380);
ellipse(115, 375, 32, 32);
rect(114, 350, 31, 55);
fill(0, 0, 0);
rect(128, 350, 2, 50);



//glove and hand
fill(0, 0, 0);
quad(98, 327, 132, 327, 128, 300, 102, 300);
noFill();
stroke(0, 0, 0);
strokeWeight(7);
ellipse(120, 290, 20, 20);
arc(110, 285, 10, 35, 125, 250);
arc(115, 285, 10, 35, 125, 270);
arc(105, 285, 10, 35, 115, 235);
//}

};

var Frodo = function() {
    
    
    pushMatrix();
    scale(3.4);
    translate(-240, -120 );
    smooth();
    
    //Hobbit
    
    //stick
    noStroke();
    fill(74, 59, 9);
    rect(278, 224, 2, 60);
    fill(209, 209, 209);
   
      //{
      
        
        //neck
        rectMode(CENTER);
        noStroke();
        fill(255, 231, 158);
       rect(300, 207, 5, 10);
    
        //shirt
        smooth();
        noStroke();
        fill(0, 0, 0);
        quad(293, 207, 295, 227, 305, 227, 307, 207);
        
        //arms
        noStroke();
        fill(255, 231, 158);
        ellipse(280, 215, 8, 4);
        ellipse(310, 225, 3, 7);
        
        stroke(0, 0, 0);
        strokeWeight(5);
        line(292, 209, 310, 209);
        line(292, 209, 288, 215);
        line(288, 215, 282, 215);
        rect(282, 214.8, 0.4, 0.1);
        noStroke();
        fill(0, 0, 0);
        rect(310, 216, 5, 16);
        
        
        
        
        
        //buttons
        noStroke();
        for(var i = 209; i < 227; i +=3) {
            fill(255, 255, 255);
            ellipse(300, i, 1, 1);
            
        }    
        
        //pants
        noStroke();
        fill(92, 78, 21);
        rect(300, 226, 12, 5);
        quad(294, 228, 292, 250, 296, 250, 300, 228);
        quad(  302, 250, 300, 228, 306, 228, 306, 250);
        rect(300, 230, 12, 5);
        
        //shoes
        fill(255, 231, 158);
        noStroke();
        arc(304, 251, 5, 4, 180, 360);
        arc(294, 251, 5, 4, 180, 360);
        arc(294, 250.5, 5, 6, 0, 180);
        arc(304, 250.5, 5, 6, 0, 180);
        
        //belt
        fill(0, 0, 0);
        rect(300, 226, 13, 3);
        
    
    //}neck and torso
    
   
   
   //{
    //face
    noStroke();
    fill(255, 231, 158);
    ellipse(300, 200, 9, 9);
  
    quad(296, 202, 299, 206, 301, 206, 304, 202);
    ellipse(300, 205, 3, 2);
   
    //chin shadow
    stroke(0, 0, 0);
    strokeWeight(0.2);
    noFill();
    arc(300, 203, 5, 5, 40, 140);
    
    //mouth
    
    strokeWeight(0.1);
    stroke(0, 0, 0);
    arc(300, 202, 4, 1, 0, 180);
    
    
    //nose
    noFill();
    strokeWeight(0.2);
    arc(300, 201, 2, 1, 0, 180);
    
    //eyes
    stroke(255, 255, 255);
    strokeWeight(0.5);
    fill(0, 0, 0);
    
    ellipse(298.2, 198.8, 1.5, 1.2);
    ellipse(301.8, 198.8, 1.5, 1.2);
    noStroke();
    
    //eyebrows
    noStroke();
    fill(115, 91, 18);
    ellipse(298.2, 197.8, 2.5, 0.8);
    ellipse(301.8, 197.8, 2.5, 0.8);
    
    //hair
    noStroke();
    fill(115, 91, 18);
    ellipse(302, 194, 3, 3);
    ellipse(298, 194, 3, 3);
    ellipse(299, 195, 3, 3);
    ellipse(302, 195, 3, 3);
    ellipse(300.5, 194, 3, 3);
    ellipse(304, 197, 3, 3);
    ellipse(303, 195, 3, 3);
    ellipse(305, 201, 3, 3);
    ellipse(305, 200, 3, 3);
    ellipse(304.5, 199, 3, 3);
    ellipse(297, 195.5, 3, 3);
    ellipse(296, 197, 3, 3);
    ellipse(295, 200, 3, 3);
    ellipse(295.5, 199, 3, 3);
    ellipse(295.5, 201, 3, 3);
    //}face  
    
    
    
    popMatrix();
    
    
};    

//draw loop
draw = function() {

background(116, 116, 116);
for(var i = 25; i <400; i +=50) {
    
        noStroke();
        fill(255, 255, 255);
        rect(i, 200, 24, 400);
        fill(173, 173, 173);
        rectMode(CENTER);
        rect(i, 200, 20, 400);
        
    
    
       
}    

boromir();

//word bubble
strokeWeight(2);
stroke(0, 0, 0);
fill(255, 255, 255);
fill(255, 255, 255);
rectMode(CENTER);
rect(200,100, 300, 150, 50);
triangle(100, 175, 125, 175, 140, 200);
noStroke();
triangle(99, 174, 124, 174, 140, 200);
fill(255, 255, 255);
textSize(20);


textAlign(CENTER);
if(page < 11) {
text("next >", 350, 205);
}
if(page > 1) {
text("< back", 50, 205);
}
if(mouseX > 20 && mouseX < 80 && mouseY >190 && mouseY < 210 && page > 1) {
    noFill();   
    strokeWeight(2);
    stroke(255, 0, 0);
    rect(50, 200, 60, 20);
}    
    
if(mouseX > 320 && mouseX < 380 && mouseY >190 && mouseY < 210 && page < 11) {
    noFill();   
    strokeWeight(2);
    stroke(255, 0, 0);
    rect(350, 200, 60, 20);
}      



    mouseClicked = function() {
                
                
                
                
                if(mouseX > 20 && mouseX < 80 && mouseY >190 && mouseY < 210 && page > 1) {
                    page --;   
                }    
                if(mouseX > 320 && mouseX < 380 && mouseY >190 && mouseY < 210&& page < 11) {
                    page ++;  
                } 
                
                
                
                playSound(getSound("rpg/battle-swing"));
                
            }; 
            
    switch(page) {
        case 1: 
            
            textSize(30);
            fill(0, 0, 0);
            textAlign(CORNER, TOP);
            text("One does not simply\nwalk into Mordor.",  70, 40);   
                
               
            
        break;    
        
        case 2:
            textAlign(CORNER, TOP);
            textSize(30);
            fill(0, 0, 0);
            text("One does not simply\nstop eating salsa\nand chips.", 70, 40);
            
            
            
            
        break;    
        
        
        
        case 3:
            textAlign(CORNER, TOP);
            textSize(30);
            fill(0, 0, 0);
            text("One does not simply\nrock into Mordor!!!", 70, 40);
             imageMode(CENTER);
             
             
            //glasses 
            noStroke();
            fill(255, 255, 255);
            rect(200, 243, 60, 5);
            
            
            
            pushMatrix();
                translate(190, 245);
                noStroke();
                fill(255, 0, 0);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                ellipse(0, 0, 10, 10);
            popMatrix();
            
            pushMatrix();
                
                translate(210, 245);
                noStroke();
                fill(0, 0, 0);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                triangle(0, -10, -5, -2, 5, -2);
                rotate(73);
                ellipse(0, 0, 10, 10);
                
            popMatrix();
            
           
            
            //electric guitar
            pushMatrix();
                translate(200, 400);
                rotate(-35);
                
                fill(255, 0, 0);
                noStroke();
                rect(0, -50, 60, 100, 10);
                
                
                triangle(0, -100, 30, -80, 40, -130);
                 triangle(0, -100, -30, -80, -60, -160);
                triangle(-30, -20, -50, 50, -20, 0);
                triangle(-20, -20, 70, 50, 25, -30);
                
                fill(255, 255, 255);
                rect(0, -120, 10, 120);
                rect(0, -40, 20, 20);
                fill(255, 0, 0);
                
                rect(0, -180, 15, 25);
                
                
                
                fill(0, 0, 0);
                ellipse(0, -60, 25, 25);
                
                
                for(var i = -5; i < 5; i +=2) {
                    rect(i, -110, 1, 160);
                    
                }    
                
                
                
            popMatrix();
            
        break; 
        
        
        case 4:
            textAlign(CORNER, TOP);
            fill(0, 0, 0);
            textSize(30);
            text("One does not simply\nget votes.", 70, 40);
            
        break; 
        
        case 5:
            textAlign(CORNER, TOP);
            fill(0, 0, 0);
            textSize(30);
            text("One does not simply\nfold a fitted sheet.", 70, 40);
            
        break; 
        
        case 6:
            textAlign(CORNER, TOP);
            fill(0, 0, 0);
            textSize(30);
            text("One does not simply\nstop coding.", 70, 40);
            
        break; 
        
        case 7:
            textAlign(CORNER, TOP);
            fill(0, 0, 0);
            textSize(25);
            text("One does not simply not\ntry to steal the ring\nfrom Frodo.", 70, 40);
            
        break;
        
         case 8:
            textAlign(CORNER, TOP);
            fill(0, 0, 0);
            textSize(25);
            text("One does not simply\n make a 'one does not\nsimply' meme.", 70, 40);
            
        break;
        
        case 9:
            textAlign(CORNER, TOP);
            fill(0, 0, 0);
            textSize(25);
            text("One does not simply\nnot argue with the\nCouncil of Elrond", 70, 40);
            
        break;
        
        case 10:
            background(116, 116, 116);
for(var i = 25; i <400; i +=50) {
    
        noStroke();
        fill(255, 255, 255);
        rect(i, 200, 24, 400);
        fill(0, 0, 0);
        rectMode(CENTER);
        rect(i, 200, 20, 400);
        
    
    
       
}    



//word bubble
strokeWeight(2);
stroke(0, 0, 0);
fill(255, 255, 255);
fill(255, 255, 255);
rectMode(CENTER);
rect(200,100, 300, 150, 50);
triangle(100, 175, 125, 175, 140, 200);
noStroke();
triangle(99, 174, 124, 174, 140, 200);
fill(255, 255, 255);
textSize(20);


textAlign(CENTER);
if(page < 11) {
text("next >", 350, 205);
}
if(page > 1) {
text("< back", 50, 205);
}
if(mouseX > 20 && mouseX < 80 && mouseY >190 && mouseY < 210 && page > 1) {
    noFill();   
    strokeWeight(2);
    stroke(255, 0, 0);
    rect(50, 200, 60, 20);
}    
    
if(mouseX > 320 && mouseX < 380 && mouseY >190 && mouseY < 210 && page < 11) {
    noFill();   
    strokeWeight(2);
    stroke(255, 0, 0);
    rect(350, 200, 60, 20);
}      
    pushMatrix();
    scale(1);
    Frodo();
    popMatrix();
        
            textAlign(CORNER, TOP);
            fill(0, 0, 0);
            textSize(25);
            text("One does not Simply\nThrow the Ring into\nMount Doom.", 70, 40);
        
        break;
        
        case 11:
            textAlign(CORNER, TOP);
            fill(0, 0, 0);
            textSize(25);
            text("Let me know if you\nhave any more ideas!", 70, 40);
            
        break;
        
    }    
    
        
        
        
        



};
