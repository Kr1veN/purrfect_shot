class Enemigos extends Phaser.Scene{
    constructor(){
        super({key:'Enemigos'})
    }

    preload(){
        this.load.image('FondoEnemigos', 'assets/Menus/MenusJuego/enemigos.png');
}
    create(){
        
        this.add.image(540, 375, 'FondoEnemigos');
            
         this.boton1 = this.add.image(550,690, 'botOpciones')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena())
        .on('pointerover',()=>this.enterButtonHoverState())
        .on('pointerout', () => this.enterButtonRestState()),
        
             this.Atras = this.add.bitmapText(440, 665, 'Letra',"Continuar", 50,1);
    
    
}
    pasarEscena() {
        this.scene.start('Residentes');
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