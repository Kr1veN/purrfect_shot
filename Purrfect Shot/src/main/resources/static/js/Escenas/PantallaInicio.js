class PantallaInicio extends Phaser.Scene{
    constructor(){
        super({key:'PantallaInicio'})
    }
    
    init(data){
		this.Config = data;
	}

    preload(){
		this.input.setDefaultCursor('url(assets/Punteroredim.cur), pointer');
		this.load.html('form3', 'html/form3.html');
		//Pantalla Inicio
        this.load.image('PantallaInicio', 'assets/ImagenesGame/Menus/PantallaTitulo/pantallainicio.png');

        this.load.image('Boton1', 'assets/ImagenesGame/Menus/PantallaTitulo/iniciobot1.png');
        
        this.load.image('Boton2', 'assets/ImagenesGame/Menus/PantallaTitulo/iniciobot2.png');
    
        this.load.image('Boton3', 'assets/ImagenesGame/Menus/PantallaTitulo/iniciobot3.png');
        
        this.load.image('Boton4', 'assets/ImagenesGame/Menus/PantallaTitulo/estrellaSheriff.png');
        
        this.load.image('Boton5', 'assets/ImagenesGame/Menus/Opciones/botonOpBorde.png');
        
        this.load.image('botOpciones', 'assets/ImagenesGame/Menus/inGame/botEstadisticas.png');
        
        this.load.audio('Ambiente', ['assets/Sonidos/Ambiente.ogg', 'assets/Sonidos/Ambiente.mp3']);
        
        /////////////Escena SecPartida///////////////
        this.load.html('Chat', 'html/chat.html');

		this.load.image('FondoVS', 'assets/ImagenesGame/Menus/inGame/fondoVS.png');
		this.load.image('Fondo1', 'assets/ImagenesGame/Menus/MenuConfig/menuInicio.png');
		this.load.image('Gato1', 'assets/ImagenesGame/PersonajesFront/PersonajeGatoBlanco.png');
		this.load.image('Gato2', 'assets/ImagenesGame/PersonajesFront/PersonajeGatoTricolor.png');
		this.load.image('Gato3', 'assets/ImagenesGame/PersonajesFront/PersonajeGatoNegro.png');
		this.load.image('Gato4', 'assets/ImagenesGame/PersonajesFront/PersonajeGatoNaranja.png');
		this.load.image('BotSupI', 'assets/ImagenesGame/Menus/MenuConfig//pant3bot1.png');
		this.load.image('BotSupD', 'assets/ImagenesGame/Menus/MenuConfig/pant3bot2.png');
		this.load.image('BotRondas', 'assets/ImagenesGame/Menus/MenuConfig/pant3bot3.png');
		this.load.image('BotMapas', 'assets/ImagenesGame/Menus/MenuConfig/pant3bot4.png');
		this.load.image('BotAtras', 'assets/ImagenesGame/Menus/MenuConfig/pant3bot5.png');
		this.load.image('BotJugar', 'assets/ImagenesGame/Menus/MenuConfig/pant3bot6.png');
		this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
		this.load.image('Sombrero1', 'assets/ImagenesGame/PersonajesFront/Sombrero.png');
		this.load.image('Sombrero2', 'assets/ImagenesGame/PersonajesFront/SombreroMarron.png');
		this.load.image('Sombrero3', 'assets/ImagenesGame/PersonajesFront/SombreroVerde.png');
		this.load.image('Sombrero4', 'assets/ImagenesGame/PersonajesFront/SombreroNegro.png');
		this.load.image('Panuelo1', 'assets/ImagenesGame/PersonajesFront/PanueloAzul.png');
		this.load.image('Panuelo2', 'assets/ImagenesGame/PersonajesFront/PanueloLila.png');
		this.load.image('Panuelo3', 'assets/ImagenesGame/PersonajesFront/PanueloRojo.png');
		this.load.image('Panuelo4', 'assets/ImagenesGame/PersonajesFront//PanueloVerde.png');
		
		///////////////////Game/////////////////////////////////
		
        this.load.image('FondoGraneroDia', 'assets/ImagenesGame/Fondos/granerodia.png');
        this.load.image('FondoCalleDia', 'assets/ImagenesGame/Fondos/calledia.png');
        this.load.image('FondoDesiertoDia', 'assets/ImagenesGame/Fondos/desiertodia.png');
        this.load.image('Marco', 'assets/ImagenesGame/Menus/inGame/marco2.png');
        this.load.image('Manecilla', 'assets/ImagenesGame/Menus/inGame/manecilla.png');
        this.load.spritesheet('Diana', 'assets/ImagenesGame/Menus/inGame/Diana.png', {frameWidth: 175, frameHeight: 300});
        
        this.load.image('Bueno1', 'assets/ImagenesGame/NPCs/Bueno1.png');
        this.load.image('Bueno1b', 'assets/ImagenesGame/NPCs/Bueno1b.png');
        this.load.image('Bueno2', 'assets/ImagenesGame/NPCs/Bueno2.png');
        this.load.image('Bueno2b', 'assets/ImagenesGame/NPCs/Bueno2b.png');
        this.load.image('Bueno3', 'assets/ImagenesGame/NPCs/Bueno3.png');
        this.load.image('Bueno3b', 'assets/ImagenesGame/NPCs/Bueno3b.png');
        
        this.load.image('Malo1', 'assets/ImagenesGame/NPCs/Malo1.png');
        this.load.image('Malo1b', 'assets/ImagenesGame/NPCs/Malo1b.png');
        this.load.image('Malo2', 'assets/ImagenesGame/NPCs/Malo2.png');
        this.load.image('Malo2b', 'assets/ImagenesGame/NPCs/Malo2b.png');
        this.load.image('Malo3', 'assets/ImagenesGame/NPCs/Malo3.png');
        this.load.image('Malo3b', 'assets/ImagenesGame/NPCs/Malo3b.png');
        this.load.image('Malo4', 'assets/ImagenesGame/NPCs/Malo4.png');
        this.load.image('Malo4b', 'assets/ImagenesGame/NPCs/Malo4b.png');
        
        this.load.image('Personaje1', 'assets/ImagenesGame/PersonajesBack/BackGatoBlanco.png');
        this.load.image('Personaje2', 'assets/ImagenesGame/PersonajesBack/BackGatoTricolor.png');
        this.load.image('Personaje3', 'assets/ImagenesGame/PersonajesBack/BackGatoNegro.png');
        this.load.image('Personaje4', 'assets/ImagenesGame/PersonajesBack/BackGatoNaranja.png');
        
        this.load.image('Hat1', 'assets/ImagenesGame/PersonajesBack/GorroMarronatras.png');
        this.load.image('Hat2', 'assets/ImagenesGame/PersonajesBack/GorroBeigeatras.png');
        this.load.image('Hat3', 'assets/ImagenesGame/PersonajesBack/GorroVerdeatras.png');
        this.load.image('Hat4', 'assets/ImagenesGame/PersonajesBack/GorroGrisatras.png');
        
        this.load.image('Scarf1', 'assets/ImagenesGame/PersonajesBack/PanueloAzulatras.png');
        this.load.image('Scarf2', 'assets/ImagenesGame/PersonajesBack/PanueloVioletaatras.png');
        this.load.image('Scarf3', 'assets/ImagenesGame/PersonajesBack/PanueloRojoatras.png');
        this.load.image('Scarf4', 'assets/ImagenesGame/PersonajesBack/PanueloVerdeatras.png');
        
        this.load.image('Mirilla1', 'assets/ImagenesGame/Menus/inGame/MirillaJ1.png');
        this.load.image('Mirilla2', 'assets/ImagenesGame/Menus/inGame/MirillaJ2.png');
        this.load.image('Power', 'assets/ImagenesGame/Menus/inGame/power.png');
        this.load.image('PU1', 'assets/ImagenesGame/Menus/inGame/PU1.png');
        this.load.image('PU2', 'assets/ImagenesGame/Menus/inGame/PU2.png');
        this.load.image('PU3', 'assets/ImagenesGame/Menus/inGame/PU3.png');
        
        this.load.bitmapFont('Bonzer', 'assets/fonts/BonzerSanFrancisco.png', 'assets/fonts/BonzerSanFrancisco.xml');
        
        this.load.audio('Bang', ['assets/Sonidos/bang.ogg', 'assets/Sonidos/bang.mp3']);
        this.load.audio('Empty', ['assets/Sonidos/empty.ogg', 'assets/Sonidos/empty.mp3']);
        this.load.audio('Reload', ['assets/Sonidos/reload.ogg', 'assets/Sonidos/reload.mp3']);
        
        /////////Personalizacion////////
        this.load.image('Fondo1', 'assets/ImagenesGame/Menus/PersPersonaje/menuInicioDes.png');
        this.load.image('Fondo2', 'assets/ImagenesGame/Menus/PersPersonaje/personalizacion.png');
        this.load.image('BalaD', 'assets/ImagenesGame/Menus/MenuConfig/balaDer.png');
        this.load.image('BalaI', 'assets/ImagenesGame/Menus/MenuConfig/balaIzq.png');
        this.load.image('CambioGato1', 'assets/ImagenesGame/Menus/PersPersonaje/Boton_Gato.png');
        this.load.audio('MusicaFondo', 'assets/Sonidos/MusicaFondo.mp3');
        this.load.image('Descrip1', 'assets/ImagenesGame/Menus/PersPersonaje/descPaw.png');
        this.load.image('Descrip3', 'assets/ImagenesGame/Menus/PersPersonaje/descCat.png');
        this.load.image('Descrip4', 'assets/ImagenesGame/Menus/PersPersonaje/descKitty.png');
        this.load.image('Descrip2', 'assets/ImagenesGame/Menus/PersPersonaje/descTim.png');
        this.load.image('BotJugar', 'assets/ImagenesGame/Menus/PersPersonaje/pant3bot6.png');
        this.load.image('BotInfo', 'assets/ImagenesGame/Menus/PersPersonaje/botonInfo.png');
        this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
		this.load.html('form', 'html/form.html');
		this.load.html('form2', 'html/form2.html');

		this.load.image('FondoDesierto', 'assets/ImagenesGame/Fondos/desiertodia.png');

		this.load.image('PantallaResultados', 'assets/ImagenesGame/Menus/inGame/pantallaEstadisticas.png');
		this.load.image('FondoEnemigos', 'assets/ImagenesGame/Menus/ControlesCreditos/enemigos.png');
		this.load.image('potenciadores', 'assets/ImagenesGame/Menus/ControlesCreditos/potenciadores.png');
		this.load.image('FondoAliados', 'assets/ImagenesGame/Menus/ControlesCreditos/residentes.png');
		this.load.image('FondoControles', 'assets/ImagenesGame/Menus/ControlesCreditos/controles.png');
		
        this.load.image('tablon', 'assets/ImagenesGame/Menus/SalonFama/records.png');
        this.load.image('botAtras', 'assets/ImagenesGame/Menus/MenuConfig/pant2bot3.png');
		
		this.load.image('creditos', 'assets/ImagenesGame/Menus/ControlesCreditos/creditos.png');
        this.load.image('easter', 'assets/ImagenesGame/Menus/MenuConfig/balaDer.png');
        this.load.spritesheet('rick', 'assets/ImagenesGame/Menus/ControlesCreditos/rickRoll.png', {frameWidth: 270, frameHeight: 282});
        this.load.audio('rickMusic', ['assets/sonidos/rickMusic.ogg', 'assets/sonidos/rickMusic.mp3']);
        
}
    create() {
        this.ambiente = this.sound.add('Ambiente', { volume: 0.3 , loop: true});
        if(this.Config.musica != true){
			this.ambiente.play();
			this.Config.musica = true;
		}
        
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
        
        this.Aceptar = this.add.bitmapText(540, 445, 'Letra', "Jugar", 45,1).setOrigin(0.5);
     
        this.Atras = this.add.bitmapText(540, 520, 'Letra', "Controles", 35, 1).setOrigin(0.5);
     
        this.Resultados = this.add.bitmapText(540, 600, 'Letra', "Créditos", 35, 1).setOrigin(0.5);
        
        this.salon = this.add.bitmapText(140, 700, 'Letra', "Salón de la Fama", 25, 1).setOrigin(0.5);
    
    	readRecord(); //Leemos los récords para cargar la variable global PhaserRecords
    	
    	
}
    pasarEscena1() {
        this.scene.start('SceneConf', this.Config);
    }
    pasarEscena2() {
        this.scene.start('Tutorial', this.Config);
    }
    pasarEscena3() {
        this.scene.start('Creditos', this.Config);
    }
    pasarEscena4() {
        this.scene.start('salonFama', this.Config);
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
    
    
    update(){
    }
}