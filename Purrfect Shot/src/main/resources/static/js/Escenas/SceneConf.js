class SceneConf extends Phaser.Scene {
	constructor() {
		super({ key: "SceneConf" });

	}

	init(data) {
		this.Config = data;
		console.log(this.Config);
	}

	preload() {
		
	}


	create() {
		this.fondo1 = this.add.image(540, 375, 'Fondo1');
		
		this.logo = this.add.image(540, 130, 'Logo').setScale(0.17);
		this.logo.rotation += -0.15;

		//Botones
		this.boton1 = this.add.image(425, 480, 'BotSupI')
			.setInteractive()
			.on('pointerdown', () => this.pasarLocal())
			.on('pointerover', () => this.enterButtonHoverState1())
			.on('pointerout', () => this.enterButtonRestState1());

		this.boton2 = this.add.image(650, 480, 'BotSupD')
			.setInteractive()
			.on('pointerdown', () => this.pasarRed())
			.on('pointerover', () => this.enterButtonHoverState2())
			.on('pointerout', () => this.enterButtonRestState2());


		this.botonAtras = this.add.image(540, 670, 'BotJugar')
			.setInteractive()
			.on('pointerdown', () => this.atras())
			.on('pointerover', () => this.enterButtonHoverState7())
			.on('pointerout', () => this.enterButtonRestState7());

		this.Atras = this.add.bitmapText(490, 655, 'Letra', "Volver", 38, 1);	
		this.local = this.add.bitmapText(355, 450, 'Letra', "LOCAL", 60, 1);
		this.red = this.add.bitmapText(610, 450, 'Letra', "RED", 60, 1);
		
		this.Config.Escenario=1;
		this.Config.Rondas=1;
		this.Config.totalScoreJ1=0;
		this.Config.totalScoreJ2=0;
		this.Config.totalBulletsJ1=0;
		this.Config.totalBulletsJ2=0;
		this.Config.totalEnemiesJ1=0;
		this.Config.totalEnemiesJ2=0;
		this.Config.totalAlliesJ1=0;
		this.Config.totalAlliesJ2=0;
		this.Config.totalPowerJ1=0;
		this.Config.totalPowerJ2=0;
		
		
		var texto = this.add.bitmapText(540,300,'Letra','Indique su nombre:',30,1).setOrigin(0.5);
		var element = this.add.dom(540,350).createFromCache('form3');
		element.addListener('click');
		element.on('click', function(event){
			if(event.target.name=='changeUser'){
				var inputUsername=this.getChildByName("name");
				
				if(inputUsername.value !== ''){
					user=inputUsername.value;
					connectedUser.user = user;
					updateUser(connectedUser);
				}	
			}
			
		});
		
	}	
	
	pasarLocal() {
		this.Config.mode = 'Local';
		this.scene.start('SceneSecPartida', this.Config);
	}

	enterButtonHoverState1() {
		this.boton1.setScale(1.1);
		this.local.setScale(1.05);
		
	}

	enterButtonRestState1() {
		this.boton1.setScale(1);
		this.local.setScale(1);
		
	}

	pasarRed() {
		openWS();
		this.Config.mode = 'Online';
		this.scene.start('SceneSecPartidaWS', this.Config);
	}

	enterButtonHoverState2() {
		this.boton2.setScale(1.1);
		this.red.setScale(1.05);
	}

	enterButtonRestState2() {
		this.boton2.setScale(1);
		this.red.setScale(1);

	}
	
	//
	//ATRAS//
	atras() {
		//Cambio de escena
		this.scene.start('PantallaInicio', this.Config);
	}
	enterButtonHoverState7() {
		this.botonAtras.setScale(1.1);
		this.Atras.setScale(1.05);
	}

	enterButtonRestState7() {
		this.botonAtras.setScale(1);
		this.Atras.setScale(1);
	}


	update(delta) {
	}
}
