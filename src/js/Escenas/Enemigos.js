class Enemigos extends Phaser.Scene{
    constructor(){
        super({key:'Enemigos'})
    }

    preload(){
        this.load.image('FondoDesierto', 'assets/Fondos/desiertodia.png'),
            
        this.load.image('FondoEnemigos', 'assets/Menus/MenusJuego/personalizacion.png'),
            
        this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png'),
        
        this.load.image('M1', 'assets/Personajes/Malo 1.png'),
            
        this.load.image('M2','assets/Personajes/Malo 2.png'),
            
        this.load.image('M3','assets/Personajes/Malo 3.png'),
            
        this.load.image('M4','assets/Personajes/Malo 4.png');
            
        this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
}
    create(){
        
        this.add.image(540, 375, 'FondoDesierto'),
        
        this.add.image(540, 375, 'FondoEnemigos')
        .setScale(1.1),
            
       
        
        this.Creditos = this.add.bitmapText(300, 80, 'Letra',"DESHAZTE DE LOS ENEMIGOS", 50,1),
            
        this.add.image(300, 290, 'M1')
        .setScale(0.8),
        this.add.image(800, 300, 'M2')
        .setScale(0.9),
        this.add.image(400, 540, 'M3')
        .setScale(0.25),
        this.add.image(700, 530, 'M4')
                .setScale(0.25),

            this.Creditos = this.add.bitmapText(440, 300, 'Letra',"+5", 40,1);

            this.Creditos = this.add.bitmapText(870, 340,'Letra', "+10", 40,1);

             this.Creditos = this.add.bitmapText(490, 540, 'Letra', "+20", 40,1);

            this.Creditos = this.add.bitmapText(800, 540,'Letra', "+50", 40,1);
        
         this.boton1 = this.add.image(550,690, 'botOpciones')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena())
        .on('pointerover',()=>this.enterButtonHoverState())
        .on('pointerout', () => this.enterButtonRestState()),
        
             this.Atras = this.add.bitmapText(450, 660, 'Letra',"Continuar", 50,1);
    
    
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