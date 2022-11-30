class PantallaInicio extends Phaser.Scene{
    constructor(){
        super({key:'PantallaInicio'})
    }

    preload(){
        this.load.image('PantallaInicio', 'assets/Menus/MenusJuego/Pantalla Titulo/pantallainicio.png');

            this.load.image('Boton1', 'assets/Menus/MenusJuego/Pantalla Titulo/iniciobot1.png');
        
        this.load.image('Boton2', 'assets/Menus/MenusJuego/Pantalla Titulo/iniciobot2.png');
    
        this.load.image('Boton3', 'assets/Menus/MenusJuego/Pantalla Titulo/iniciobot3.png');
        this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
        this.load.audio('Ambiente', ['assets/sounds/Ambiente.ogg', 'assets/sounds/Ambiente.mp3']);
}
    create() {
        this.ambiente = this.sound.add('Ambiente', { volume: 0.2 });
        this.ambiente.stop();
        this.ambiente.play();
        
        this.add.image(540, 375, 'PantallaInicio');
            
        this.boton1 = this.add.image(540, 440, 'Boton1')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena1())
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState());
        
            
        this.boton2 = this.add.image(540, 520, 'Boton2')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena2())
            .on('pointerover', () => this.enterButtonHoverState2())
            .on('pointerout', () => this.enterButtonRestState2())
            .setScale(1.05);
        
        
        this.boton3 = this.add.image(540, 600, 'Boton2')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena3())
            .on('pointerover', () => this.enterButtonHoverState3())
            .on('pointerout', () => this.enterButtonRestState3())
            .setScale(1.05);
        
        
        this.Aceptar = this.add.bitmapText(540, 445, 'Letra', "Jugar", 45,1).setOrigin(0.5);
     
        this.Atras = this.add.bitmapText(540, 520, 'Letra', "Controles", 35, 1).setOrigin(0.5);
     
        this.Resultados = this.add.bitmapText(540, 600, 'Letra', "Créditos", 35, 1).setOrigin(0.5);
    
}
    pasarEscena1() {
        this.scene.start('SceneSecPartida');
    }
    pasarEscena2() {
        this.scene.start('Tutorial');
        this.ambiente.stop();
    }
    pasarEscena3() {
        this.scene.start('Creditos');
        this.ambiente.stop();
    }
enterButtonHoverState(){
this.boton1.setScale(1.1);
}
    
enterButtonRestState(){
this.boton1.setScale(1);
}
    enterButtonHoverState2(){
this.boton2.setScale(1.1);
}
    
enterButtonRestState2(){
this.boton2.setScale(1);
}
    enterButtonHoverState3(){
this.boton3.setScale(1.1);
}
    
    enterButtonRestState3(){
    this.boton3.setScale(1);
    }
    update(){
    }
}