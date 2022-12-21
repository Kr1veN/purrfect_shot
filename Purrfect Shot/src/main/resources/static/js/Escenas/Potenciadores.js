class Potenciadores extends Phaser.Scene{
    constructor(){
        super({key:'Potenciadores'})
    }

    preload(){
            
        this.load.image('potenciadores', 'assets/Menus/MenusJuego/potenciadores.png');
            
        this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png');
            
        //this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
}
    create(){
        
        this.add.image(540, 375, 'potenciadores');
            
         this.boton1 = this.add.image(550,690, 'botOpciones')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena())
            .on('pointerover',()=>this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState());
        
            this.Atras = this.add.bitmapText(390, 665, 'Letra', "Menú Principal", 50, 1);
    
}
    pasarEscena() {
        this.scene.start('PantallaInicio');
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