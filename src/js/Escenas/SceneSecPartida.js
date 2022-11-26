class SceneSecPartida extends Phaser.Scene {
    constructor() {
        super({key:"SceneConf)"});
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
        //this.load.image('Puntero', 'assets/Puntero.cur');
        this.load.audio('MusicaFondo', 'assets/Sonidos/MusicaFondo.mp3');
       
    }
       
    
    create() {
        //this.input.setDefaultCursor('url(src/assets/Puntero.cur), pointer');
        //this.cursor=this.input.setDefaultCursor('url(src/assets/Puntero.cur), pointer');
        //this.musica = this.add.audio('MusicaFondo');
        
        this.fondo1 = this.add.image(540, 375, 'Fondo1');
        this.botSupI = this.add.image(425, 380, 'BotSupI');  
        this.botSupD = this.add.image(650, 380, 'BotSupD');
        this.botRondas = this.add.image(540, 515, 'BotRondas');
        this.botMapas = this.add.image(540, 595, 'BotMapas');
        
        
      
        this.key_W =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

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

        //this.puntero = this.add.image(pointer.x, pointer.y, 'Puntero');
        
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
        this.Granero = this.add.text(425, 570, "Mapa: Granero", { font: "40px Comic Sans", fill: "#000000", align: "center" });
        this.Pueblo = this.add.text(425, 570, "Mapa: Pueblo", { font: "40px Comic Sans", fill: "#000000", align: "center" });
        this.Desierto = this.add.text(425, 570, "Mapa: Desierto", { font: "40px Comic Sans", fill: "#000000", align: "center" });
        this.Ronda1 = this.add.text(450, 490, "Rondas: 1", { font: "40px Comic Sans", fill: "#000000", align: "center" });
        this.Ronda2 = this.add.text(450, 490, "Rondas: 2", { font: "40px Comic Sans", fill: "#000000", align: "center" });
        this.Ronda3 = this.add.text(450, 490, "Rondas: 3", { font: "40px Comic Sans", fill: "#000000", align: "center" });
        this.Atras = this.add.text(400, 650, "Atras", { font: "40px Comic Sans", fill: "#000000", align: "center" });
        this.Jugar = this.add.text(580, 650, "Jugar", { font: "40px Comic Sans", fill: "#000000", align: "center" });
        //this.nRondas=[1,2,3];
        //this.Rondas.setText("Rondas: 1");
        this.Ronda2.visible = false;
        this.Ronda3.visible = false;
        this.Pueblo.visible = false;
        this.Desierto.visible = false;
        //this.gato13.visible = false;
        //this.gato12.visible = false;
        //var Granero = new Boolean();
        //var Desierto = new Boolean();
        //var Pueblo = new Boolean();
        //this.gato2 = this.add.image(425, 380, 'Gato2').setScale(0.10);
        
    }
    //GATOS//
    updateCharacter1() {
        if (this.gato1.visible) {
            this.gato1.visible = false;
            this.gato12.visible = true;
            //this.gato13.visible = false;
        }
        else if (this.gato12.visible) {
            //this.gato1.visible = false;
            this.gato12.visible = false;
            this.gato13.visible = true;
        }
        else if (this.gato13.visible) {
            this.gato14.visible = true;
            //this.gato12.visible = false;
            this.gato13.visible = false;
        } else if (this.gato14.visible) {
            this.gato14.visible = false
            this.gato1.visible = true;
        }
        
    }

    enterButtonHoverState1() {
        this.boton1.setScale(1.1);
        this.gato1.setScale(0.30);
        this.gato12.setScale(0.12);
        this.gato13.setScale(0.3);
        this.gato14.setScale(0.3);
    }

    enterButtonRestState1() {
        this.boton1.setScale(1);   
        this.gato1.setScale(0.25);
        this.gato12.setScale(0.10);
        this.gato13.setScale(0.25);
        this.gato14.setScale(0.25);
        
    }

    updateCharacter2() {
        if (this.gato2.visible) {
            this.gato2.visible = false;
            this.gato21.visible = true;
            //this.gato13.visible = false;
        }
        else if (this.gato21.visible) {
            //this.gato1.visible = false;
            this.gato21.visible = false;
            this.gato23.visible = true;
        }
        else if (this.gato23.visible) {
            this.gato24.visible = true;
            //this.gato12.visible = false;
            this.gato23.visible = false;
        } else if (this.gato24.visible) {
            this.gato24.visible = false
            this.gato2.visible = true;
        }

    }

    enterButtonHoverState2() {
        this.boton2.setScale(1.1);
        this.gato2.setScale(0.12);
        this.gato21.setScale(0.30);
        this.gato23.setScale(0.3);
        this.gato24.setScale(0.3);
    }

    enterButtonRestState2() {
        this.boton2.setScale(1);
        this.gato2.setScale(0.10);
        this.gato21.setScale(0.25);
        this.gato23.setScale(0.25);
        this.gato24.setScale(0.25);

    }
    //MAPAS//
    updateText() {
        if (this.Desierto.visible) {
            this.Desierto.visible = false;
            this.Pueblo.visible = true;
            //this.Granero.visible = false;
        }
        else if (this.Pueblo.visible) {
            this.Pueblo.visible = false;
            this.Granero.visible = true;
            //this.Desierto.visible = false;
        }
        else if (this.Granero.visible) {
            //this.Pueblo.visible = false;
            this.Granero.visible = false;
            this.Desierto.visible = true;
        }       
        
    }
    enterButtonHoverState3() {
        this.botonD2.setScale(1.1);
        this.botonI2.setScale(1.1);
        this.botMapas.setScale(1.05);
        this.Granero.setScale(1.05);
        this.Desierto.setScale(1.05);
        this.Pueblo.setScale(1.05);
        //this.Granero.setText({ font: "50px Comic Sans", fill: "#000000", align: "center" });
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
            //this.Pueblo.visible = true;
            this.Granero.visible = true;
        }
        else if (this.Pueblo.visible) {
            this.Pueblo.visible = false;
            //this.Granero.visible = true;
            this.Desierto.visible = true;
        }
        else if (this.Granero.visible) {
            this.Pueblo.visible = true;
            this.Granero.visible = false;
            //this.Desierto.visible = true;
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
        } else if (this.Ronda2.visible) {
            this.Ronda2.visible = false;
            this.Ronda3.visible = true;
        } else if (this.Ronda3.visible) {
            this.Ronda3.visible = false;
            this.Ronda1.visible = true;
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
        } else if (this.Ronda2.visible) {
            this.Ronda2.visible = false;
            this.Ronda1.visible = true;
        } else if (this.Ronda3.visible) {
            this.Ronda3.visible = false;
            this.Ronda2.visible = true;
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
       //if(this.key_W.isDown)
       //    this.balaD1.y -= 5;
       //
       //if(this.key_A.isDown)
       //    this.balaD1.x -= 5;
       //
       //if(this.key_S.isDown)
       //    this.balaD1.y += 5;
       //
       //if(this.key_D.isDown)
       //    this.balaD1.x += 5;


        //this.musica.play();

        //zoneB1.body.debugBodyColor = zoneB1.body.touching.none ? 0x0099ff : 0xff9900;
    }
}