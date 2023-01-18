class SceneSecPartidaWS extends Phaser.Scene {
	constructor() {
		super({ key: "SceneSecPartidaWS" });

	}

	init(data) {
		this.Config = data;
		console.log(this.Config);
	}

	preload() {
		
	}


	create() {
		this.idInicial = idJugador;
		
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
			.on('pointerdown', () => this.cambioRondas(this.Config.Rondas+1, true))
			.on('pointerover', () => this.enterButtonHoverState5())
			.on('pointerout', () => this.enterButtonRestState5());

		this.botonI1 = this.add.image(370, 515, 'BalaI')
			.setInteractive()
			.on('pointerdown', () => this.cambioRondas(this.Config.Rondas-1, true))
			.on('pointerover', () => this.enterButtonHoverState6())
			.on('pointerout', () => this.enterButtonRestState6());

		this.botonD2 = this.add.image(735, 595, 'BalaD')
			.setInteractive()
			.on('pointerdown', () => this.cambioMapa(this.Config.Escenario+1, true))
			.on('pointerover', () => this.enterButtonHoverState3())
			.on('pointerout', () => this.enterButtonRestState3());

		this.botonI2 = this.add.image(345, 595, 'BalaI')
			.setInteractive()
			.on('pointerdown', () => this.cambioMapa(this.Config.Escenario-1, true))
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
			
		
		this.disableInteractiveButtons(this.idInicial);

		
		this.Atras = this.add.bitmapText(450, 675, 'Letra', "Volver", 38, 1).setOrigin(0.5);
		this.Jugar = this.add.bitmapText(625, 675, 'Letra', "Jugar", 43, 1).setOrigin(0.5);		
		
		this.Mapa=this.add.bitmapText(425,573,'Letra','Mapa: Granero', 40, 1);
		
		
		this.Rondas=this.add.bitmapText(460,493,'Letra','Rondas: 1', 40, 1);
		
		
		if(this.Config.Escenario == undefined)
			this.Config.Escenario = 1;
		if(this.Config.Rondas == undefined)
			this.Config.Rondas = 1;
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
		

		this.mostrarGato1();
		this.mostrarGato2();
		this.cambioMapa(this.Config.Escenario, false);
		this.cambioRondas(this.Config.Rondas, false);
		

		this.chat = this.add.dom(170, 580).createFromCache('Chat');
		
		this.chat.addListener('click');
		this.chat.on('click', function(event){
			if(event.target.name === 'sendButton') {
				var inputText = this.getChildByName('messageField');
				
				if (inputText.value !== '')
            	{
					var messages = {
						user: user,
						body: inputText.value
					}
                	createMessage(messages, function(messageWithId) {
						//When item with id is returned from server
						showMessage(messageWithId);
						});
						
					inputText.value = '';
	            }
			}
		});
		
		this.chat.setVisible(false);
		this.buttonChatUp = this.add.image(170, 730, 'BotMapas').setScale(0.9,0.7).setInteractive()
			.on('pointerdown', () => this.openChat());
		this.buttonChatDown = this.add.image(170, 391, 'BotMapas').setScale(0.9,0.7).setVisible(false)
		.setInteractive()
			.on('pointerdown', () => this.closeChat());
		this.bulletChat = this.add.image(250, 730, 'BalaD').setScale(0.8).setRotation(Phaser.Math.DegToRad(-90));
		
		loadMessages(function(messages) {
			//When items are loaded from server
			for (var i = 0; i < messages.length; i++) {
				showMessage(messages[i]);
			}
		});
		
		var infoUsers=this.add.bitmapText(20,20,'Letra','Servidor '+server+'\nUsuarios activos: ',20,1);
		
		this.messagesClock = this.time.addEvent({ delay: 1000, callback: function(){
			if (lastMessage != undefined){
				loadLastMessage(lastMessage, function(nextMessage) {
					if(lastMessage != nextMessage.id)
						showMessage(nextMessage);
				});
			}
			getUsers(function(numUsers){
				infoUsers.setText('Servidor '+server+'\nUsuarios activos: ' + numUsers);
			});
			
		}, callbackScope: this, loop: true})
		
		
		this.preparado = false;
		
		//WEBSOCKETS
		connection.addEventListener('message', this.handleMessages);
		
		
	}
	
	mostrarGato1(){
		//Gato Activo J1
		if(this.gato1 != undefined){
			this.gato1.destroy();
		}
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
        
        //Sombrero Activo J1
        if(this.sombrero1 != undefined){
			this.sombrero1.destroy();
		}
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
        	
        //Pa�uelo Activo J1
        if(this.panuelo1 != undefined){
			this.panuelo1.destroy();
		}
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
	}
	
	mostrarGato2() {
		//Gato Activo J2
		if(this.gato2 != undefined){
			this.gato2.destroy();
		}
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
        
		//Sombrero Activo J2
		if(this.sombrero2 != undefined){
			this.sombrero2.destroy();
		}
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
            
		//Pa�uelo Activo J2
		if(this.panuelo2 != undefined){
			this.panuelo2.destroy();
		}
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
       		this.panuelo2=this.add.image(650,380 ,scarf2).setScale(0.45);
	}
	
	handleMessages = (msg) => {
		var datos = JSON.parse(msg.data);
		
		if(datos.name == 'Pedir configuracion'){
			var newMsg = {
				name: 'Devolver configuracion',
				destination: 'Others',
				message: this.Config
			};
			
			connection.send(JSON.stringify(newMsg));
		}
		
		if(datos.name == 'Devolver configuracion'){
			var config = datos.message;
			if (idJugador == 1){
				this.Config.Gato2 = config.Gato2;
				this.Config.Sombrero2 = config.Sombrero2;
				this.Config.Panuelo2 = config.Panuelo2;
				this.mostrarGato2();
			}
			if (idJugador == 2){
				this.Config.Gato1 = config.Gato1;
				this.Config.Sombrero1 = config.Sombrero1;
				this.Config.Panuelo1 = config.Panuelo1;
				this.Config.Rondas = config.Rondas;
				this.Config.Escenario = config.Escenario;
				this.mostrarGato1();
				this.cambioMapa(config.Escenario, false);
				this.cambioRondas(config.Rondas, false);
			}
		}
		
		//Cambio de rondas
		if(datos.name == 'Cambio de rondas'){
			this.Rondas.setText('Rondas: ' + datos.message);
			this.Config.Rondas = datos.message;
		}
		//Cambio de mapa
		if(datos.name == 'Cambio de mapa'){
			this.Mapa.setText('Mapa: ' + datos.message.nombre);
			this.Config.Escenario = datos.message.num;
		}
		
		//Jugador listo para jugar online
		if(datos.name == 'Jugador Preparado'){
			console.log('El oponente está preparado');
			if(this.preparado == true) {
				var newMsg = {
					name: 'Empezar partida',
					destination: 'All',
					message: 'Todos los usuarios están preparados para comenzar la partida'
				}
				connection.send(JSON.stringify(newMsg));
			}	
		}
		
		//Ambos jugadores listos
		if(datos.name == 'Empezar partida'){
			console.log('La partida va a dar comienzo');
			this.cambioEscena();
		}
		
		//El otro jugador ha personalizado su personaje
		if(datos.name == 'Personalizacion'){
			if(idJugador == 1){
				this.Config.Gato2 = datos.message.Gato2;
				this.Config.Sombrero2 = datos.message.Sombrero2;
				this.Config.Panuelo2 = datos.message.Panuelo2;
				this.mostrarGato2();
			}
			if(idJugador == 2){
				this.Config.Gato1 = datos.message.Gato1;
				this.Config.Sombrero1 = datos.message.Sombrero1;
				this.Config.Panuelo1 = datos.message.Panuelo1;
				this.mostrarGato1();
			}
		}
	}
	
	openChat() {
		this.chat.setVisible(true);
		this.buttonChatUp.setVisible(false);
		this.buttonChatDown.setVisible(true);
		this.bulletChat.setY(391).setRotation(Phaser.Math.DegToRad(90));
	}
	
	closeChat() {
		this.chat.setVisible(false);
		this.buttonChatUp.setVisible(true);
		this.buttonChatDown.setVisible(false);
		this.bulletChat.setY(730).setRotation(Phaser.Math.DegToRad(-90));
	}
	
	//GATOS//
	updateCharacter1() {
		this.scene.start('ScenePersonalizacionWS', this.Config);
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
		this.scene.start('ScenePersonalizacionWS', this.Config);
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
	cambioMapa(num, send){
		//Nos llega el numero del mapa que cambiar
		if(num==0){ //Si es 0 sabemos que es el anterior al primer mapa, es decir el ultimo
			num=3;
		}
		else if(num==4 || num==undefined){ //Si es 4 sabemos que es el siguiente al ultimo mapa, es decir, el primero
			num=1;
		}
		
		var nombre;
		if(num==1){
			this.Mapa.setText('Mapa: Granero');
			nombre = 'Granero';
		}
		else if(num==2){
			this.Mapa.setText('Mapa: Desierto');
			nombre = 'Desierto';
		}
		else if(num==3){
			this.Mapa.setText('Mapa: Pueblo');
			nombre = 'Pueblo';
		}
		
		this.Config.Escenario = num;
		
		if(send == true){
			var msg = {
				name: 'Cambio de mapa',
				destination: 'Others',
				message: {num: num, nombre: nombre}
			};
			connection.send(JSON.stringify(msg));
		}
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
	cambioRondas(num, send){
		//Nos llega el numero de rondas a jugar
		if(num==0){ //Si es 0 sabemos que es el anterior a las minimas rondas, es decir las maximas
			num=3;
		}
		else if(num==4 || num==undefined){ //Si es 4 sabemos que es el siguiente al maximo de rondas, es decir el minimo
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
		
		if(send == true){
			var msg = {
				name: 'Cambio de rondas',
				destination: 'Others',
				message: num
			};
			connection.send(JSON.stringify(msg));
		}
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
		connection.removeEventListener('message', this.handleMessages);
		connection.close();
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
		this.disableInteractiveButtons(this.idInicial, true);
		this.botonAtras.removeListener('pointerdown');
		this.botonAtras.on('pointerdown', () => this.cancelar());
		this.Jugar.setText('Esperando').setFontSize(35);
		this.Atras.setText('Cancelar').setFontSize(32);
		
		//llamada al servidor para avisar
		var msg = {
			name: 'Jugador Preparado',
			destination: 'Others',
			message: 'Estoy preparado para jugar, ¿y tú?'
		}
		connection.send(JSON.stringify(msg));
		this.preparado = true;
	}
	
	cancelar() {
		this.enableInteractiveButtons(this.idInicial);
		this.botonAtras.removeListener('pointerdown');
		this.botonAtras.on('pointerdown', () => this.atras());
		this.Jugar.setText('Jugar').setFontSize(43);
		this.Atras.setText('Volver').setFontSize(38);
		this.preparado = false;
	}
	
	cambioEscena() {
		//Cambio de escena
		connection.removeEventListener('message', this.handleMessages);

		this.Config.mode = 'Online';
		this.preparado = false;
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
	
	enableInteractiveButtons(jugador) {
		if(jugador == 1) {
			this.boton1.setInteractive();
			this.botonD1.setInteractive();
			this.botonD2.setInteractive();
			this.botonI1.setInteractive();
			this.botonI2.setInteractive();
			this.botonJugar.setInteractive();
		}
		if(jugador == 2) {
			this.boton2.setInteractive();
			this.botonJugar.setInteractive();
		}
		
	}
	
	disableInteractiveButtons(jugador, jugar) {
		if(jugador == 1) {
			this.boton2.disableInteractive();
			if(jugar == true){
				this.boton1.disableInteractive();
				this.botonD1.disableInteractive();
				this.botonD2.disableInteractive();
				this.botonI1.disableInteractive();
				this.botonI2.disableInteractive();
				this.botonJugar.disableInteractive();
			}
		}
		if(jugador == 2) {
			this.boton1.disableInteractive();
			this.botonD1.disableInteractive();
			this.botonD2.disableInteractive();
			this.botonI1.disableInteractive();
			this.botonI2.disableInteractive();
			if(jugar == true){
				this.boton2.disableInteractive();
				this.botonJugar.disableInteractive();
			}
		}
	}

	update(delta) {
		if(idJugador != this.idInicial){ //si a mitad de configuración se cambia de id (solo cambia si se sale el jugador 1)
			this.enableInteractiveButtons(idJugador);
			this.disableInteractiveButtons(idJugador, false);
			this.idInicial = idJugador;
			if(user == 'Jugador 2'){
				user = 'Jugador ' + idJugador;
			}
		}
		if(user == 'Cat Doe' || user == 'Jugador undefined'){
			user = 'Jugador ' + idJugador;
		}
	}
}