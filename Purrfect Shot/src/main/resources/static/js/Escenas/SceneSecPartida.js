class SceneSecPartida extends Phaser.Scene {
	constructor() {
		super({ key: "SceneSecPartida" });

	}

	init(data) {
		this.Config = data;
		console.log(this.Config);
	}

	preload() {
		
	}


	create() {

		this.config = this.add.image(0, 0, 'Logo');
		this.config.setDataEnabled();

		this.fondo1 = this.add.image(540, 375, 'Fondo1');
		this.botSupI = this.add.image(425, 380, 'BotSupI');
		this.botSupD = this.add.image(650, 380, 'BotSupD');
		this.botRondas = this.add.image(540, 515, 'BotRondas');
		this.botMapas = this.add.image(540, 595, 'BotMapas');
		this.logo = this.add.image(540, 130, 'Logo').setScale(0.17);
		this.logo.rotation += -0.15;

		//Botones
		this.boton1 = this.add.image(425, 380, 'BotSupI')
			.setInteractive()
			.on('pointerdown', () => this.updateCharacter1())
			.on('pointerover', () => this.enterButtonHoverState1())
			.on('pointerout', () => this.enterButtonRestState1());

		this.boton2 = this.add.image(650, 380, 'BotSupD')
			.setInteractive()
			.on('pointerdown', () => this.updateCharacter2())
			.on('pointerover', () => this.enterButtonHoverState2())
			.on('pointerout', () => this.enterButtonRestState2());

		this.botonD1 = this.add.image(710, 515, 'BalaD')
			.setInteractive()
			.on('pointerdown', () => this.cambioRondas(this.Config.Rondas+1))
			.on('pointerover', () => this.enterButtonHoverState5())
			.on('pointerout', () => this.enterButtonRestState5());

		this.botonI1 = this.add.image(370, 515, 'BalaI')
			.setInteractive()
			.on('pointerdown', () => this.cambioRondas(this.Config.Rondas-1))
			.on('pointerover', () => this.enterButtonHoverState6())
			.on('pointerout', () => this.enterButtonRestState6());

		this.botonD2 = this.add.image(735, 595, 'BalaD')
			.setInteractive()
			.on('pointerdown', () => this.cambioMapa(this.Config.Escenario+1))
			.on('pointerover', () => this.enterButtonHoverState3())
			.on('pointerout', () => this.enterButtonRestState3());

		this.botonI2 = this.add.image(345, 595, 'BalaI')
			.setInteractive()
			.on('pointerdown', () => this.cambioMapa(this.Config.Escenario-1))
			.on('pointerover', () => this.enterButtonHoverState4())
			.on('pointerout', () => this.enterButtonRestState4());

		this.botonAtras = this.add.image(450, 670, 'BotAtras')
			.setInteractive()
			.on('pointerdown', () => this.atras())
			.on('pointerover', () => this.enterButtonHoverState7())
			.on('pointerout', () => this.enterButtonRestState7());

		this.botonJugar = this.add.image(620, 675, 'BotJugar')
			.setInteractive()
			.on('pointerdown', () => this.jugar())
			.on('pointerover', () => this.enterButtonHoverState8())
			.on('pointerout', () => this.enterButtonRestState8());

		
		this.Atras = this.add.bitmapText(395, 655, 'Letra', "Volver", 38, 1);
		this.Jugar = this.add.bitmapText(570, 655, 'Letra', "Jugar", 40, 1);		
		
		this.Mapa=this.add.bitmapText(425,573,'Letra','Mapa: Granero',40,1);
		this.Rondas=this.add.bitmapText(460,493,'Letra','Rondas: 1',40,1);
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

		//Gato Activo J1
		var skin1;
		if (this.Config.Gato1 == 1) //Gato blanco
            skin1 = 'Gato1';
        else if (this.Config.Gato1 == 2) //Gato tricolor
            skin1 = 'Gato2';
        else if (this.Config.Gato1 == 3) //Gato tricolor
            skin1 = 'Gato3';
        else if (this.Config.Gato1 == 4)
            skin1 = 'Gato4';
        else {
            skin1 = 'Gato1';
        }
        this.gato1 = this.add.image(425, 380, skin1).setScale(0.45);
				
		//Gato Activo J2
		var skin2;
		if (this.Config.Gato2 == 1) //Gato blanco
            skin2 = 'Gato1';
        else if (this.Config.Gato2 == 2) //Gato tricolor
            skin2 = 'Gato2';
        else if (this.Config.Gato2 == 3) //Gato tricolor
            skin2 = 'Gato3';
        else if (this.Config.Gato2 == 4)
            skin2 = 'Gato4';
        else {
            skin2 = 'Gato2';
        }
        this.gato2 = this.add.image(650, 380, skin2).setScale(0.45);
		
		//Sombrero Activo J1
		var hat1;
        if(this.Config.Sombrero1 == 1) //Gato blanco
            hat1 = 'Sombrero1';
        else if(this.Config.Sombrero1 == 2) //Gato tricolor
            hat1 = 'Sombrero2';
        else if(this.Config.Sombrero1 == 3) //Gato tricolor
            hat1 = 'Sombrero3';
        else if(this.Config.Sombrero1 == 4)
            hat1 = 'Sombrero4';
            
        if(this.Config.Sombrero1 != 0)
        	this.sombrero1=this.add.image(425,381.5, hat1).setScale(0.45);
        
		//Sombrero Activo J2
		var hat2;
        if(this.Config.Sombrero2 == 1) //Gato blanco
            hat2 = 'Sombrero1';
        else if(this.Config.Sombrero2 == 2) //Gato tricolor
            hat2 = 'Sombrero2';
        else if(this.Config.Sombrero2 == 3) //Gato tricolor
            hat2 = 'Sombrero3';
        else if(this.Config.Sombrero2 == 4)
            hat2 = 'Sombrero4';
            
        if(this.Config.Sombrero2 != 0)
        	this.sombrero2=this.add.image(652,381.5, hat2).setScale(0.45);
        	
		//Pa�uelo Activo J1
		var scarf1;		
        if(this.Config.Panuelo1 == 1) //Gato blanco
            scarf1 = 'Panuelo1';
        else if(this.Config.Panuelo1 == 2) //Gato tricolor
            scarf1 = 'Panuelo2';
        else if(this.Config.Panuelo1 == 3) //Gato tricolor
            scarf1 = 'Panuelo3';
        else if(this.Config.Panuelo1 == 4)
            scarf1 = 'Panuelo4';
            
       if(this.Config.Panuelo1 != 0)
       		this.panuelo1=this.add.image(425,380 ,scarf1).setScale(0.45);
            
		//Pa�uelo Activo J2
		var scarf2;		
        if(this.Config.Panuelo2 == 1) //Gato blanco
            scarf2 = 'Panuelo1';
        else if(this.Config.Panuelo2 == 2) //Gato tricolor
            scarf2 = 'Panuelo2';
        else if(this.Config.Panuelo2 == 3) //Gato tricolor
            scarf2 = 'Panuelo3';
        else if(this.Config.Panuelo2 == 4)
            scarf2 = 'Panuelo4';
            
       if(this.Config.Panuelo2 != 0)
       		this.panuelo2=this.add.image(650,380 ,scarf2).setScale(0.5);
		
	}
	
	//GATOS//
	updateCharacter1() {
		this.scene.start('ScenePersonalizacion');
	}

	enterButtonHoverState1() {
		this.boton1.setScale(1.1);
		this.gato1.setScale(0.5);
		this.sombrero1.setScale(0.5);
		this.panuelo1.setScale(0.5);
		
	}

	enterButtonRestState1() {
		this.boton1.setScale(1);
		this.gato1.setScale(0.45);
		this.sombrero1.setScale(0.45);
		this.panuelo1.setScale(0.45);
	}

	updateCharacter2() {
		this.scene.start('ScenePersonalizacion');
	}

	enterButtonHoverState2() {
		this.boton2.setScale(1.1);
		this.gato2.setScale(0.5);
		this.sombrero2.setScale(0.5);
		this.panuelo2.setScale(0.5);
	}

	enterButtonRestState2() {
		this.boton2.setScale(1);
		this.gato2.setScale(0.45);
		this.sombrero2.setScale(0.45);
		this.panuelo2.setScale(0.45);

	}
	//MAPAS//
	cambioMapa(num){
		//Nos llega el numero del mapa que cambiar
		if(num==0){ //Si es 0 sabemos que es el anterior al primer mapa, es decir el ultimo
			num=4;
		}
		else if(num==5){ //Si es 4 sabemos que es el siguiente al ultimo mapaz, es decir, el primero
			num=1;
		}
		
		if(num==1){
			this.Mapa.setText('Mapa: Granero');
		}
		else if(num==2){
			this.Mapa.setText('Mapa: Desierto')
		}
		else if(num==3){
			this.Mapa.setText('Mapa: Pueblo');
		}
		else if(num==4){
			this.Mapa.setText('Mapa:Aleatorio');
		}
		
		this.Config.Escenario=num;
	}
	
	enterButtonHoverState3() {
		this.botonD2.setScale(1.1);
		this.botonI2.setScale(1.1);
		this.botMapas.setScale(1.05);
		this.Mapa.setScale(1.05);
	}

	enterButtonRestState3() {
		this.botonD2.setScale(1);
		this.botonI2.setScale(1);
		this.botMapas.setScale(1);
		this.Mapa.setScale(1);
	}

	
	enterButtonHoverState4() {
		this.botonI2.setScale(1.1);
		this.botonD2.setScale(1.1);
		this.botMapas.setScale(1.05);
		this.Mapa.setScale(1.05);
	}

	enterButtonRestState4() {
		this.botonI2.setScale(1);
		this.botonD2.setScale(1);
		this.botMapas.setScale(1);
		this.Mapa.setScale(1);
	}

	//RONDAS//
	cambioRondas(num){
		//Nos llega el numero de rondas a jugar
		if(num==0){ //Si es 0 sabemos que es el anterior a las minimas rondas, es decir las maximas
			num=3;
		}
		else if(num==4){ //Si es 4 sabemos que es el siguiente al maximo de rondas, es decir el minimo
			num=1;
		}
		
		if(num==1){
			this.Rondas.setText('Rondas: 1');
		}
		else if(num==2){
			this.Rondas.setText('Rondas: 2')
		}
		else if(num==3){
			this.Rondas.setText('Rondas: 3');
		}
		
		this.Config.Rondas=num;
	}
	//Boton derecho
	
	enterButtonHoverState5() {
		this.botonI1.setScale(1.1);
		this.botonD1.setScale(1.1);
		this.botRondas.setScale(1.05);
		this.Rondas.setScale(1.05);
	}

	enterButtonRestState5() {
		this.botonI1.setScale(1);
		this.botonD1.setScale(1);
		this.botRondas.setScale(1);
		this.Rondas.setScale(1);
	}
	
	enterButtonHoverState6() {
		this.botonI1.setScale(1.1);
		this.botonD1.setScale(1.1);
		this.botRondas.setScale(1.05);
		this.Rondas.setScale(1.05);
	}

	enterButtonRestState6() {
		this.botonI1.setScale(1);
		this.botonD1.setScale(1);
		this.botRondas.setScale(1);
		this.Rondas.setScale(1);
	}
	//
	//ATRAS//
	atras() {
		//Cambio de escena
		this.scene.start('SceneConf');
	}
	enterButtonHoverState7() {
		this.botonAtras.setScale(1.1);
		this.Atras.setScale(1.05);
	}

	enterButtonRestState7() {
		this.botonAtras.setScale(1);
		this.Atras.setScale(1);
	}

	//OPCIONES//
	jugar() {
		//Cambio de escena
		if(this.Config.Escenario == 4){
			var num = Phaser.Math.Between(1, 3);
			this.Config.Escenario = num;
		}
		
		this.scene.start('PantallaVS', this.Config);
	}
	enterButtonHoverState8() {
		this.botonJugar.setScale(1.1);
		this.Jugar.setScale(1.05);
	}

	enterButtonRestState8() {
		this.botonJugar.setScale(1);
		this.Jugar.setScale(1);
	}

	update(delta) {
	}
}