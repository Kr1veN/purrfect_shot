class Tutorial extends Phaser.Scene{
    constructor(){
        super({key:'Tutorial'})
    }

    preload(){
        this.load.image('FondoDesierto', 'assets/Fondos/desiertodia.png'),
            
        this.load.image('FondoControles', 'assets/Menus/MenusJuego/personalizacion.png'),
            
        this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png'),
            
        this.load.image('mover1','assets/Controles/Jugador1Mover.png'),
            
        this.load.image('recoger1','assets/Controles/Jugador1Recoger.png'),
            
        this.load.image('disparar1','assets/Controles/Jugador1Disparar.png'),
		
		this.load.image('mover2','assets/Controles/Jugador2Mover.png'),
            
        this.load.image('recoger2','assets/Controles/Jugador2Recoger.png'),
            
        this.load.image('disparar2','assets/Controles/Jugador2Disparar.png'),
			
		this.load.image('PU1','assets/Menus/MenusJuego/inGame/PU1.png'),
            
        this.load.image('PU2','assets/Menus/MenusJuego/inGame/PU2.png'),
            
        this.load.image('PU3','assets/Menus/MenusJuego/inGame/PU3.png');
            
        this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
}
    create(){
        
        this.add.image(540, 375, 'FondoDesierto'),

            this.add.image(540, 375, 'FondoControles')
                .setScale(1.1),

            this.add.image(390, 365, 'disparar1')
                .setScale(0.15),

            this.add.image(390, 275, 'mover1')
                .setScale(0.15),

            this.add.image(390, 445, 'recoger1')
                .setScale(0.15),

            this.add.image(800, 365, 'disparar2')
                .setScale(0.15),

            this.add.image(800, 275, 'mover2')
                .setScale(0.15),

            this.add.image(800, 445, 'recoger2')
                .setScale(0.15),

            this.add.image(500, 580, 'PU1')
                

            this.add.image(540, 580, 'PU2')
                

            this.add.image(580, 580, 'PU3')
                

            this.Creditos = this.add.bitmapText(540, 80, 'Letra', "CONTROLES ", 60, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(340, 150, 'Letra', "Jugador 1", 40, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(720, 150, 'Letra', "Jugador 2", 40, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(230, 225, 'Letra', "Moverse", 40, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(610, 225, 'Letra', "Moverse", 40, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(230, 350, 'Letra', "Disparar", 40, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(610, 350, 'Letra', "Disparar", 40, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(230, 430, 'Letra', "Recoger", 40, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(610, 430, 'Letra', "Recoger", 40, 1).setOrigin(0.5);

        this.Creditos = this.add.bitmapText(540, 515, 'Letra', "POWER-UP ", 60, 1).setOrigin(0.5);
			
         this.boton1 = this.add.image(550,690,  'botOpciones')
             .setInteractive()
             .on('pointerdown', () => this.pasarEscena())
        .on('pointerover',()=>this.enterButtonHoverState())
        .on('pointerout', () => this.enterButtonRestState());
		
        this.Atras = this.add.bitmapText(550, 685, 'Letra',"Continuar", 50,1).setOrigin(0.5);
    
}
    pasarEscena() {
        this.scene.start('Enemigos');
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