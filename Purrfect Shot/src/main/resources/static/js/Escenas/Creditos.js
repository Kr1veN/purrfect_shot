class Creditos extends Phaser.Scene{
    constructor(){
        super({key:'Creditos'})
    }

	init(data){
		this.Config = data;
	}
	
    preload(){    
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
        
        this.Atras = this.add.bitmapText(550, 670, 'Letra', "Volver", 40,1).setOrigin(0.5);
        
        this.anims.create({
            key: 'rickAnimation',
            frames: this.anims.generateFrameNumbers('rick', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        });
	}
	
    pasarEscena() {
        this.scene.start('PantallaInicio', this.Config);
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