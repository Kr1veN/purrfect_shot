class salonFama extends Phaser.Scene{
    constructor(){
        super({key:'salonFama'})
    }
    
    init(data){
		this.Config = data;
	}

    preload(){
	}
	
	create(){
		this.add.image(540, 375, 'FondoDesierto');
        this.add.image(540,355, 'tablon').setScale(1.05);
        
        this.boton1 = this.add.image(220,690,  'botAtras')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena())
            .on('pointerover',()=>this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState());
		
        this.Atras = this.add.bitmapText(220, 690, 'Letra',"Atrás", 30,1).setOrigin(0.5);
        
        this.salon = this.add.bitmapText(560, 70, 'Letra', "Salón de la Fama", 50, 1).setOrigin(0.5);
        
        this.salon = this.add.bitmapText(430, 180, 'Letra', PhaserRecords.first.user, 70, 1);
        this.salon = this.add.bitmapText(430, 250, 'Letra', "Puntuación: " + PhaserRecords.first.points, 50, 1);
        
        this.salon = this.add.bitmapText(500, 400, 'Letra', PhaserRecords.second.user, 50, 1);
        this.salon = this.add.bitmapText(500, 450, 'Letra', "Puntuación: " + PhaserRecords.second.points, 30, 1);
        
        this.salon = this.add.bitmapText(500, 570, 'Letra', PhaserRecords.third.user, 50, 1);
        this.salon = this.add.bitmapText(500, 620, 'Letra', "Puntuación: " + PhaserRecords.third.points, 30, 1);
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
 
    update(){}
	
}