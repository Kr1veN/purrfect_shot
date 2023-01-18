class PantallaVicDerr extends Phaser.Scene {
	constructor() {
		super({ key: 'PantallaVicDerr' })
	}

	init(data) {
		this.Config = data;
		console.log(this.Config);
	}
	preload() {
	}

	create() {
		this.scene.stop('SceneGameWS');


		this.add.image(540, 375, 'FondoDesierto');

		this.add.image(540, 355, 'PantallaResultados').setScale(1.05);
		

		this.boton1 = this.add.image(540, 670, 'botOpciones')
			.setInteractive()
			.on('pointerdown', () => this.volver())
			.on('pointerover', () => this.enterButtonHoverState())
			.on('pointerout', () => this.enterButtonRestState());

		this.Volver = this.add.bitmapText(540, 670, 'Letra', "Volver a seleccion", 40, 1).setOrigin(0.5);
		this.Resultado = this.add.bitmapText(560, 55, 'Letra', "Resultado", 60, 1).setOrigin(0.5);
		this.Ganador = this.add.bitmapText(200, 200, 'Letra', "Ganador", 30, 1).setOrigin(0.5).setTint(0x95FF00);
		this.Perdedor = this.add.bitmapText(200, 200, 'Letra', "Perdedor", 30, 1).setOrigin(0.5).setTint(0xff0000);
		if (this.Config.totalScoreJ1 > this.Config.totalScoreJ2) {
			this.Ganador.setPosition(350, 200);
			this.Perdedor.setPosition(760, 200);
		} else if (this.Config.totalScoreJ2 > this.Config.totalScoreJ1) {
			this.Ganador.setPosition(760, 200);
			this.Perdedor.setPosition(350, 200);
		} else {
			this.Ganador.setPosition(350, 200).setText('Empate').setTint(0x000000);
			this.Perdedor.setPosition(760, 200).setText('Empate').setTint(0x000000);
		}

		this.Jugador1 = this.add.bitmapText(350, 500, 'Letra', 'Puntos: ' + this.Config.totalScoreJ1 + '\nBalas Disparadas: ' + this.Config.totalBulletsJ1 + '\nEnemigos Derrotados: '
			+ this.Config.totalEnemiesJ1 + '\nAliados Heridos: ' + this.Config.totalAlliesJ1 + '\nPower UPs Recogidos: ' + this.Config.totalPowerJ1, 25, 1).setOrigin(0.5).setTint(0x000000);

		this.Jugador2 = this.add.bitmapText(760, 500, 'Letra', 'Puntos: ' + this.Config.totalScoreJ2 + '\nBalas Disparadas: ' + this.Config.totalBulletsJ2 + '\nEnemigos Derrotados: '
			+ this.Config.totalEnemiesJ2 + '\nAliados Heridos: ' + this.Config.totalAlliesJ2 + '\nPower UPs Recogidos: ' + this.Config.totalPowerJ2, 25, 1).setOrigin(0.5).setTint(0x000000);

		if(this.Config.mode != 'Online'){
			console.log('J1 record: ' + this.compararRecord(this.Config.totalScoreJ1, NombreJ1));
			console.log('J2 record: ' + this.compararRecord(this.Config.totalScoreJ2, NombreJ2));
		}
		else {
			if(idJugador == 1){
				this.compararRecord(this.Config.totalScoreJ1, user);
			}
			if(idJugador == 2){
				this.compararRecord(this.Config.totalScoreJ2, user);
			}
			
		}

		this.shooter1 = this.add.group();
		// skin jugador 1
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

		this.shooter1.add(this.add.image(350, 330, skin1).setFlipX(true).setScale(0.75));

		// sombrero jugador 1
		var hat1;
		if (this.Config.Sombrero1 == 1) //Gato blanco
			hat1 = 'Sombrero1';
		else if (this.Config.Sombrero1 == 2) //Gato tricolor
			hat1 = 'Sombrero2';
		else if (this.Config.Sombrero1 == 3) //Gato tricolor
			hat1 = 'Sombrero3';
		else if (this.Config.Sombrero1 == 4)
			hat1 = 'Sombrero4';

		if (this.Config.Sombrero1 != 0) //Gato blanco
			this.shooter1.add(this.add.image(350, 330, hat1).setFlipX(true).setScale(0.75));

		// pa uelo jugador 1
		var scarf1;
		if (this.Config.Panuelo1 == 1) //Gato blanco
			scarf1 = 'Panuelo1';
		else if (this.Config.Panuelo1 == 2) //Gato tricolor
			scarf1 = 'Panuelo2';
		else if (this.Config.Panuelo1 == 3) //Gato tricolor
			scarf1 = 'Panuelo3';
		else if (this.Config.Panuelo1 == 4)
			scarf1 = 'Panuelo4';

		if (this.Config.Panuelo1 != 0) //Gato blanco
			this.shooter1.add(this.add.image(350, 330, scarf1).setFlipX(true).setScale(0.75));



		this.shooter2 = this.add.group();
		// skin jugador 2
		var skin2;
		if (this.Config.Gato2 == 1) //Gato blanco
			skin2 = 'Gato1';
		else if (this.Config.Gato2 == 2) //Gato tricolor
			skin2 = 'Gato2';
		else if (this.Config.Gato2 == 3) //Gato tricolor
			skin2 = 'Gato3';
		else if (this.Config.Gato2 == 4)
			skin2 = 'Gato4';
		else
			skin2 = 'Gato2';

		this.shooter2.add(this.add.image(760, 330, skin2).setScale(0.75));

		// sombrero jugador 2
		var hat2;
		if (this.Config.Sombrero2 == 1) //marron 
			hat2 = 'Sombrero1';
		else if (this.Config.Sombrero2 == 2) //beige
			hat2 = 'Sombrero2';
		else if (this.Config.Sombrero2 == 3) //verde
			hat2 = 'Sombrero3';
		else if (this.Config.Sombrero2 == 4) //gris
			hat2 = 'Sombrero4';

		if (this.Config.Sombrero2 != 0) //sin sombrero
			this.shooter2.add(this.add.image(760, 330, hat2).setScale(0.75));

		// pa uelo jugador 2
		var scarf2;
		if (this.Config.Panuelo2 == 1) //azul
			scarf2 = 'Panuelo1';
		else if (this.Config.Panuelo2 == 2) //violeta
			scarf2 = 'Panuelo2';
		else if (this.Config.Panuelo2 == 3) //rojo
			scarf2 = 'Panuelo3';
		else if (this.Config.Panuelo2 == 4) // verde
			scarf2 = 'Panuelo4';

		if (this.Config.Panuelo2 != 0) //sin pa uelo
			this.shooter1.add(this.add.image(760, 330, scarf2).setScale(0.75));
	}

	compararRecord(puntos, jugador) {
		if (puntos > PhaserRecords.third.points) { //Si es mayor que el tercer puesto
			if (puntos > PhaserRecords.second.points) { //Si es mayor que el segundo puesto
				// El segundo pasa a ser tercero
				PhaserRecords.third.user = PhaserRecords.second.user;
				PhaserRecords.third.points = PhaserRecords.second.points;

				if (puntos > PhaserRecords.first.points) { //Si es mayor que el primer puesto
					// El primero pasa a ser segundo
					PhaserRecords.second.user = PhaserRecords.first.user;
					PhaserRecords.second.points = PhaserRecords.first.points;

					// El usuario pasa a ser primero
					PhaserRecords.first.user = jugador;
					PhaserRecords.first.points = puntos;

				} else {
					// El usuario pasa a ser segundo
					PhaserRecords.second.user = jugador;
					PhaserRecords.second.points = puntos;
				}

			} else {
				// El usuario pasa a ser tercero
				PhaserRecords.third.user = jugador;
				PhaserRecords.third.points = puntos;
			}
			writeRecord(PhaserRecords);
			return true; // Devuelve true si ha superado algún record
		}
		return false; // Devuelve false en caso contrario
	}

	volver() {
		if(this.Config.mode == 'Online'){
			this.scene.start('SceneSecPartidaWS');
		} else{
			this.scene.start('SceneSecPartida');
		}
	}
	enterButtonHoverState() {
		this.boton1.setScale(1.1);
	}

	enterButtonRestState() {
		this.boton1.setScale(1);
	}
	enterButtonHoverState2() {
		this.boton2.setScale(1.1);
	}

	enterButtonRestState2() {
		this.boton2.setScale(1);
	}

	update() { }

}