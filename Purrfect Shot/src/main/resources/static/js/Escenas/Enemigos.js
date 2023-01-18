class Enemigos extends Phaser.Scene{
    constructor(){
        super({key:'Enemigos'})
    }

	init(data){
		this.Config = data;
	}
	
    preload(){
    }
    
    create(){
     
        this.add.image(540, 375, 'FondoEnemigos')
        .setScale(1.1),
        
         this.boton1 = this.add.image(550,690, 'botOpciones')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena())
        .on('pointerover',()=>this.enterButtonHoverState())
        .on('pointerout', () => this.enterButtonRestState()),
        
             this.Atras = this.add.bitmapText(450, 660, 'Letra',"Continuar", 50,1);
    
    
}
    pasarEscena() {
        this.scene.start('Residentes', this.Config);
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