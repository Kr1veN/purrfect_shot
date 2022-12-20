class SceneSecPartida extends Phaser.Scene {
    constructor() {
        super({ key: "SceneSecPartida" });
        
    }

    init(data) {
        this.Personalizacion = data;
        console.log(this.Personalizacion);
    }

    preload() {
        this.load.image('Fondo1', 'assets/Menus/menuInicio.png');
        this.load.image('BalaD1', 'assets/Menus/balader.png');
        this.load.image('BalaI1', 'assets/Menus/balaizq.png');
        this.load.image('BalaD2', 'assets/Menus/balader.png');
        this.load.image('BalaI2', 'assets/Menus/balaizq.png');
        this.load.image('Gato1', 'assets/Personajes/PersonajeGatoBlanco.png');
        this.load.image('Gato2', 'assets/Personajes/PersonajeGatoTricolor.png');
        this.load.image('Gato3', 'assets/Personajes/PersonajeGatoNegro.png');
        this.load.image('Gato4', 'assets/Personajes/PersonajeGatoNaranja.png');
        this.load.image('BotSupI', 'assets/Menus/Pantalla3/pant3bot1.png');
        this.load.image('BotSupD', 'assets/Menus/Pantalla3/pant3bot2.png');
        this.load.image('BotRondas', 'assets/Menus/Pantalla3/pant3bot3.png');
        this.load.image('BotMapas', 'assets/Menus/Pantalla3/pant3bot4.png');
        this.load.image('BotAtras', 'assets/Menus/Pantalla3/pant3bot5.png');
        this.load.image('BotJugar', 'assets/Menus/Pantalla3/pant3bot6.png');
        //this.load.image('Logo', 'assets/Menus/Logo.png');
        //this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
        this.load.image('Sombrero1', 'assets/Personajes/Accesorios/Sombrero.png');
        this.load.image('Sombrero2', 'assets/Personajes/Accesorios/SombreroMarron.png');
        this.load.image('Sombrero3', 'assets/Personajes/Accesorios/SombreroVerde.png');
        this.load.image('Sombrero4', 'assets/Personajes/Accesorios/SombreroNegro.png');
        this.load.image('Panuelo1', 'assets/Personajes/Accesorios/PanueloAzul.png');
        this.load.image('Panuelo2', 'assets/Personajes/Accesorios/PanueloLila.png');
        this.load.image('Panuelo3', 'assets/Personajes/Accesorios/PanueloRojo.png');
        this.load.image('Panuelo4', 'assets/Personajes/Accesorios/PanueloVerde.png');
        }
       
    
    create() {
        this.config = this.add.image(0,0,'Fondo1');
        this.config.setDataEnabled();

        this.fondo1 = this.add.image(540, 375, 'Fondo1');
        this.botSupI = this.add.image(425, 380, 'BotSupI');  
        this.botSupD = this.add.image(650, 380, 'BotSupD');
        this.botRondas = this.add.image(540, 515, 'BotRondas');
        this.botMapas = this.add.image(540, 595, 'BotMapas');
        this.logo = this.add.image(540, 130, 'Logo').setScale(0.17);
        this.logo.rotation += -0.15;
        
      
        this.key_W =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

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

        this.botonD1 = this.add.image(710, 515, 'BalaD1')
            .setInteractive()
            .on('pointerdown', () => this.updateText3())
            .on('pointerover', () => this.enterButtonHoverState5())
            .on('pointerout', () => this.enterButtonRestState5());

        this.botonI1 = this.add.image(370, 515, 'BalaI1')
            .setInteractive()
            .on('pointerdown', () => this.updateText4())
            .on('pointerover', () => this.enterButtonHoverState6())
            .on('pointerout', () => this.enterButtonRestState6());

        this.botonD2 = this.add.image(735, 595, 'BalaD2')
            .setInteractive()
            .on('pointerdown', () => this.updateText())
            .on('pointerover', () => this.enterButtonHoverState3())
            .on('pointerout', () => this.enterButtonRestState3());

        this.botonI2 = this.add.image(345, 595, 'BalaI2')
            .setInteractive()
            .on('pointerdown', () => this.updateText2())
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

        //Carga de imágenes//
        //Gatos
        this.gato1 = this.add.image(425, 380, 'Gato1').setScale(0.25);
        this.gato12 = this.add.image(425, 380, 'Gato2').setScale(0.10);
        this.gato13 = this.add.image(425, 380, 'Gato3').setScale(0.25);
        this.gato14 = this.add.image(425, 380, 'Gato4').setScale(0.25);
        this.gato2 = this.add.image(650, 380, 'Gato2').setScale(0.10);
        this.gato21 = this.add.image(650, 380, 'Gato1').setScale(0.25);
        this.gato23 = this.add.image(650, 380, 'Gato3').setScale(0.25);
        this.gato24 = this.add.image(650, 380, 'Gato4').setScale(0.25);
        this.gato14.visible = false;
        this.gato13.visible = false;
        this.gato12.visible = false;
        this.gato24.visible = false;
        this.gato23.visible = false;
        this.gato21.visible = false;
        //Sombreros
        this.sombrero1 = this.add.image(425, 381.5, 'Sombrero1').setScale(0.1);
        this.sombrero2 = this.add.image(425, 381.5, 'Sombrero2').setScale(0.1);
        this.sombrero3 = this.add.image(425, 381.5, 'Sombrero3').setScale(0.1);
        this.sombrero4 = this.add.image(425, 381.5, 'Sombrero4').setScale(0.1);
        this.sombrero21 = this.add.image(652, 381.5, 'Sombrero1').setScale(0.1);
        this.sombrero22 = this.add.image(652, 381.5, 'Sombrero2').setScale(0.1);
        this.sombrero23 = this.add.image(652, 381.5, 'Sombrero3').setScale(0.1);
        this.sombrero24 = this.add.image(652, 381.5, 'Sombrero4').setScale(0.1);
        this.sombrero1.visible = false;
        this.sombrero2.visible = false;
        this.sombrero3.visible = false;
        this.sombrero4.visible = false;
        this.sombrero21.visible = false;
        this.sombrero22.visible = false;
        this.sombrero23.visible = false;
        this.sombrero24.visible = false;
        //Pañuelos
        this.panuelo1 = this.add.image(425, 380, 'Panuelo1').setScale(0.1);
        this.panuelo2 = this.add.image(425, 380, 'Panuelo2').setScale(0.1);
        this.panuelo3 = this.add.image(425, 380, 'Panuelo3').setScale(0.1);
        this.panuelo4 = this.add.image(425, 380, 'Panuelo4').setScale(0.1);
        this.panuelo12 = this.add.image(650, 380, 'Panuelo1').setScale(0.1);
        this.panuelo22 = this.add.image(650, 380, 'Panuelo2').setScale(0.1);
        this.panuelo32 = this.add.image(650, 380, 'Panuelo3').setScale(0.1);
        this.panuelo42 = this.add.image(650, 380, 'Panuelo4').setScale(0.1);
        this.panuelo1.visible = false;
        this.panuelo2.visible = false;
        this.panuelo3.visible = false;
        this.panuelo4.visible = false;
        this.panuelo12.visible = false;
        this.panuelo22.visible = false;
        this.panuelo32.visible = false;
        this.panuelo42.visible = false;
        //
        this.Granero = this.add.bitmapText(425, 573,'Letra', "Mapa: Granero",40,1);
        this.Pueblo = this.add.bitmapText(425, 573,'Letra', "Mapa: Pueblo",40,1);
        this.Desierto = this.add.bitmapText(425, 573,'Letra', "Mapa: Desierto",40,1);
        this.Ronda1 = this.add.bitmapText(460, 493,'Letra', "Rondas: 1",40,1);
        this.Ronda2 = this.add.bitmapText(460, 493,'Letra', "Rondas: 2",40,1);
        this.Ronda3 = this.add.bitmapText(460, 493,'Letra', "Rondas: 3",40,1);
        this.Atras = this.add.bitmapText(400, 655, 'Letra',"Volver", 35,1);
        this.Jugar = this.add.bitmapText(570, 655,'Letra', "Jugar",40,1);
        this.Ronda2.visible = false;
        this.Ronda3.visible = false;
        this.Pueblo.visible = false;
        this.Desierto.visible = false;
        this.config.data.set('Escenario', 1);
        this.config.data.set('Rondas', 1);
        //this.EscenarioActivo = 0;

        //Gato Activo J1
        if (this.Personalizacion.Gato1==1) {
            this.gato1.visible = true;
        } else if (this.Personalizacion.Gato1 == 2) {
            this.gato12.visible = true;
        } else if (this.Personalizacion.Gato1 == 3) {
            this.gato13.visible = true;
        } else if (this.Personalizacion.Gato1 == 4) {
            this.gato14.visible = true;
        }
        //Gato Activo J2
        if (this.Personalizacion.Gato2 == 1) {
            this.gato21.visible = true;
        } else if (this.Personalizacion.Gato2 == 2) {
            this.gato2.visible = true;
        } else if (this.Personalizacion.Gato2 == 3) {
            this.gato23.visible = true;
        } else if (this.Personalizacion.Gato2 == 4) {
            this.gato24.visible = true;
        }
        //Sombrero Activo J1
        if (this.Personalizacion.Sombrero1 == 1) {
            this.sombrero1.visible = true;
        } else if (this.Personalizacion.Sombrero1 == 2) {
            this.sombrero2.visible = true;
        } else if (this.Personalizacion.Sombrero1 == 3) {
            this.sombrero3.visible = true;
        } else if (this.Personalizacion.Sombrero1 == 4) {
            this.sombrero4.visible = true;
        } else if (this.Personalizacion.Sombrero1 == 0) {
            this.sombrero1.visible = false;
            this.sombrero2.visible = false;
            this.sombrero3.visible = false;
            this.sombrero4.visible = false;
        }
        //Sombrero Activo J2
        if (this.Personalizacion.Sombrero2 == 1) {
            this.sombrero21.visible = true;
        } else if (this.Personalizacion.Sombrero2 == 2) {
            this.sombrero22.visible = true;
        } else if (this.Personalizacion.Sombrero2 == 3) {
            this.sombrero23.visible = true;
        } else if (this.Personalizacion.Sombrero2 == 4) {
            this.sombrero24.visible = true;
        } else if (this.Personalizacion.Sombrero2 == 0) {
            this.sombrero21.visible = false;
            this.sombrero22.visible = false;
            this.sombrero23.visible = false;
            this.sombrero24.visible = false;
        }
        //Pañuelo Activo J1
        if (this.Personalizacion.Panuelo1 == 1) {
            this.panuelo1.visible = true;
        } else if (this.Personalizacion.Panuelo1 == 2) {
            this.panuelo2.visible = true;
        } else if (this.Personalizacion.Panuelo1 == 3) {
            this.panuelo3.visible = true;
        } else if (this.Personalizacion.Panuelo1 == 4) {
            this.panuelo4.visible = true;
        } else if (this.Personalizacion.Panuelo1 == 0) {
            this.panuelo1.visible = false;
            this.panuelo2.visible = false;
            this.panuelo3.visible = false;
            this.panuelo4.visible = false;
        }
       //Pañuelo Activo J2
       if (this.Personalizacion.Panuelo2 == 1) {
           this.panuelo12.visible = true;
       } else if (this.Personalizacion.Panuelo2 == 2) {
           this.panuelo22.visible = true;
       } else if (this.Personalizacion.Panuelo2 == 3) {
           this.panuelo32.visible = true;
       } else if (this.Personalizacion.Panuelo2 == 4) {
           this.panuelo42.visible = true;
       } else if (this.Personalizacion.Panuelo2 == 0) {
           this.panuelo12.visible = false;
           this.panuelo22.visible = false;
           this.panuelo32.visible = false;
           this.panuelo42.visible = false;
       }
    }
    //GATOS//
    updateCharacter1() {
        this.scene.start('ScenePersonalizacion');
    }

    enterButtonHoverState1() {
        this.boton1.setScale(1.1);
        this.gato1.setScale(0.30);
        this.gato12.setScale(0.12);
        this.gato13.setScale(0.3);
        this.gato14.setScale(0.3);
        this.sombrero1.setScale(0.12);
        this.sombrero2.setScale(0.12);
        this.sombrero3.setScale(0.12);
        this.sombrero4.setScale(0.12);
        this.panuelo1.setScale(0.12);
        this.panuelo2.setScale(0.12);
        this.panuelo3.setScale(0.12);
        this.panuelo4.setScale(0.12);
    }

    enterButtonRestState1() {
        this.boton1.setScale(1);   
        this.gato1.setScale(0.25);
        this.gato12.setScale(0.10);
        this.gato13.setScale(0.25);
        this.gato14.setScale(0.25);
        this.sombrero1.setScale(0.1);
        this.sombrero2.setScale(0.1);
        this.sombrero3.setScale(0.1);
        this.sombrero4.setScale(0.1);
        this.panuelo1.setScale(0.1);
        this.panuelo2.setScale(0.1);
        this.panuelo3.setScale(0.1);
        this.panuelo4.setScale(0.1);
    }

    updateCharacter2() {
        this.scene.start('ScenePersonalizacion');
    }

    enterButtonHoverState2() {
        this.boton2.setScale(1.1);
        this.gato2.setScale(0.12);
        this.gato21.setScale(0.30);
        this.gato23.setScale(0.3);
        this.gato24.setScale(0.3);
        this.sombrero21.setScale(0.12);
        this.sombrero22.setScale(0.12);
        this.sombrero23.setScale(0.12);
        this.sombrero24.setScale(0.12);
        this.panuelo12.setScale(0.12);
        this.panuelo22.setScale(0.12);
        this.panuelo32.setScale(0.12);
        this.panuelo42.setScale(0.12);
    }

    enterButtonRestState2() {
        this.boton2.setScale(1);
        this.gato2.setScale(0.10);
        this.gato21.setScale(0.25);
        this.gato23.setScale(0.25);
        this.gato24.setScale(0.25);
        this.sombrero21.setScale(0.1);
        this.sombrero22.setScale(0.1);
        this.sombrero23.setScale(0.1);
        this.sombrero24.setScale(0.1);
        this.panuelo12.setScale(0.1);
        this.panuelo22.setScale(0.1);
        this.panuelo32.setScale(0.1);
        this.panuelo42.setScale(0.1);

    }
    //MAPAS//
    updateText() {
        if (this.Desierto.visible) {
            this.Desierto.visible = false;
            this.Pueblo.visible = true;
            this.config.data.set('Escenario', 3);
        }
        else if (this.Pueblo.visible) {
            this.Pueblo.visible = false;
            this.Granero.visible = true;
            this.config.data.set('Escenario', 1);
        }
        else if (this.Granero.visible) {
            this.Granero.visible = false;
            this.Desierto.visible = true;
            this.config.data.set('Escenario', 2);
        }       
        
    }
    enterButtonHoverState3() {
        this.botonD2.setScale(1.1);
        this.botonI2.setScale(1.1);
        this.botMapas.setScale(1.05);
        this.Granero.setScale(1.05);
        this.Desierto.setScale(1.05);
        this.Pueblo.setScale(1.05);
    }

    enterButtonRestState3() {
        this.botonD2.setScale(1);
        this.botonI2.setScale(1);
        this.botMapas.setScale(1);
        this.Granero.setScale(1);
        this.Desierto.setScale(1);
        this.Pueblo.setScale(1);
    }
    
    updateText2() {
        if (this.Desierto.visible) {
            this.Desierto.visible = false;
            this.Granero.visible = true;
            this.config.data.set('Escenario', 1);
        }
        else if (this.Pueblo.visible) {
            this.Pueblo.visible = false;
            this.Desierto.visible = true;
            this.config.data.set('Escenario', 2);
        }
        else if (this.Granero.visible) {
            this.Pueblo.visible = true;
            this.Granero.visible = false;
            this.config.data.set('Escenario', 3);
        }

    }
    enterButtonHoverState4() {
        this.botonI2.setScale(1.1);
        this.botonD2.setScale(1.1);
        this.botMapas.setScale(1.05);
        this.Granero.setScale(1.05);
        this.Desierto.setScale(1.05);
        this.Pueblo.setScale(1.05);
    }

    enterButtonRestState4() {
        this.botonI2.setScale(1);
        this.botonD2.setScale(1);
        this.botMapas.setScale(1);
        this.Granero.setScale(1);
        this.Desierto.setScale(1);
        this.Pueblo.setScale(1);
    }

    //RONDAS//
    //Boton derecho
    updateText3() {
        if (this.Ronda1.visible) {
            this.Ronda1.visible = false;
            this.Ronda2.visible = true;
            this.config.data.set('Rondas', 2);
        } else if (this.Ronda2.visible) {
            this.Ronda2.visible = false;
            this.Ronda3.visible = true;
            this.config.data.set('Rondas', 3);
        } else if (this.Ronda3.visible) {
            this.Ronda3.visible = false;
            this.Ronda1.visible = true;
            this.config.data.set('Rondas', 1);
        }
    }
    enterButtonHoverState5() {
        this.botonI1.setScale(1.1);
        this.botonD1.setScale(1.1);
        this.botRondas.setScale(1.05);
        this.Ronda1.setScale(1.05);
        this.Ronda2.setScale(1.05);
        this.Ronda3.setScale(1.05);
    }

    enterButtonRestState5() {
        this.botonI1.setScale(1);
        this.botonD1.setScale(1);
        this.botRondas.setScale(1);
        this.Ronda1.setScale(1);
        this.Ronda2.setScale(1);
        this.Ronda3.setScale(1);
    }
    //Boton Izquierdo
    updateText4() {
        if (this.Ronda1.visible) {
            this.Ronda1.visible = false;
            this.Ronda3.visible = true;
            this.config.data.set('Rondas', 3);
        } else if (this.Ronda2.visible) {
            this.Ronda2.visible = false;
            this.Ronda1.visible = true;
            this.config.data.set('Rondas', 1);
        } else if (this.Ronda3.visible) {
            this.Ronda3.visible = false;
            this.Ronda2.visible = true;
            this.config.data.set('Rondas', 2);
        }
    }
    enterButtonHoverState6() {
        this.botonI1.setScale(1.1);
        this.botonD1.setScale(1.1);
        this.botRondas.setScale(1.05);
        this.Ronda1.setScale(1.05);
        this.Ronda2.setScale(1.05);
        this.Ronda3.setScale(1.05);
    }

    enterButtonRestState6() {
        this.botonI1.setScale(1);
        this.botonD1.setScale(1);
        this.botRondas.setScale(1);
        this.Ronda1.setScale(1);
        this.Ronda2.setScale(1);
        this.Ronda3.setScale(1);
    }
    //
    //ATRAS//
    atras() {
        //Cambio de escena
        this.scene.start('PantallaInicio');
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

        //this.scene.start('SceneGame', {Configuracion:this.config});
        this.scene.start('SceneGame', {
            Escenario: this.config.data.get('Escenario'),
            Rondas: this.config.data.get('Rondas'),
            Jugadores: this.Personalizacion
        });
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