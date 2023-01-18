class PantallaVS extends Phaser.Scene{
    constructor(){
        super({key:'PantallaVS'})
    }
    
    init(data) {
        this.Config = data;
        console.log(this.Config);
    }

    preload(){
    }
    	
    create(){
        
        this.add.image(540, 375, 'FondoDesiertoDia');
        
        this.add.image(540, 375, 'FondoVS');
        
        this.Jugador1 = this.add.bitmapText(250, 460, 'Letra', NombreJ1, 30, 1).setOrigin(0.5).setTint(0x000000);
     	this.Jugador2 = this.add.bitmapText(845, 460, 'Letra', NombreJ2, 30, 1).setOrigin(0.5).setTint(0x000000);
     	
        this.globalClock = this.time.delayedCall(3000, this.next, [], this); 
        
        this.shooter1 = this.add.group();
        // skin jugador 1º
        var skin1;
        if (this.Config.Gato1 == 1) //Gato blanco
        	skin1 = 'Gato1';
        else if (this.Config.Gato1 == 2) //Gato tricolor
         	skin1 = 'Gato2';
        else if (this.Config.Gato1 == 3) //Gato tricolor
         	skin1 = 'Gato3';
        else if (this.Config.Gato1 == 4)
         	skin1 = 'Gato4';
        else {
         	skin1 = 'Gato1';
        }
        
        this.shooter1.add(this.add.image(250, 330, skin1).setScale(0.8));
        
        // sombrero jugador 1
        var hat1;
        if (this.Config.Sombrero1 == 1) //Gato blanco
         	hat1 = 'Sombrero1';
        else if (this.Config.Sombrero1 == 2) //Gato tricolor
         	hat1 = 'Sombrero2';
        else if (this.Config.Sombrero1 == 3) //Gato tricolor
         	hat1 = 'Sombrero3';
        else if (this.Config.Sombrero1 == 4)
         	hat1 = 'Sombrero4';
        
        if (this.Config.Sombrero1 != 0) //Gato blanco
        	this.shooter1.add(this.add.image(250, 330, hat1).setScale(0.8));
         
         // panuelo jugador 1
         var scarf1;
         if (this.Config.Panuelo1 == 1) //Gato blanco
         	scarf1 = 'Panuelo1';
         else if (this.Config.Panuelo1 == 2) //Gato tricolor
        	scarf1 = 'Panuelo2';
         else if (this.Config.Panuelo1 == 3) //Gato tricolor
         	scarf1 = 'Panuelo3';
         else if (this.Config.Panuelo1 == 4)
         	scarf1 = 'Panuelo4';
         
         if (this.Config.Panuelo1 != 0) //Gato blanco
         	this.shooter1.add(this.add.image(250, 330, scarf1).setScale(0.8));
         
         
         
         this.shooter2 = this.add.group();
         // skin jugador 2
         var skin2;
         if (this.Config.Gato2 == 1) //Gato blanco
         	skin2 = 'Gato1';
         else if (this.Config.Gato2 == 2) //Gato tricolor
         	skin2 = 'Gato2';
         else if (this.Config.Gato2 == 3) //Gato tricolor
         	skin2 = 'Gato3';
         else if (this.Config.Gato2 == 4)
         	skin2 = 'Gato4';
         else
         	skin2 = 'Gato2';
         	
         this.shooter2.add(this.add.image(845, 330, skin2).setFlipX(true).setScale(0.8));
         
         // sombrero jugador 2
         var hat2;
         if (this.Config.Sombrero2 == 1) //marron 
         	hat2 = 'Sombrero1';
         else if (this.Config.Sombrero2 == 2) //beige
         	hat2 = 'Sombrero2';
         else if (this.Config.Sombrero2 == 3) //verde
         	hat2 = 'Sombrero3';
         else if (this.Config.Sombrero2 == 4) //gris
         	hat2 = 'Sombrero4';
         	
         if (this.Config.Sombrero2 != 0) //sin sombrero
         	this.shooter2.add(this.add.image(845, 330, hat2).setFlipX(true).setScale(0.8));
         
         // panuelo jugador 2
         var scarf2;
         if (this.Config.Panuelo2 == 1) //azul
         	scarf2 = 'Panuelo1';
         else if (this.Config.Panuelo2 == 2) //violeta
         	scarf2 = 'Panuelo2';
         else if (this.Config.Panuelo2 == 3) //rojo
         	scarf2 = 'Panuelo3';
         else if (this.Config.Panuelo2 == 4) // verde
         	scarf2 = 'Panuelo4';
         
         if (this.Config.Panuelo2 != 0) //sin panuelo
         	this.shooter1.add(this.add.image(845, 330, scarf2).setFlipX(true).setScale(0.8));
    }
    
    next() {
		if(this.Config.mode == 'Online'){
        	this.scene.start('SceneGameWS', this.Config);
        } else {
			this.scene.start('SceneGame', this.Config);
		}
    }
    
    enterButtonHoverState(){
    	this.boton1.setScale(1.1);
    }  
    
    enterButtonRestState(){
    	this.boton1.setScale(1);
	}

    update(){
		
	}
}
