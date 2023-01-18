class menuOpciones extends Phaser.Scene{
    constructor(){
        super({key:'menuOpciones'})
    }

    preload(){
        this.load.image('menuOp', 'assets/ImagenesGame/Menus/Opciones/opciones.png');
	}
    create(){
        this.add.image(540, 375, 'PantallaInicio');
        this.add.image(540, 375, 'menuOp');
            
        this.botonOpciones = this.add.image(550,690, 'botOpciones')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena())
            .on('pointerover', ()=>this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState()),
        
             this.Opciones = this.add.bitmapText(490, 665, 'Letra',"Atrás", 50,1);
    
    
    }
    
    pasarEscena() {
        this.scene.start('PantallaInicio');
    }
    enterButtonHoverState(){
        this.botonOpciones.setScale(1.1);
    }
    
    enterButtonRestState(){
        this.botonOpciones.setScale(1);
    }
    
    update(){}
}