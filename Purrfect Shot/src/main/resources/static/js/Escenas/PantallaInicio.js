class PantallaInicio extends Phaser.Scene{
    constructor(){
        super({key:'PantallaInicio'})
    }

    preload(){
		this.load.html('form3', 'html/form3.html');
        this.load.image('PantallaInicio', 'assets/Menus/MenusJuego/Pantalla Titulo/pantallainicio.png');

        this.load.image('Boton1', 'assets/Menus/MenusJuego/Pantalla Titulo/iniciobot1.png');
        
        this.load.image('Boton2', 'assets/Menus/MenusJuego/Pantalla Titulo/iniciobot2.png');
    
        this.load.image('Boton3', 'assets/Menus/MenusJuego/Pantalla Titulo/iniciobot3.png');
        
        this.load.image('Boton4', 'assets/Menus/MenusJuego/salonFama/estrellaSheriff.png');
        
        this.load.image('Boton5', 'assets/Menus/MenusJuego/Pantalla Titulo/botonOpBorde.png');
        
        this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png');
        
        this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
        this.load.audio('Ambiente', ['assets/sounds/Ambiente.ogg', 'assets/sounds/Ambiente.mp3']);
}
    create() {
        this.ambiente = this.sound.add('Ambiente', { volume: 0.2 });
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
        
        this.boton4 = this.add.image(140, 630, 'Boton4')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena4())
            .on('pointerover', () => this.enterButtonHoverState4())
            .on('pointerout', () => this.enterButtonRestState4())
            .setScale(1.05);
        
        this.boton5 = this.add.image(1030, 45, 'Boton5')
            .setInteractive()
            .on('pointerdown', () => this.pasarEscena5())
            .on('pointerover', () => this.enterButtonHoverState5())
            .on('pointerout', () => this.enterButtonRestState5());
        
        this.Aceptar = this.add.bitmapText(540, 445, 'Letra', "Jugar", 45,1).setOrigin(0.5);
     
        this.Atras = this.add.bitmapText(540, 520, 'Letra', "Controles", 35, 1).setOrigin(0.5);
     
        this.Resultados = this.add.bitmapText(540, 600, 'Letra', "Créditos", 35, 1).setOrigin(0.5);
        
        this.salon = this.add.bitmapText(140, 700, 'Letra', "Salón de la Fama", 25, 1).setOrigin(0.5);
    
    	readRecord(); //Leemos los récords para cargar la variable global PhaserRecords
    	
    	var texto=this.add.bitmapText(770,640,'Letra','Indique su nombre:',30,1);
		var element=this.add.dom(890,700).createFromCache('form3');
		element.addListener('click');
		element.on('click', function(event){
			if(event.target.name=='changeUser'){
				var inputUsername=this.getChildByName("name");
				
				if(inputUsername.value !== ''){
					//this.removeListener('click');
					//texto.setText(inputUsername.value);
					//this.setVisible(false);
					user=inputUsername.value;
					console.log(user);
					//inputUsername.value='';
					connectedUser.user = user;
					updateUser(connectedUser);
					//texto.visible(false);
				}	
			}
			
		});
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
    pasarEscena4() {
        //this.ambiente.pause();
        this.scene.start('salonFama');
    }
    pasarEscena5() {
        //this.ambiente.pause();
        this.scene.start('menuOpciones');
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
    
    enterButtonHoverState4(){
		this.boton4.setScale(1.1);
	}
    
    enterButtonRestState4(){
   	 this.boton4.setScale(1);
    }
    
    enterButtonHoverState5(){
		this.boton5.setScale(1.1);
	}
    
    enterButtonRestState5(){
   	 this.boton5.setScale(1);
    }
    update(){
    }
}