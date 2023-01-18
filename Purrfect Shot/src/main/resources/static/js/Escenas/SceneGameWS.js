class SceneGameWS extends Phaser.Scene {
	constructor() {
		super({ key: "SceneGameWS" });
	}

	
	init(data) {
		this.Config = data;
		console.log(this.Config);
	}
	/************************************************************** P R E L O A D *****************************************************************/
	/*---------------------------------------------------------------------------------------------------------------------------------*/

	preload() {
	}

	/*************************************************************** C R E A T E ******************************************************************/
	/*---------------------------------------------------------------------------------------------------------------------------------*/

	create() {
		this.scene.stop('SceneSecPartidaWS');
		this.id = idJugador;

		if (this.Config.Escenario == 1) {
			this.fondoGraneroDia = this.add.image(540, 375, 'FondoGraneroDia');
		}
		else if (this.Config.Escenario == 2) {
			this.fondoGraneroDia = this.add.image(540, 375, 'FondoDesiertoDia');
		}
		else if (this.Config.Escenario == 3) {
			this.fondoGraneroDia = this.add.image(540, 375, 'FondoCalleDia');
		}

		this.marco = this.add.image(540, 375, 'Marco');
		this.manecilla = this.add.image(540, 69, 'Manecilla');

		this.globalClock = this.time.addEvent({ delay: 60000, callback: this.endGameWS, callbackScope: this, paused: true }); // min

		/*-----------------------------------------------------------------------------------------------------------------*/

		// Animaciones de las dianas
		this.anims.create({
			key: 'abajo',
			frames: this.anims.generateFrameNumbers('Diana', { start: 0, end: 23 }),
			frameRate: 24,
			repeat: 0
		});

		this.anims.create({
			key: 'arriba',
			frames: this.anims.generateFrameNumbers('Diana', { start: 24, end: 46 }),
			frameRate: 24,
			repeat: 0
		});

		// Grupo de 6 dianas
		this.dianas = this.physics.add.group({
			key: 'Diana',
			repeat: 5,
			setXY: { x: 150, y: 550, stepX: 152 }
		});

		// Hacer que las impares se muevan hacia arriba y cambiar las hitboxs
		var i = 0;
		this.dianas.children.iterate(function(child) { // para todas las dianas
			if (i % 2 == 1) {
				child.y -= 100; // si es impar la subimos 100 px hacia arriba
			}
			child.body.setSize(95, 125, false).setOffset(40, 25); // cambiamos la hitbox

			child.anims.play('abajo', 'true'); // bajamos las dianas
			child.setDataEnabled();
			child.data.set('status', 0); //0 abajo, 1 arriba
			child.data.set('interactive', false);
			i++;
		});

		// Loop para comprobar qué dianas están tumbadas y hacerlas que suban
		this.loopDianas = this.time.addEvent({
			delay: 1000, // cada segundo
			callback: this.checkDianas,
			callbackScope: this,
			loop: true,
			paused: true
		});

		/*----------------------------------------------------------------------------------------------------------------------*/

		this.shooter1 = this.add.group();
		// skin jugador 1
		var skin1;
		if (this.Config.Gato1 == 1) //Gato blanco
			skin1 = 'Personaje1';
		else if (this.Config.Gato1 == 2) //Gato tricolor
			skin1 = 'Personaje2';
		else if (this.Config.Gato1 == 3) //Gato tricolor
			skin1 = 'Personaje3';
		else if (this.Config.Gato1 == 4)
			skin1 = 'Personaje4';
		else {
			skin1 = 'Personaje1';
		}

		this.shooter1.add(this.add.image(260, 730, skin1).setFlipX(true));

		// sombrero jugador 1
		var hat1;
		if (this.Config.Sombrero1 == 1) //Gato blanco
			hat1 = 'Hat1';
		else if (this.Config.Sombrero1 == 2) //Gato tricolor
			hat1 = 'Hat2';
		else if (this.Config.Sombrero1 == 3) //Gato tricolor
			hat1 = 'Hat3';
		else if (this.Config.Sombrero1 == 4)
			hat1 = 'Hat4';

		if (this.Config.Sombrero1 != 0) //Gato blanco
			this.shooter1.add(this.add.image(260, 730, hat1).setFlipX(true));

		// pañuelo jugador 1
		var scarf1;
		if (this.Config.Panuelo1 == 1) //Gato blanco
			scarf1 = 'Scarf1';
		else if (this.Config.Panuelo1 == 2) //Gato tricolor
			scarf1 = 'Scarf2';
		else if (this.Config.Panuelo1 == 3) //Gato tricolor
			scarf1 = 'Scarf3';
		else if (this.Config.Panuelo1 == 4)
			scarf1 = 'Scarf4';

		if (this.Config.Panuelo1 != 0) //Gato blanco
			this.shooter1.add(this.add.image(260, 730, scarf1).setFlipX(true));



		this.shooter2 = this.add.group();
		// skin jugador 2
		var skin2;
		if (this.Config.Gato2 == 1) //Gato blanco
			skin2 = 'Personaje1';
		else if (this.Config.Gato2 == 2) //Gato tricolor
			skin2 = 'Personaje2';
		else if (this.Config.Gato2 == 3) //Gato tricolor
			skin2 = 'Personaje3';
		else if (this.Config.Gato2 == 4)
			skin2 = 'Personaje4';
		else
			skin2 = 'Personaje2';

		this.shooter2.add(this.add.image(820, 730, skin2));

		// sombrero jugador 2
		var hat2;
		if (this.Config.Sombrero2 == 1) //marron 
			hat2 = 'Hat1';
		else if (this.Config.Sombrero2 == 2) //beige
			hat2 = 'Hat2';
		else if (this.Config.Sombrero2 == 3) //verde
			hat2 = 'Hat3';
		else if (this.Config.Sombrero2 == 4) //gris
			hat2 = 'Hat4';

		if (this.Config.Sombrero2 != 0) //sin sombrero
			this.shooter2.add(this.add.image(820, 730, hat2));

		// pañuelo jugador 2
		var scarf2;
		if (this.Config.Panuelo2 == 1) //azul
			scarf2 = 'Scarf1';
		else if (this.Config.Panuelo2 == 2) //violeta
			scarf2 = 'Scarf2';
		else if (this.Config.Panuelo2 == 3) //rojo
			scarf2 = 'Scarf3';
		else if (this.Config.Panuelo2 == 4) // verde
			scarf2 = 'Scarf4';

		if (this.Config.Panuelo2 != 0) //sin pañuelo
			this.shooter1.add(this.add.image(820, 730, scarf2));

		/*--------------------------------------------------------------------------------------------------------------------*/

		// Creamos el grupo en donde se guardan los personajes que hay en pantalla
		this.cats = this.add.group();

		// Creamos el grupo en donde se guardan los regalos de los personajes buenos
		this.gifts = this.add.group();

		/*-----------------------------------------------------------------------------------------------------------------------*/

		if (idJugador == 1) { //El jugador local es el 1
			// Mirilla Jugador junto con sus arreglos de hitbox
			this.mirilla1 = this.physics.add.image(150, 200, 'Mirilla1');
			this.mirilla1.setCollideWorldBounds(true); // que no se salga de la pantalla
			this.mirilla1.body.setSize(10, 10, true); // hitbox cuadrada centrada
			this.mirilla1.body.setCircle(5); // hitbox circular
			this.mirilla1.setDepth(50); // subimos la profundidad para que salga siempre por encima de los gatos de las dianas

			this.mirilla1.setDataEnabled();
			this.mirilla1.data.set('PU1', this.add.image(350, 75, 'PU1').setTint(0x333333));
			this.mirilla1.data.set('PU2', this.add.image(400, 75, 'PU2').setTint(0x333333));
			this.mirilla1.data.set('PU3', this.add.image(450, 75, 'PU3').setTint(0x333333));


			// Mirilla Contincante junto con sus arreglos de hitbox
			this.mirilla2 = this.physics.add.image(930, 200, 'Mirilla2');
			this.mirilla2.setCollideWorldBounds(true);
			this.mirilla2.body.setSize(10, 10, true);
			this.mirilla2.body.setCircle(5);
			this.mirilla2.setDepth(50);

			this.mirilla2.setDataEnabled();
			this.mirilla2.data.set('PU1', this.add.image(730, 75, 'PU1').setTint(0x333333));
			this.mirilla2.data.set('PU2', this.add.image(680, 75, 'PU2').setTint(0x333333));
			this.mirilla2.data.set('PU3', this.add.image(630, 75, 'PU3').setTint(0x333333));
		}
		else if (idJugador == 2) { //El jugador local es el 2
			// Mirilla Contrincante junto con sus arreglos de hitbox
			this.mirilla2 = this.physics.add.image(150, 200, 'Mirilla1');
			this.mirilla2.setCollideWorldBounds(true); // que no se salga de la pantalla
			this.mirilla2.body.setSize(10, 10, true); // hitbox cuadrada centrada
			this.mirilla2.body.setCircle(5); // hitbox circular
			this.mirilla2.setDepth(50); // subimos la profundidad para que salga siempre por encima de los gatos de las dianas

			this.mirilla2.setDataEnabled();
			this.mirilla2.data.set('PU1', this.add.image(350, 75, 'PU1').setTint(0x333333));
			this.mirilla2.data.set('PU2', this.add.image(400, 75, 'PU2').setTint(0x333333));
			this.mirilla2.data.set('PU3', this.add.image(450, 75, 'PU3').setTint(0x333333));


			// Mirilla Jugador junto con sus arreglos de hitbox
			this.mirilla1 = this.physics.add.image(930, 200, 'Mirilla2');
			this.mirilla1.setCollideWorldBounds(true);
			this.mirilla1.body.setSize(10, 10, true);
			this.mirilla1.body.setCircle(5);
			this.mirilla1.setDepth(50);

			this.mirilla1.setDataEnabled();
			this.mirilla1.data.set('PU1', this.add.image(730, 75, 'PU1').setTint(0x333333));
			this.mirilla1.data.set('PU2', this.add.image(680, 75, 'PU2').setTint(0x333333));
			this.mirilla1.data.set('PU3', this.add.image(630, 75, 'PU3').setTint(0x333333));
		}

		// Colisiones de las mirillas y las dianas
		this.physics.add.overlap(this.mirilla1, this.dianas, function(obj1, obj2) { // cuando hay overlap
			this.diana1 = obj2; // guardamos la última diana sobre la que ha estado el jugador
		}, null, this);

		this.physics.add.overlap(this.mirilla2, this.dianas, function(obj1, obj2) {
			this.diana2 = obj2;
		}, null, this);

		/*-------------------------------------------------------------------------------------------------------------------*/

			// Puntuaciones
			this.scoreJ1 = 0;
			this.scoreJ2 = 0;
			
			// Balas
			this.bulletJ1 = 20;
			this.bulletJ2 = 20;
			
		if (idJugador == 1) { //El jugador local es el 1
			this.scoreTextJ1 = this.add.bitmapText(100, 60, 'Letra', 'Pts: 0', 30);
			this.scoreTextJ2 = this.add.bitmapText(880, 60, 'Letra', 'Pts: 0', 30);
			this.bulletTextJ1 = this.add.bitmapText(63, 690, 'Letra', this.bulletJ1, 40, 1).setTint(0x000000);
			this.bulletTextJ2 = this.add.bitmapText(995, 690, 'Letra', this.bulletJ2, 40, 1).setTint(0x000000);
		}
		else if(idJugador == 2) {
			this.scoreTextJ2 = this.add.bitmapText(100, 60, 'Letra', 'Pts: 0', 30);
			this.scoreTextJ1 = this.add.bitmapText(880, 60, 'Letra', 'Pts: 0', 30);
			this.bulletTextJ2 = this.add.bitmapText(63, 690, 'Letra', this.bulletJ1, 40, 1).setTint(0x000000);
			this.bulletTextJ1 = this.add.bitmapText(995, 690, 'Letra', this.bulletJ2, 40, 1).setTint(0x000000);
		}

		/*---------------------------------------------------------------------------------------------------------------------*/

		// CONTROLES JUGADOR         
		this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.key_F = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
		this.key_C = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);


		document.addEventListener('keydown', this.handlerShot, false);

		this.countDown = this.time.addEvent({ delay: 5000, callback: this.removeText, callbackScope: this });
		
		this.info = this.add.bitmapText(540, 200, 'Letra', '', 70, 1).setOrigin(0.5);
		
		/*---------------------------------------------------------------------------------------------------------------------------*/
		
		//WEBSOCKETS
		
		this.sendWS = this.time.addEvent({ delay: 50, callback: this.sendInfo, callbackScope: this, loop: true});
				
		connection.addEventListener('message', this.handleMessages);
	}

	handleMessages = (msg) => {
		var datos = JSON.parse(msg.data);
		
		if(datos.name == 'Iniciar reloj'){
			this.startGame();
		}
		
		if(datos.name == 'Parar reloj'){
			this.endGame();
		}
		
		//Gato a crear
		if(datos.name == 'Crear gato'){
			this.dianasUp(datos.message);
		}
		
		if(datos.name == 'Datos oponente'){
			this.actOponente(datos.message);
		}
		
		if(datos.name == 'Tecla pulsada'){
			this.gastarBalas();
		}
		
		if(datos.name == 'Evento dianas'){
			this.eventoDianas(datos.message);
		}
			
	}


	/*************************************************************** U P D A T E ******************************************************************/
	/*---------------------------------------------------------------------------------------------------------------------------------*/

	update(delta) {

		if (this.countDown.getOverallProgress() < 0.5) {
			this.info.setText('Preparados');
		}
		else if (this.countDown.getOverallProgress() < 0.8) {
			this.info.setText('Listos');
			
			if(idJugador == 1 && this.relojSent != true){
				var startMsg = {
					name: 'Iniciar reloj',
					destination: 'All',
					message: 'Iniciar el reloj de partida'
				};
				connection.send(JSON.stringify(startMsg));
				this.relojSent = true;
			}
		}
		else if (this.countDown.getOverallProgress() < 1) {
			this.info.setText('¡¡YA!!');
		}

		this.displayClock();

		// CONTROLES JUGADOR LOCAL

		if (this.key_W.isDown) {
			this.mirilla1.setVelocityY(-350);
		}
		else if (this.key_S.isDown) {
			this.mirilla1.setVelocityY(350);
		}
		else {
			this.mirilla1.setVelocityY(0);
		}

		if (this.key_A.isDown) {
			this.mirilla1.setVelocityX(-350);
		}
		else if (this.key_D.isDown) {
			this.mirilla1.setVelocityX(350);
		}
		else {
			this.mirilla1.setVelocityX(0);
		}


		// Si se pulsa la tecla de disparar y la mirilla está pasando por la diana o está dentro "parada"
		if (this.key_F.isDown && (!this.mirilla1.body.touching.none || this.mirilla1.body.embedded) && this.globalClock.hasDispatched == false) {

			if (this.bulletJ1 > 0) { // si hay balas en el cargador

				if (this.diana1.data.get('status') == 1 && this.diana1.data.get('interactive') == true) { //si la diana está de pie y acepta disparos
					
					var msg = {
						name: 'Evento dianas',
						destination: 'Others',
						message: 'F'
					};
					
					connection.send(JSON.stringify(msg));
					
					this.diana1.anims.play('abajo', true); // la diana cae
					this.diana1.data.set('status', 0);

					this.removeDiana(this.mirilla1, this.diana1); // este jugador ha tirado esta diana
					this.scoreTextJ1.setText("Pts:" + this.scoreJ1); // se actualiza la puntuación
				}
			}
		}

		if (this.key_C.isDown && (!this.mirilla1.body.touching.none || this.mirilla1.body.embedded) && this.globalClock.hasDispatched == false) {
			
			if (this.diana1.data.get('status') == 1 && this.diana1.data.get('interactive') == true) { //si la diana está de pie y acepta interacción

					var msg = {
						name: 'Evento dianas',
						destination: 'Others',
						message: 'C'
					};
					
					connection.send(JSON.stringify(msg));

				this.acceptGift(this.mirilla1, this.diana1); // comprobar si hay regalo que recoger
			}
		}

	}

	sendInfo(){
		var msg = {
			name: 'Datos oponente',
			destination: 'Others',
			message: {
				positionX: this.mirilla1.x,
				positionY: this.mirilla1.y,
				objetivo: this.diana1
			}
		};
		
		connection.send(JSON.stringify(msg));
	}

	actOponente(datos){
		this.mirilla2.setPosition(datos.positionX, datos.positionY);
		
		if(datos.objetivo != undefined){
			this.dianas.children.iterate(function(child) {
				if (child.x == datos.objetivo.x && child.y == datos.objetivo.y){
					this.diana2 = child;
				}
			}, this); // comprobar todas las dianas
		}
	}
	
	eventoDianas(tecla){
		if(tecla == 'F'){
			this.diana2.anims.play('abajo', true); // la diana cae
			this.diana2.data.set('status', 0);

			this.removeDiana(this.mirilla2, this.diana2); // este jugador ha tirado esta diana
			this.scoreTextJ2.setText("Pts:" + this.scoreJ2); // se actualiza la puntuación
		}
		
		if(tecla == 'C'){
			this.acceptGift(this.mirilla2, this.diana2); // comprobar si hay regalo que recoger
		}
	}

	/******************************************************** C R E A T E   D I A N A *************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	createDiana(objetivo) { // crea el gato que va a aparecer en la diana objetivo

		var key; // gato que se va a crear
		var puntos;
		var tiempo; // el tiempo que va a estar esta diana subida
		var regalo;
		var numRegalos;
		
		var tipo = Phaser.Math.Between(1, 10); // bueno o malo?

		if (tipo <= 4) { //30% de posibilidades de bueno
			var bueno = Phaser.Math.Between(1, 6); // cual de todos los buenos?
			regalo = Phaser.Math.Between(0, 2); // el gato trae regalo? 0 no, 1 balas, 2 power-up

			if (bueno <= 1) { // bebé 1
				key = 'Bueno1';
				puntos = -5;
				tiempo = 7000;
			}
			else if (bueno > 1 && bueno <= 2) { // bebé 2
				key = 'Bueno1b';
				puntos = -5;
				tiempo = 7000;
			}
			else if (bueno > 2 && bueno <= 3) { // civil 1
				key = 'Bueno2';
				puntos = -10;
				tiempo = 6000;
			}
			else if (bueno > 3 && bueno <= 4) { // civil 2
				key = 'Bueno2b';
				puntos = -10;
				tiempo = 6000;
			}
			else if (bueno > 4 && bueno <= 5) { // médico 1
				key = 'Bueno3';
				puntos = -50;
				tiempo = 4000;
			}
			else if (bueno > 5 && bueno <= 6) { // médico 2
				key = 'Bueno3b';
				puntos = -50;
				tiempo = 4000;
			}

			// REGALOS

			if (regalo == 1) { // el gato trae balas
				numRegalos = Phaser.Math.Between(1, 5); // cuantas balas da el gato bueno?
			}
			else if (regalo == 2) { // el gato trae un power-up
				numRegalos = Phaser.Math.Between(1, 3); // qué power-up da? 1. Balas inf, 2. Diplomacia, 3. Justicia
			}
		}

		else { // 70% posibilidades de malo
			var malo = Phaser.Math.Between(1, 8); // qué malo de todos?

			if (malo <= 1) { //  1
				key = 'Malo1';
				puntos = 5;
				tiempo = 7000;
			}
			else if (malo <= 2) { //  2
				key = 'Malo1b';
				puntos = 5;
				tiempo = 7000;
			}
			else if (malo <= 3) { //  1
				key = 'Malo2';
				puntos = 10;
				tiempo = 6000;
			}
			else if (malo <= 4) { //  2
				key = 'Malo2b';
				puntos = 10;
				tiempo = 6000;
			}
			else if (malo <= 5) { //  1
				key = 'Malo3';
				puntos = 20;
				tiempo = 5000;
			}
			else if (malo <= 6) { //  2
				key = 'Malo3b';
				puntos = 20;
				tiempo = 5000;
			}
			else if (malo <= 7) { //  1
				key = 'Malo4';
				puntos = 50;
				tiempo = 4000;
			}
			else if (malo <= 8) { //  2
				key = 'Malo4b';
				puntos = 50;
				tiempo = 4000;
			}
		}
		
		var msg = {
			name: 'Crear gato',
			destination: 'All',
			message: {
				objetivo: objetivo,
				key: key,
				puntos: puntos,
				tiempo: tiempo,
				regalo: regalo,
				numRegalos: numRegalos
			}
		};
		
		connection.send(JSON.stringify(msg));
	}


	createGato(objetivo, datos){ //Se recibe un objeto datos que contiene el key de la imagen, la diana objetivo donde pintar, los puntos que otorga y el tiempo
		var gato;
		gato = this.add.image(objetivo.x, (objetivo.y - 65), datos.key);
		gato.setDataEnabled();
		gato.data.set('points', datos.puntos);
				
		if (datos.regalo == 1) { // el gato trae balas
			var balas = this.add.image(objetivo.x, objetivo.y + 5, 'BalaD');
			balas.setDataEnabled();
			balas.data.set('bullets', datos.numRegalos);
			gato.data.set('gifts', balas);
		}
		else if (datos.regalo == 2) { // el gato trae un power-up
			var poder = this.add.image(objetivo.x, objetivo.y + 5, 'Power');
			poder.setDataEnabled();
			poder.data.set('power up', datos.numRegalos);
			gato.data.set('gifts', poder);
		}
				
		var timer = this.time.delayedCall(datos.tiempo, this.removeDiana, [null, objetivo], this);
		gato.data.set('timer', timer); // asociamos el timer al gato creado para saber cuanto esperar si no se le dispara
		this.cats.add(gato);
		objetivo.data.set('interactive', true);

	}

	/******************************************************** R E M O V E   D I A N A *************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	removeDiana(jugador, objetivo) { // eliminar al gato y bajar la diana

		if (objetivo.data.get('status') == 1) { // si se ha llamado a la función desde el temporizador la diana está subida, si se ha disparado ya está bajada
			objetivo.anims.play('abajo', true);
			objetivo.data.set('status', 0);
		}

		var gato;
		this.cats.children.iterate(function(child) { // de todos los gatos de la escena
			if (child.x == objetivo.x && child.y == objetivo.y - 65) // sacamos el que se encuentra en la posición de la diana que se está bajando
				gato = child;
		});

		var timer = gato.data.get('timer'); // sacamos el temporizador creado para ese gato
		timer.remove(false); // borramos el temporizador para que no se llame a la función otra vez

		var puntos = gato.data.get('points');

		if (jugador != null) { // si es un jugador quien tira la diana leemos si tiene algun power up
			if (jugador.data.get('diplomacy') == true) { // si la diplomacia está activada
				if (puntos < 0) // todos los puntos negativos
					puntos = 0;   // no se suman
			}
			if (jugador.data.get('justice') == true) { // si la justicia está activada
				if (puntos > 0) // todos los puntos positivos
					puntos = Phaser.Math.CeilTo(puntos * 1.2); // se le suma el 20%
			}
		}

		if (jugador == this.mirilla1) { // si es el local el que dispara
			this.scoreJ1 += puntos; // se le suman sus puntos

			var x;
			if(this.id == 1){ // si este jugador es el J1
				x = 130;
			}
			else if(this.id == 2){ // si este jugador es el J2
				x = 900;
			}
			
			if (puntos > 0) {
				// color de la puntuación
				this.points1 = this.add.bitmapText(x, 90, 'Letra', '+' + puntos, 30, 1).setTint(0x95ff00);
				this.Config.totalEnemiesJ1++;
			}
			else {
				this.points1 = this.add.bitmapText(x, 90, 'Letra', puntos, 30, 1).setTint(0xff0000);
				this.Config.totalAlliesJ1++;
			}


			this.time.delayedCall(600, this.removePoints, [this.points1], this);
		}

		else if (jugador == this.mirilla2) { // si es el online el que dispara
			this.scoreJ2 += puntos;

			var x;
			if(this.id == 1){ // si este jugador es el J1
				x = 900;
			}
			else if(this.id == 2){ // si este jugador es el J2
				x = 130;
			}

			if (puntos > 0) {
				this.points2 = this.add.bitmapText(x, 90, 'Letra', '+' + puntos, 30, 1).setTint(0x95ff00);
				this.Config.totalEnemiesJ2++;
			}

			else {
				this.points2 = this.add.bitmapText(x, 90, 'Letra', puntos, 30, 1).setTint(0xff0000);
				this.Config.totalAlliesJ2++;
			}


			this.time.delayedCall(600, this.removePoints, [this.points2], this);
		}

		if (gato.data.get('gifts') != undefined) { // si el gato viene con regalo
			gato.data.get('gifts').destroy(); // se elimina a la vez que el gato
		}

		this.cats.remove(gato, true, true);
		objetivo.data.set('interactive', false);
	}

	/********************************************************* A C C E P T   G I F T **************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	acceptGift(jugador, objetivo) { // se comprueba si el gato lleva un regalo y se le da al jugador

		var reload = this.sound.add('Reload');
		var gato;
		this.cats.children.iterate(function(child) { // de todos los gatos de la escena
			if (child.x == objetivo.x && child.y == objetivo.y - 65) // sacamos el que se encuentra en la posición de la diana que se está bajando
				gato = child;
		});

		if (gato.data.get('gifts') != undefined) { // si el gato viene con regalo

			objetivo.anims.play('abajo', true); // tiramos la diana
			objetivo.data.set('status', 0);
			objetivo.data.set('interactive', false);

			var timer = gato.data.get('timer'); // sacamos el temporizador creado para ese gato
			timer.remove(false); // borramos el temporizador para que no se llame a la función remove

			var regalo = gato.data.get('gifts'); // recuperamos el regalo que trae el gato

			if (regalo.data.get('bullets') != undefined) { // si son balas
				if (jugador == this.mirilla1) { // si lo recoge el jugador 1
					this.bulletJ1 += regalo.data.get('bullets'); // se le suman las balas al cargador
					this.bulletTextJ1.setText(this.bulletJ1);
				}
				else {
					this.bulletJ2 += regalo.data.get('bullets'); // se le suman las balas al cargador
					this.bulletTextJ2.setText(this.bulletJ2);
				}
				reload.play();
			}
			else if (regalo.data.get('power up') != undefined) { // si es un power-up
				var tipo = regalo.data.get('power up');
				if (tipo == 1) { // si son balas infinitas
					if (jugador.data.get('infinite bullets') != true) { // si ya tienes el power up activado no se reactiva
						jugador.data.set('infinite bullets', true);
						jugador.data.set('PU1', jugador.data.get('PU1').clearTint());
						this.time.delayedCall(8000, this.powerDown, [jugador, 'infinite bullets', 'PU1'], this);
					}
				}
				else if (tipo == 2) { // si es diplomacia con los residentes
					if (jugador.data.get('dimoplacy') != true) {
						jugador.data.set('diplomacy', true);
						jugador.data.set('PU2', jugador.data.get('PU2').clearTint());
						this.time.delayedCall(8000, this.powerDown, [jugador, 'diplomacy', 'PU2'], this);
					}
				}
				else if (tipo == 3) { // si es aumento de puntuación
					if (jugador.data.get('justice') != true) {
						jugador.data.set('justice', true);
						jugador.data.set('PU2', jugador.data.get('PU3').clearTint());
						this.time.delayedCall(10000, this.powerDown, [jugador, 'justice', 'PU3'], this);
					}
				}
				if (jugador == this.mirilla1) {
					this.Config.totalPowerJ1++;
				} else if (jugador == this.mirilla2) {
					this.Config.totalPowerJ2++;
				}
			}

			gato.data.get('gifts').destroy(); // se elimina el regalo
			this.cats.remove(gato, true, true);
		}
	}

	/********************************************************* C H E C K   D I A N A S ************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	checkDianas() { // comprueba las dianas que están bajadas y llama a una función que las levanta
		if(idJugador == 1){ // Solo el jugador 1 itera sobre el escenario
			this.dianas.children.iterate(function(child) { // comprobar todas las dianas
				if (child.data.get('status') == 0) { // si están abajo
					child.data.set('status', 1); // las ponemos como que van a subir para que no entren de nuevo en este bucle
					this.time.delayedCall(Phaser.Math.Between(20, 50) * 100, this.createDiana, [child], this); // se crea un gato para la diana entre 2 y 5 segundos después
				}
			}, this);
		}
	}

	/*********************************************************** D I A N A S   U P ****************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	dianasUp(datos) {
		var objetivo = datos.objetivo;
		this.dianas.children.iterate(function(child) {
			if (child.x == objetivo.x && child.y == objetivo.y){
				objetivo = child;
			}
		}, this); // comprobar todas las dianas
		
		objetivo.setDataEnabled();
		objetivo.data.set('status', 1);
		objetivo.anims.play('arriba', 'true');
		
		this.time.delayedCall(850, this.createGato, [objetivo, datos], this);
	}

	/******************************************************* R E M O V E   P O I N T S ************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	removePoints(puntos) { // borrar el texto de sumar o restar puntos al marcador
		puntos.destroy();
	}

	/*********************************************************** P O W E R   D O W N **************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	powerDown(jugador, poder, icono) { // se desactiva el poder
		jugador.data.set(poder, false);
		jugador.data.set(icono, jugador.data.get(icono).setTint(0x333333));
	}

	/******************************************************* D I S P L A Y   C L O C K ************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	displayClock() {
		var angulo = 360 * this.globalClock.getOverallProgress();

		this.manecilla.setAngle(angulo);
	}

	/*********************************************************** S T A R T   G A M E **************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	startGame() {
		this.globalClock.paused = false;
		this.loopDianas.paused = false;
	}
	
	pauseGame() {
		this.globalClock.paused = true;
		this.loopDianas.paused = true;
	}

	removeText() {
		this.info.setText('');
	}
	
	/************************************************************* H A N D L E R   S H O T ****************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/

	handlerShot = (event) => {
		var keyValue = event.key;		
		var bang = this.sound.add('Bang');
		var empty = this.sound.add('Empty');
		
		var msg = {
			name: 'Tecla pulsada',
			destination: 'Others',
			message: 'Se ha pulsado una tecla'
		};
		
		if (this.globalClock.paused == false && this.globalClock.hasDispatched == false) { //cuando esté corriendo el tiempo
			if (keyValue == "f" || keyValue == "F") {// cada vez que se pulse F
				connection.send(JSON.stringify(msg));
				
				if (this.mirilla1.data.get('infinite bullets') != true && this.bulletJ1 > 0) { // si el power up está desactivado y si hay balas en el cargador
					this.bulletJ1 -= 1 // dispares donde dispares se gasta una bala
					this.bulletTextJ1.setText(this.bulletJ1);
					bang.play();
					this.Config.totalBulletsJ1++;
				}
				else if (this.mirilla1.data.get('infinite bullets') == true) {
					bang.play();
					this.Config.totalBulletsJ1++;
				}
				else {
					empty.play();
				}
			}
		}
		else {
			if (keyValue == "f" || keyValue == "F") {
				connection.send(JSON.stringify(msg));
				empty.play();
			}
		}
	}
	
	gastarBalas(){
		var bang = this.sound.add('Bang');
		var empty = this.sound.add('Empty');
		
		if (this.globalClock.paused == false && this.globalClock.hasDispatched == false) {
			if (this.mirilla2.data.get('infinite bullets') != true && this.bulletJ2 > 0) { // si el power up está desactivado y si hay balas en el cargador
				this.bulletJ2 -= 1 // dispares donde dispares se gasta una bala
				this.bulletTextJ2.setText(this.bulletJ2);
				bang.play();
				this.Config.totalBulletsJ2++;
			}
			else if (this.mirilla2.data.get('infinite bullets') == true) {
				bang.play();
				this.Config.totalBulletsJ2++;
			}
			else {
				empty.play();
			}
		} else {
			empty.play();
		}
	}
	
	/************************************************************* E N D   G A M E ****************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/
	endGame() {
		this.info.setText('Fin de partida');
		document.removeEventListener('keydown', this.handlerShot, false);
		this.loopDianas.remove(false);
		if(this.id == 1){ //Si el jugador local es el J1
			this.Config.totalScoreJ1 += this.scoreJ1;
			this.Config.totalScoreJ2 += this.scoreJ2;
		} else if(this.id == 2) {
			this.Config.totalScoreJ2 += this.scoreJ1;
			this.Config.totalScoreJ1 += this.scoreJ2;
			
			var aux;
			
			aux = this.Config.totalAlliesJ1;
			this.Config.totalAlliesJ1 = this.Config.totalAlliesJ2;
			this.Config.totalAlliesJ2 = aux;
			
			aux = this.Config.totalBulletsJ1;
			this.Config.totalBulletsJ1 = this.Config.totalBulletsJ2;
			this.Config.totalBulletsJ2 = aux;
			
			aux = this.Config.totalEnemiesJ1;
			this.Config.totalEnemiesJ1 = this.Config.totalEnemiesJ2;
			this.Config.totalEnemiesJ2 = aux;
			
			aux = this.Config.totalPowerJ1;
			this.Config.totalPowerJ1 = this.Config.totalPowerJ2;
			this.Config.totalPowerJ2 = aux;
		}
		this.Config.Rondas -= 1;
		if (this.Config.Rondas == 0) {
			this.time.delayedCall(5000, this.pasarEscena, [], this);
		}
		else {
			this.time.delayedCall(5000, this.pasarEscena2, [], this);
		}

	}
	
	endGameWS() {
		if(idJugador == 1){
			var msg = {
				name: 'Parar reloj',
				destination: 'All',
				message: 'Parar el reloj de juego'
			};
			connection.send(JSON.stringify(msg));
		}
	}
	/************************************************************* P A S A R    E S C E N A ****************************************************************/
	/*--------------------------------------------------------------------------------------------------------------------------------*/
	pasarEscena() {
		this.relojSent = false;
		this.sendWS.remove(false);
		this.time.clearPendingEvents();
		this.time.removeAllEvents();
		connection.removeEventListener('message', this.handleMessages);
		this.scene.start('PantallaVicDerr', this.Config);
	}

	pasarEscena2() {
		this.relojSent = false;
		this.sendWS.remove(false);
		this.time.clearPendingEvents();
		this.time.removeAllEvents();
		this.scene.start('SceneGameWS', this.Config);
	}
}