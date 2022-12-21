class Creditos extends Phaser.Scene{
    constructor(){
        super({key:'Creditos'})
    }

    preload(){
            
        this.load.image('creditos', 'assets/Menus/MenusJuego/creditos.png');
        this.load.image('rickRoll', 'assets/Menus/MenusJuego/creditos.png');
        this.load.image('easter', 'assets/Menus/MenusJuego/balaDer.png');
        this.load.spritesheet('rick', 'assets/Menus/MenusJuego/rickRoll.png', {frameWidth: 270, frameHeight: 282});
        this.load.audio('rickMusic', ['assets/sounds/rickMusic.ogg', 'assets/sounds/rickMusic.mp3']);
    
}
    create(){
        this.add.image(540, 375, 'creditos'),

        this.boton1 = this.add.image(550, 670, 'botOpciones')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena())
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState());
            
        this.boton2 = this.add.image(193, 627, 'easter')
            .setInteractive()
            .on('pointerover', () => this.enterButtonHoverState2())
            .on('pointerout', () => this.enterButtonRestState2());
        
        this.Atras = this.add.bitmapText(550, 670, 'Letra', "Atrás", 40,1).setOrigin(0.5);
        
        this.anims.create({
            key: 'rickAnimation',
            frames: this.anims.generateFrameNumbers('rick', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        });
        
        //this.miSprite = this.add.sprite(540, 340, 'rickRoll');
        //this.miSprite.anims.play('rickAnimation');

    
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
    
    
    enterButtonHoverState2(){
		this.rickMusic = this.sound.add('rickMusic', { volume: 1 });
		this.rickMusic.play();
		this.miSprite = this.add.sprite(540, 340, 'rickRoll');
        this.miSprite.anims.play('rickAnimation');
    }
    
    enterButtonRestState2(){
		this.rickMusic.pause();
        this.miSprite.visible=false;
    }
 
    update(){
    
}
}