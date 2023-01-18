class ScenePersonalizacion extends Phaser.Scene {
    constructor() {
        super({key:'ScenePersonalizacion'});
    }

	init(data){
		this.Config=data;
		console.log(this.Config);
	}
    preload() {
        
    }
       
    
    create() {
        this.config = this.add.image(0, 0, 'BotInfo');
        this.config.setDataEnabled();
        this.fondo1 = this.add.image(540, 375, 'Fondo1');
        this.fondo2 = this.add.image(540, 375, 'Fondo2');

        //Carga de imagenes//
        
        //Personajes
        this.gato1 = this.add.image(345, 380, 'Gato1');
        this.gato12 = this.add.image(345, 380, 'Gato2');
        this.gato13 = this.add.image(345, 380, 'Gato3');
        this.gato14 = this.add.image(345, 380, 'Gato4');
        this.gato2 = this.add.image(695, 380, 'Gato2');
        this.gato21 = this.add.image(695, 380, 'Gato1');
        this.gato23 = this.add.image(695, 380, 'Gato3');
        this.gato24 = this.add.image(695, 380, 'Gato4');
        this.gato14.visible = false;
        this.gato13.visible = false;
        this.gato12.visible = false;
        this.gato24.visible = false;
        this.gato23.visible = false;
        this.gato21.visible = false;
        
        //Sombreros
        this.sombrero1 = this.add.image(345, 379, 'Sombrero1');
        this.sombrero2 = this.add.image(345, 379, 'Sombrero2');
        this.sombrero3 = this.add.image(345, 379, 'Sombrero3');
        this.sombrero4 = this.add.image(345, 379, 'Sombrero4');
        this.sombrero21 = this.add.image(697, 379.5, 'Sombrero1');
        this.sombrero22 = this.add.image(697, 379.5, 'Sombrero2');
        this.sombrero23 = this.add.image(697, 379.5, 'Sombrero3');
        this.sombrero24 = this.add.image(697, 379.5, 'Sombrero4');
        this.sombrero1.visible = false;
        this.sombrero2.visible = false;
        this.sombrero3.visible = false;
        this.sombrero4.visible = false;
        this.sombrero21.visible = false;
        this.sombrero22.visible = false;
        this.sombrero23.visible = false;
        this.sombrero24.visible = false;
        
        //Pañuelos
        this.panuelo1 = this.add.image(345, 380, 'Panuelo1');
        this.panuelo2 = this.add.image(345, 380, 'Panuelo2');
        this.panuelo3 = this.add.image(345, 380, 'Panuelo3');
        this.panuelo4 = this.add.image(345, 380, 'Panuelo4');
        this.panuelo12 = this.add.image(697, 380, 'Panuelo1');
        this.panuelo22 = this.add.image(697, 380, 'Panuelo2');
        this.panuelo32 = this.add.image(697, 380, 'Panuelo3');
        this.panuelo42 = this.add.image(697, 380, 'Panuelo4');
        this.panuelo1.visible = false;
        this.panuelo2.visible = false;
        this.panuelo3.visible = false;
        this.panuelo4.visible = false;
        this.panuelo12.visible = false;
        this.panuelo22.visible = false;
        this.panuelo32.visible = false;
        this.panuelo42.visible = false;

        //BOTONES//
        this.botonD1 = this.add.image(490, 285, 'BalaD')
            .setInteractive()
            .on('pointerdown', () => this.cambioSombrero1())
            .on('pointerover', () => this.enterButtonHoverState1())
            .on('pointerout', () => this.enterButtonRestState1());
        
        this.botonI1 = this.add.image(220, 285, 'BalaI')
            .setInteractive()
            .on('pointerdown', () => this.cambioSombrero2())
            .on('pointerover', () => this.enterButtonHoverState2())
            .on('pointerout', () => this.enterButtonRestState2());
        
        this.botonD2 = this.add.image(855, 285, 'BalaD')
            .setInteractive()
            .on('pointerdown', () => this.cambioSombrero3())
            .on('pointerover', () => this.enterButtonHoverState3())
            .on('pointerout', () => this.enterButtonRestState3());
        
        this.botonI2 = this.add.image(565, 285, 'BalaI')
            .setInteractive()
            .on('pointerdown', () => this.cambioSombrero4())
            .on('pointerover', () => this.enterButtonHoverState4())
            .on('pointerout', () => this.enterButtonRestState4());
        
        this.botonD3 = this.add.image(490, 390, 'BalaD')
            .setInteractive()
            .on('pointerdown', () => this.cambioPanuelo1())
            .on('pointerover', () => this.enterButtonHoverState5())
            .on('pointerout', () => this.enterButtonRestState5());
        
        this.botonI3 = this.add.image(220, 390, 'BalaI')
            .setInteractive()
            .on('pointerdown', () => this.cambioPanuelo2())
            .on('pointerover', () => this.enterButtonHoverState6())
            .on('pointerout', () => this.enterButtonRestState6());
        
        this.botonD4 = this.add.image(855, 390, 'BalaD')
            .setInteractive()
            .on('pointerdown', () => this.cambioPanuelo3())
            .on('pointerover', () => this.enterButtonHoverState7())
            .on('pointerout', () => this.enterButtonRestState7());
        
        this.botonI4 = this.add.image(565, 390, 'BalaI')
            .setInteractive()
            .on('pointerdown', () => this.cambioPanuelo4())
            .on('pointerover', () => this.enterButtonHoverState8())
            .on('pointerout', () => this.enterButtonRestState8());

        this.botonGato1 = this.add.image(320, 550, 'CambioGato1').setScale(0.5)
            .setInteractive()
            .on('pointerdown', () => this.updateCharacter1())
            .on('pointerover', () => this.enterButtonHoverState9())
            .on('pointerout', () => this.enterButtonRestState9());

        this.botonGato2 = this.add.image(670, 550, 'CambioGato1').setScale(0.5)
            .setInteractive()
            .on('pointerdown', () => this.updateCharacter2())
            .on('pointerover', () => this.enterButtonHoverState10())
            .on('pointerout', () => this.enterButtonRestState10());

        this.botonInf1 = this.add.image(400, 550, 'BotInfo').setScale(0.5)
            .setInteractive()
            .on('pointerdown', () => this.info1())
            .on('pointerover', () => this.enterButtonHoverState11())
            .on('pointerout', () => this.enterButtonRestState11());

        this.botonInf2 = this.add.image(750, 550, 'BotInfo').setScale(0.5)
            .setInteractive()
            .on('pointerdown', () => this.info2())
            .on('pointerover', () => this.enterButtonHoverState12())
            .on('pointerout', () => this.enterButtonRestState12());

        this.botonAceptar = this.add.image(540, 620, 'BotJugar')
            .setInteractive()
            .on('pointerdown', () => this.jugar())
            .on('pointerover', () => this.enterButtonHoverState13())
            .on('pointerout', () => this.enterButtonRestState13());
        //
        
        this.Aceptar = this.add.bitmapText(480, 600,'Letra', "Aceptar",40,1);
        this.J1 = this.add.image(355, 123, 'BotJugar').setScale(1.2);
        this.J2 = this.add.image(705, 123, 'BotJugar').setScale(1.2);

        //INFO GATOS//
        this.Desc1 = this.add.image(345, 350, 'Descrip1');
        this.Desc1.visible = false;
        this.Desc12 = this.add.image(345, 350, 'Descrip2');
        this.Desc12.visible = false;
        this.Desc13 = this.add.image(345, 350, 'Descrip3');
        this.Desc13.visible = false;
        this.Desc14 = this.add.image(345, 350, 'Descrip4');
        this.Desc14.visible = false;

        this.Desc21 = this.add.image(745, 350, 'Descrip1');
        this.Desc21.visible = false;
        this.Desc22 = this.add.image(745, 350, 'Descrip2');
        this.Desc22.visible = false;
        this.Desc23 = this.add.image(745, 350, 'Descrip3');
        this.Desc23.visible = false;
        this.Desc24 = this.add.image(745, 350, 'Descrip4');
        this.Desc24.visible = false;

        //BOOLEANOS//
        var SinSombrero = new Boolean;
        this.SinSombrero = true;
        var SinSombrero2 = new Boolean;
        this.SinSombrero2 = true;
        var SinPanuelo = new Boolean;
        this.SinPanuelo = true;
        var SinPanuelo2 = new Boolean;
        this.SinPanuelo2 = true;

        this.config.data.set('Cat1', 1);
        this.config.data.set('Cat2', 2);
        this.config.data.set('Hat1', 0);
        this.config.data.set('Hat2', 0);
        this.config.data.set('Pan1', 0);
        this.config.data.set('Pan2', 0);
        
        
        var texto1=this.add.bitmapText(355,190,'Letra','Jugador 1',40,1).setOrigin(0.5);
		var element=this.add.dom(355,125).createFromCache('form');
		element.addListener('click');
		element.on('click', function(event){
			if(event.target.name=='nombrar1'){
				var inputUsername=this.getChildByName("name");
				
				if(inputUsername.value !== ''){
					texto1.setText(inputUsername.value);
					NombreJ1=inputUsername.value;
					inputUsername.value='';
				}	
			}
			
		});
		
		var texto2=this.add.bitmapText(705,190,'Letra','Jugador 2',40,1).setOrigin(0.5);
		var element2=this.add.dom(705,125).createFromCache('form');
		element2.addListener('click');
		element2.on('click', function(event){
			if(event.target.name=='nombrar1'){
				var inputUsername2=this.getChildByName("name");
				
				if(inputUsername2.value !== ''){
					texto2.setText(inputUsername2.value);
					NombreJ2=inputUsername2.value;
					inputUsername2.value='';
				}	
			}
			
		});
    }
    
    //GATOS//
    //SOMBRERO//
    cambioSombrero1() {
        if (this.sombrero1.visible) {
            this.sombrero1.visible = false;
            this.sombrero2.visible = true;
            this.config.data.set('Hat1', 2);
        }
        else if (this.sombrero2.visible) {
            this.sombrero2.visible = false;
            this.sombrero3.visible = true;
            this.config.data.set('Hat1', 3);
        }
        else if (this.sombrero3.visible) {
            this.sombrero4.visible = true;
            this.sombrero3.visible = false;
            this.config.data.set('Hat1', 4);
        } else if (this.sombrero4.visible) {
            this.sombrero4.visible = false
            this.SinSombrero = true; 
            this.config.data.set('Hat1', 0);
        } else if (this.SinSombrero) {
            this.sombrero1.visible = true;
            this.SinSombrero = false;
            this.config.data.set('Hat1', 1);
        }

    }

    enterButtonHoverState1() {
        this.botonD1.setScale(1.1);
    }

    enterButtonRestState1() {
        this.botonD1.setScale(1);
    }

    cambioSombrero2() {
        if (this.sombrero1.visible) {
            this.sombrero1.visible = false;
            this.SinSombrero = true;
            this.config.data.set('Hat1', 0);
        }
        else if (this.sombrero2.visible) {
            this.sombrero2.visible = false;
            this.sombrero1.visible = true;
            this.config.data.set('Hat1', 1);
        }
        else if (this.sombrero3.visible) {
            this.sombrero2.visible = true;
            this.sombrero3.visible = false;
            this.config.data.set('Hat1', 2);
        } else if (this.sombrero4.visible) {
            this.sombrero4.visible = false
            this.sombrero3.visible = true;
            this.config.data.set('Hat1', 3);
        } else if (this.SinSombrero) {
            this.sombrero4.visible = true;
            this.SinSombrero = false;
            this.config.data.set('Hat1', 4);
        }
        
    }

    enterButtonHoverState2() {
        this.botonI1.setScale(1.1);        
    }

    enterButtonRestState2() {
        this.botonI1.setScale(1);    
    }

    cambioSombrero3() {
        if (this.sombrero21.visible) {
            this.sombrero21.visible = false;
            this.sombrero22.visible = true;
            this.config.data.set('Hat2', 2);
        }
        else if (this.sombrero22.visible) {
            this.sombrero22.visible = false;
            this.sombrero23.visible = true;
            this.config.data.set('Hat2', 3);
        }
        else if (this.sombrero23.visible) {
            this.sombrero24.visible = true;
            this.sombrero23.visible = false;
            this.config.data.set('Hat2', 4);
        } else if (this.sombrero24.visible) {
            this.sombrero24.visible = false
            this.SinSombrero2 = true;
            this.config.data.set('Hat2', 0);
        } else if (this.SinSombrero2) {
            this.sombrero21.visible = true;
            this.SinSombrero2 = false;
            this.config.data.set('Hat2', 1);
        }

    }

    enterButtonHoverState3() {
        this.botonD2.setScale(1.1);
    }

    enterButtonRestState3() {
        this.botonD2.setScale(1);
    }

    cambioSombrero4() {
        if (this.sombrero21.visible) {
            this.sombrero21.visible = false;
            this.SinSombrero2 = true;
            this.config.data.set('Hat2', 0);
        }
        else if (this.sombrero22.visible) {
            this.sombrero22.visible = false;
            this.sombrero21.visible = true;
            this.config.data.set('Hat2', 1);
        }
        else if (this.sombrero23.visible) {
            this.sombrero22.visible = true;
            this.sombrero23.visible = false;
            this.config.data.set('Hat2', 2);
        } else if (this.sombrero24.visible) {
            this.sombrero24.visible = false
            this.sombrero23.visible = true;
            this.config.data.set('Hat2', 3);
        } else if (this.SinSombrero2) {
            this.sombrero24.visible = true;
            this.SinSombrero2 = false;
            this.config.data.set('Hat2', 4);
        }

    }

    enterButtonHoverState4() {
        this.botonI2.setScale(1.1);
    }

    enterButtonRestState4() {
        this.botonI2.setScale(1);
    }

    //
    //PA�UELOS//
    cambioPanuelo1() {
        if (this.panuelo1.visible) {
            this.panuelo1.visible = false;
            this.panuelo2.visible = true;
            this.config.data.set('Pan1', 2);
        }
        else if (this.panuelo2.visible) {
            this.panuelo2.visible = false;
            this.panuelo3.visible = true;
            this.config.data.set('Pan1', 3);
        }
        else if (this.panuelo3.visible) {
            this.panuelo4.visible = true;
            this.panuelo3.visible = false;
            this.config.data.set('Pan1', 4);
        } else if (this.panuelo4.visible) {
            this.panuelo4.visible = false
            this.SinPanuelo = true;
            this.config.data.set('Pan1', 0);
        } else if (this.SinPanuelo) {
            this.panuelo1.visible = true;
            this.SinPanuelo = false;
            this.config.data.set('Pan1', 1);
        }

    }

    enterButtonHoverState5() {
        this.botonD3.setScale(1.1);
    }

    enterButtonRestState5() {
        this.botonD3.setScale(1);
    }

    cambioPanuelo2() {
        if (this.panuelo1.visible) {
            this.panuelo1.visible = false;
            this.SinPanuelo = true;
            this.config.data.set('Pan1', 0);
        }
        else if (this.panuelo2.visible) {
            this.panuelo2.visible = false;
            this.panuelo1.visible = true;
            this.config.data.set('Pan1', 1);
        }
        else if (this.panuelo3.visible) {
            this.panuelo2.visible = true;
            this.panuelo3.visible = false;
            this.config.data.set('Pan1', 2);
        } else if (this.panuelo4.visible) {
            this.panuelo4.visible = false
            this.panuelo3.visible = true;
            this.config.data.set('Pan1', 3);
        } else if (this.SinPanuelo) {
            this.panuelo4.visible = true;
            this.SinPanuelo = false;
            this.config.data.set('Pan1', 4);
        }

    }

    enterButtonHoverState6() {
        this.botonI3.setScale(1.1);
    }

    enterButtonRestState6() {
        this.botonI3.setScale(1);
    }

    cambioPanuelo3() {
        if (this.panuelo12.visible) {
            this.panuelo12.visible = false;
            this.panuelo22.visible = true;
            this.config.data.set('Pan2', 2);
        }
        else if (this.panuelo22.visible) {
            this.panuelo22.visible = false;
            this.panuelo32.visible = true;
            this.config.data.set('Pan2', 3);
        }
        else if (this.panuelo32.visible) {
            this.panuelo42.visible = true;
            this.panuelo32.visible = false;
            this.config.data.set('Pan2', 4);
        } else if (this.panuelo42.visible) {
            this.panuelo42.visible = false
            this.SinPanuelo2 = true;
            this.config.data.set('Pan2', 0);
        } else if (this.SinPanuelo2) {
            this.panuelo12.visible = true;
            this.SinPanuelo2 = false;
            this.config.data.set('Pan2', 1);
        }

    }

    enterButtonHoverState7() {
        this.botonD4.setScale(1.1);
    }

    enterButtonRestState7() {
        this.botonD4.setScale(1);
    }

    cambioPanuelo4() {
        if (this.panuelo12.visible) {
            this.panuelo12.visible = false;
            this.SinPanuelo2 = true;
            this.config.data.set('Pan2', 0);
        }
        else if (this.panuelo22.visible) {
            this.panuelo22.visible = false;
            this.panuelo12.visible = true;
            this.config.data.set('Pan2', 1);
        }
        else if (this.panuelo32.visible) {
            this.panuelo22.visible = true;
            this.panuelo32.visible = false;
            this.config.data.set('Pan2', 2);
        } else if (this.panuelo42.visible) {
            this.panuelo42.visible = false
            this.panuelo32.visible = true;
            this.config.data.set('Pan2', 3);
        } else if (this.SinPanuelo2) {
            this.panuelo42.visible = true;
            this.SinPanuelo2 = false;
            this.config.data.set('Pan2', 4);
        }

    }

    enterButtonHoverState8() {
        this.botonI4.setScale(1.1);
    }

    enterButtonRestState8() {
        this.botonI4.setScale(1);
    }

    //CAMBIO PERSONAJE//
    updateCharacter1() {
        if (this.gato1.visible) {
            this.gato1.visible = false;
            this.gato12.visible = true;
            this.config.data.set('Cat1', 2);
        }
        else if (this.gato12.visible) {
            this.gato12.visible = false;
            this.gato13.visible = true;
            this.config.data.set('Cat1', 3);
        }
        else if (this.gato13.visible) {
            this.gato14.visible = true;
            this.gato13.visible = false;
            this.config.data.set('Cat1', 4);
        } else if (this.gato14.visible) {
            this.gato14.visible = false
            this.gato1.visible = true;
            this.config.data.set('Cat1', 1);
        }
    
    }
    
    enterButtonHoverState9() {
        this.botonGato1.setScale(0.6);
    }
    
    enterButtonRestState9() {
        this.botonGato1.setScale(0.5);
    }

    updateCharacter2() {
        if (this.gato2.visible) {
            this.gato2.visible = false;
            this.gato21.visible = true;
            this.config.data.set('Cat2', 1);
        }
        else if (this.gato21.visible) {
            this.gato21.visible = false;
            this.gato23.visible = true;
            this.config.data.set('Cat2', 3);
        }
        else if (this.gato23.visible) {
            this.gato24.visible = true;
            this.gato23.visible = false;
            this.config.data.set('Cat2', 4);
        } else if (this.gato24.visible) {
            this.gato24.visible = false
            this.gato2.visible = true;
            this.config.data.set('Cat2', 2);
        }

    }

    enterButtonHoverState10() {
        this.botonGato2.setScale(0.6);
    }

    enterButtonRestState10() {
        this.botonGato2.setScale(0.5);
    }

    enterButtonHoverState11() {
        if (this.gato1.visible) {
            this.Desc1.visible = true;
        } else if (this.gato12.visible) {
            this.Desc12.visible = true;
        } else if (this.gato13.visible) {
            this.Desc13.visible = true;
        } else if (this.gato14.visible) {
            this.Desc14.visible = true;
        }
    }

    enterButtonRestState11() {
        this.Desc1.visible = false;
        this.Desc12.visible = false;
        this.Desc13.visible = false;
        this.Desc14.visible = false;
    }

    enterButtonHoverState12() {
        if (this.gato2.visible) {
            this.Desc22.visible = true;
        } else if (this.gato21.visible) {
            this.Desc21.visible = true;
        } else if (this.gato23.visible) {
            this.Desc23.visible = true;
        } else if (this.gato24.visible) {
            this.Desc24.visible = true;
        }
    }

    enterButtonRestState12() {
        this.Desc21.visible = false;
        this.Desc22.visible = false;
        this.Desc23.visible = false;
        this.Desc24.visible = false;
    }
    
    jugar() {
        //Cambio de escena
        this.scene.start('SceneSecPartida', {
            Gato1: this.config.data.get('Cat1'),
            Gato2: this.config.data.get('Cat2'),
            Sombrero1: this.config.data.get('Hat1'),
            Sombrero2: this.config.data.get('Hat2'),
            Panuelo1: this.config.data.get('Pan1'),
            Panuelo2: this.config.data.get('Pan2')
        });
    }
    enterButtonHoverState13() {
        this.botonAceptar.setScale(1.1);
        this.Aceptar.setScale(1.05);
    }
    
    enterButtonRestState13() {
        this.botonAceptar.setScale(1);
        this.Aceptar.setScale(1);
    }

    update(delta) {
      
    }
}