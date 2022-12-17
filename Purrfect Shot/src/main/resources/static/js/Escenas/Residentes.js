class Residentes extends Phaser.Scene{
    constructor(){
        super({key:'Residentes'})
    }

    preload(){
        this.load.image('FondoDesierto', 'assets/Fondos/desiertodia.png'),
            
        this.load.image('FondoEnemigos', 'assets/Menus/MenusJuego/personalizacion.png'),
            
        this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png'),
        
        this.load.image('B1', 'assets/Personajes/Bueno 1.png'),
            
        this.load.image('B2','assets/Personajes/Bueno 2.png'),
            
        this.load.image('B3','assets/Personajes/Bueno 3.png');
            
        this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
}
    create(){
        
        this.add.image(540, 375, 'FondoDesierto'),
        
        this.add.image(540, 375, 'FondoEnemigos')
        .setScale(1.1),
            
        
        this.Creditos = this.add.bitmapText(300, 80, 'Letra',"PROTEGE A LOS RESIDENTES ", 50,1);
            
        this.Creditos = this.add.bitmapText(360, 130, 'Letra', "Y CONSIGUE REGALOS", 50, 1);
            
        this.add.image(300, 310, 'B1')
        .setScale(0.75),
        this.add.image(800, 320, 'B2')
        .setScale(0.75),
        this.add.image(550, 540, 'B3')
        .setScale(0.25),
        
         this.boton1 = this.add.image(550,690, 'botOpciones')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena())
        .on('pointerover',()=>this.enterButtonHoverState())
        .on('pointerout', () => this.enterButtonRestState()),
        
            this.Atras = this.add.bitmapText(450, 660, 'Letra', "Continuar", 50, 1);

        this.Atras = this.add.bitmapText(430, 355, 'Letra',"-5", 40,1);
        this.Atras = this.add.bitmapText(890, 400, 'Letra',"-10", 40,1);
        this.Atras = this.add.bitmapText(680, 555, 'Letra',"-20", 40,1);
    
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