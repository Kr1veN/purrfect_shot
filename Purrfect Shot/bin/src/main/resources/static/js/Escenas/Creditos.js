class Creditos extends Phaser.Scene{
    constructor(){
        super({key:'Creditos'})
    }

    preload(){
        this.load.image('FondoDesierto', 'assets/Fondos/desiertodia.png'),
            
        this.load.image('FondoNombres', 'assets/Menus/MenusJuego/personalizacion.png'),
            
        this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png');
            
        this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
        
    
}
    create(){
        this.input.setDefaultCursor('src/assets/Puntero.cur, pointer');
        
        this.add.image(540, 375, 'FondoDesierto'),

            this.add.image(540, 375, 'FondoNombres'),

            this.boton1 = this.add.image(550, 670, 'botOpciones')
                .setInteractive()
                .on('pointerdown', () => this.pasarEscena())
                .on('pointerover', () => this.enterButtonHoverState())
                .on('pointerout', () => this.enterButtonRestState()),

            this.Creditos = this.add.bitmapText(540, 130, 'Letra', "CRÉDITOS", 70, 1).setOrigin(0.5);
            
        this.Daniel = this.add.bitmapText(540, 210, 'Letra', "Daniel Borrego Cruz", 40,1).setOrigin(0.5);
     
        this.Alicia = this.add.bitmapText(540, 290, 'Letra', "Alicia Enríquez Martínez", 40,1).setOrigin(0.5);
     
        this.Puri = this.add.bitmapText(540, 370, 'Letra', "Purificación Méndez Peñalver", 40,1).setOrigin(0.5);
        
        this.Andrea = this.add.bitmapText(540, 450, 'Letra', "Andrea Gallardo Lasso ", 40,1).setOrigin(0.5);
        
        this.Gema = this.add.bitmapText(540, 530, 'Letra', "Gema López-Pozuelo", 40, 1).setOrigin(0.5);
        
        this.Atras = this.add.bitmapText(540, 670, 'Letra', "Atrás", 40,1).setOrigin(0.5);

      
    
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