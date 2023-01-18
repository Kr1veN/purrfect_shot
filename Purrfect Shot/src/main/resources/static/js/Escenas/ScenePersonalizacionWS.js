class ScenePersonalizacionWS extends Phaser.Scene {
    constructor() {
        super({key:'ScenePersonalizacionWS'});
    }

	init(data){
		this.Config = data;
		console.log(this.Config);
	}
    preload() {
        
    }
       
    
    create() {
        this.fondo1 = this.add.image(540, 375, 'Fondo1');
        this.fondo2 = this.add.image(540, 375, 'Fondo2');
        
        connection.addEventListener('message', this.handleMessages);

        //Carga de imagenes//
        
        //Personajes
        if(idJugador == 1){
	        this.gato1 = this.add.image(540, 380, 'Gato1');
	        this.gato12 = this.add.image(540, 380, 'Gato2');
	        this.gato13 = this.add.image(540, 380, 'Gato3');
	        this.gato14 = this.add.image(540, 380, 'Gato4');
	        
	        if(this.Config.Gato1 == 1){
				this.gato14.visible = false;
	        	this.gato13.visible = false;
	        	this.gato12.visible = false;
			}
			else if(this.Config.Gato1 == 2){
				this.gato14.visible = false;
	        	this.gato13.visible = false;
	        	this.gato1.visible = false;
			}
			else if(this.Config.Gato1 == 3){
				this.gato14.visible = false;
	        	this.gato1.visible = false;
	        	this.gato12.visible = false;
			}
			else if(this.Config.Gato1 == 4){
				this.gato1.visible = false;
	        	this.gato13.visible = false;
	        	this.gato12.visible = false;
			}
			else {
				this.gato14.visible = false;
	        	this.gato13.visible = false;
	        	this.gato12.visible = false;
			}
	        
        	
        	this.sombrero1 = this.add.image(540, 379, 'Sombrero1');
	        this.sombrero2 = this.add.image(540, 379, 'Sombrero2');
	        this.sombrero3 = this.add.image(540, 379, 'Sombrero3');
	        this.sombrero4 = this.add.image(540, 379, 'Sombrero4');
	        
	        if(this.Config.Sombrero1 == 1){
		        this.sombrero2.visible = false;
		        this.sombrero3.visible = false;
		        this.sombrero4.visible = false;
			}
			else if(this.Config.Sombrero1 == 2){
				this.sombrero1.visible = false;
		        this.sombrero3.visible = false;
		        this.sombrero4.visible = false;
			}
			else if(this.Config.Sombrero1 == 3){
				this.sombrero1.visible = false;
		        this.sombrero2.visible = false;
		        this.sombrero4.visible = false;
			}
			else if(this.Config.Sombrero1 == 4){
				this.sombrero1.visible = false;
		        this.sombrero2.visible = false;
		        this.sombrero3.visible = false;
			}
			else {
				this.sombrero1.visible = false;
		        this.sombrero2.visible = false;
		        this.sombrero3.visible = false;
		        this.sombrero4.visible = false;
			}
	       
	        
	        this.panuelo1 = this.add.image(540, 380, 'Panuelo1');
	        this.panuelo2 = this.add.image(540, 380, 'Panuelo2');
	        this.panuelo3 = this.add.image(540, 380, 'Panuelo3');
	        this.panuelo4 = this.add.image(540, 380, 'Panuelo4');
	        
	  		if(this.Config.Panuelo1 == 1){
		        this.panuelo2.visible = false;
		        this.panuelo3.visible = false;
		        this.panuelo4.visible = false;
			}
			else if(this.Config.Panuelo1 == 2){
				this.panuelo1.visible = false;
		        this.panuelo3.visible = false;
		        this.panuelo4.visible = false;
			}
			else if(this.Config.Panuelo1 == 3){
				this.panuelo1.visible = false;
		        this.panuelo2.visible = false;
		        this.panuelo4.visible = false;
			}
			else if(this.Config.Panuelo1 == 4){
				this.panuelo1.visible = false;
		        this.panuelo2.visible = false;
		        this.panuelo3.visible = false;
			}
			else {
				this.panuelo1.visible = false;
		        this.panuelo2.visible = false;
		        this.panuelo3.visible = false;
		        this.panuelo4.visible = false;
			}
	        
        }
        if(idJugador == 2){
	        this.gato2 = this.add.image(540, 380, 'Gato2');
	        this.gato21 = this.add.image(540, 380, 'Gato1');
	        this.gato23 = this.add.image(540, 380, 'Gato3');
	        this.gato24 = this.add.image(540, 380, 'Gato4');
        	
        	if(this.Config.Gato2 == 1){
				this.gato24.visible = false;
	        	this.gato23.visible = false;
	        	this.gato2.visible = false;
			}
			else if(this.Config.Gato2 == 2){
				this.gato24.visible = false;
	        	this.gato23.visible = false;
	        	this.gato21.visible = false;
			}
			else if(this.Config.Gato2 == 3){
				this.gato24.visible = false;
	        	this.gato2.visible = false;
	        	this.gato21.visible = false;
			}
			else if(this.Config.Gato2 == 4){
				this.gato21.visible = false;
	        	this.gato23.visible = false;
	        	this.gato2.visible = false;
			}
			else {
				this.gato24.visible = false;
	        	this.gato23.visible = false;
	        	this.gato21.visible = false;
			}
        	
        	this.sombrero21 = this.add.image(540, 380, 'Sombrero1');
	        this.sombrero22 = this.add.image(540, 380, 'Sombrero2');
	        this.sombrero23 = this.add.image(540, 380, 'Sombrero3');
	        this.sombrero24 = this.add.image(540, 380, 'Sombrero4');
	        
	        if(this.Config.Sombrero2 == 1){
		        this.sombrero22.visible = false;
		        this.sombrero23.visible = false;
		        this.sombrero24.visible = false;
			}
			else if(this.Config.Sombrero2 == 2){
				this.sombrero21.visible = false;
		        this.sombrero23.visible = false;
		        this.sombrero24.visible = false;
			}
			else if(this.Config.Sombrero2 == 3){
				this.sombrero21.visible = false;
		        this.sombrero22.visible = false;
		        this.sombrero24.visible = false;
			}
			else if(this.Config.Sombrero2 == 4){
				this.sombrero21.visible = false;
		        this.sombrero22.visible = false;
		        this.sombrero23.visible = false;
			}
			else {
				this.sombrero21.visible = false;
		        this.sombrero22.visible = false;
		        this.sombrero23.visible = false;
		        this.sombrero24.visible = false;
			}
        	
        	this.panuelo12 = this.add.image(540, 380, 'Panuelo1');
        	this.panuelo22 = this.add.image(540, 380, 'Panuelo2');
        	this.panuelo32 = this.add.image(540, 380, 'Panuelo3');
        	this.panuelo42 = this.add.image(540, 380, 'Panuelo4');
        	
			if(this.Config.Panuelo2 == 1){
		        this.panuelo22.visible = false;
		        this.panuelo32.visible = false;
		        this.panuelo42.visible = false;
			}
			else if(this.Config.Panuelo2 == 2){
				this.panuelo12.visible = false;
		        this.panuelo32.visible = false;
		        this.panuelo42.visible = false;
			}
			else if(this.Config.Panuelo2 == 3){
				this.panuelo12.visible = false;
		        this.panuelo22.visible = false;
		        this.panuelo42.visible = false;
			}
			else if(this.Config.Panuelo2 == 4){
				this.panuelo12.visible = false;
		        this.panuelo22.visible = false;
		        this.panuelo32.visible = false;
			}
			else {
				this.panuelo12.visible = false;
		        this.panuelo22.visible = false;
		        this.panuelo32.visible = false;
		        this.panuelo42.visible = false;
			}
        }

        //BOTONES//
        
        if(idJugador == 1){
			this.botonD1 = this.add.image(675, 285, 'BalaD')
	            .setInteractive()
	            .on('pointerdown', () => this.cambioSombrero1())
	            .on('pointerover', () => this.enterButtonHoverState1())
	            .on('pointerout', () => this.enterButtonRestState1());
            
            this.botonI1 = this.add.image(405, 285, 'BalaI')
	            .setInteractive()
	            .on('pointerdown', () => this.cambioSombrero2())
	            .on('pointerover', () => this.enterButtonHoverState2())
	            .on('pointerout', () => this.enterButtonRestState2());
	            
	        this.botonD3 = this.add.image(675, 390, 'BalaD')
	            .setInteractive()
	            .on('pointerdown', () => this.cambioPanuelo1())
	            .on('pointerover', () => this.enterButtonHoverState5())
	            .on('pointerout', () => this.enterButtonRestState5());
	        
	        this.botonI3 = this.add.image(405, 390, 'BalaI')
	            .setInteractive()
	            .on('pointerdown', () => this.cambioPanuelo2())
	            .on('pointerover', () => this.enterButtonHoverState6())
	            .on('pointerout', () => this.enterButtonRestState6());    
	            
	        this.botonGato1 = this.add.image(500, 170, 'CambioGato1').setScale(0.5)
	            .setInteractive()
	            .on('pointerdown', () => this.updateCharacter1())
	            .on('pointerover', () => this.enterButtonHoverState9())
	            .on('pointerout', () => this.enterButtonRestState9());
	            
            this.botonInf1 = this.add.image(580, 170, 'BotInfo').setScale(0.5)
	            .setInteractive()
	            .on('pointerover', () => this.enterButtonHoverState11())
	            .on('pointerout', () => this.enterButtonRestState11());
		}
        
        if(idJugador == 2) {
			this.botonD2 = this.add.image(675, 285, 'BalaD')
	            .setInteractive()
	            .on('pointerdown', () => this.cambioSombrero3())
	            .on('pointerover', () => this.enterButtonHoverState3())
	            .on('pointerout', () => this.enterButtonRestState3());
	        
	        this.botonI2 = this.add.image(405, 285, 'BalaI')
	            .setInteractive()
	            .on('pointerdown', () => this.cambioSombrero4())
	            .on('pointerover', () => this.enterButtonHoverState4())
	            .on('pointerout', () => this.enterButtonRestState4());
	        
	        this.botonD4 = this.add.image(675, 390, 'BalaD')
	            .setInteractive()
	            .on('pointerdown', () => this.cambioPanuelo3())
	            .on('pointerover', () => this.enterButtonHoverState7())
	            .on('pointerout', () => this.enterButtonRestState7());
	        
	        this.botonI4 = this.add.image(405, 390, 'BalaI')
	            .setInteractive()
	            .on('pointerdown', () => this.cambioPanuelo4())
	            .on('pointerover', () => this.enterButtonHoverState8())
	            .on('pointerout', () => this.enterButtonRestState8());
	
	        this.botonGato2 = this.add.image(500, 170, 'CambioGato1').setScale(0.5)
	            .setInteractive()
	            .on('pointerdown', () => this.updateCharacter2())
	            .on('pointerover', () => this.enterButtonHoverState10())
	            .on('pointerout', () => this.enterButtonRestState10());
	
	        this.botonInf2 = this.add.image(580, 170, 'BotInfo').setScale(0.5)
	            .setInteractive()
	            .on('pointerover', () => this.enterButtonHoverState12())
	            .on('pointerout', () => this.enterButtonRestState12());
		}
        
        this.botonAceptar = this.add.image(540, 600, 'BotJugar')
            .setInteractive()
            .on('pointerdown', () => this.jugar())
            .on('pointerover', () => this.enterButtonHoverState13())
            .on('pointerout', () => this.enterButtonRestState13());
        //
        
        this.Aceptar = this.add.bitmapText(480, 580,'Letra', "Aceptar",40,1);

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
        this.SinSombrero = true;
        this.SinSombrero2 = true;
        this.SinPanuelo = true;
        this.SinPanuelo2 = true;

        
    }
    
    handleMessages = (msg) => {
		var datos = JSON.parse(msg.data);
		
		if(datos.name == 'Personalizacion'){
			if(idJugador == 1){
				this.Config.Gato2 = datos.message.Gato2;
				this.Config.Sombrero2 = datos.message.Sombrero2;
				this.Config.Panuelo2 = datos.message.Panuelo2;
			}
			if(idJugador == 2){
				this.Config.Gato1 = datos.message.Gato1;
				this.Config.Sombrero1 = datos.message.Sombrero1;
				this.Config.Panuelo1 = datos.message.Panuelo1;
			}
		}
	}
    
    //GATOS//
    //SOMBRERO//
    cambioSombrero1() {
        if (this.sombrero1.visible) {
            this.sombrero1.visible = false;
            this.sombrero2.visible = true;
            this.Config.Sombrero1 = 2;
        }
        else if (this.sombrero2.visible) {
            this.sombrero2.visible = false;
            this.sombrero3.visible = true;
            this.Config.Sombrero1 = 3;
        }
        else if (this.sombrero3.visible) {
            this.sombrero4.visible = true;
            this.sombrero3.visible = false;
            this.Config.Sombrero1 = 4;
        } else if (this.sombrero4.visible) {
            this.sombrero4.visible = false
            this.SinSombrero = true; 
            this.Config.Sombrero1 = 0;
        } else if (this.SinSombrero) {
            this.sombrero1.visible = true;
            this.SinSombrero = false;
            this.Config.Sombrero1 = 1;
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
            this.Config.Sombrero1 = 0;
        }
        else if (this.sombrero2.visible) {
            this.sombrero2.visible = false;
            this.sombrero1.visible = true;
            this.Config.Sombrero1 = 1;
        }
        else if (this.sombrero3.visible) {
            this.sombrero2.visible = true;
            this.sombrero3.visible = false;
            this.Config.Sombrero1 = 2;
        } else if (this.sombrero4.visible) {
            this.sombrero4.visible = false
            this.sombrero3.visible = true;
            this.Config.Sombrero1 = 3;
        } else if (this.SinSombrero) {
            this.sombrero4.visible = true;
            this.SinSombrero = false;
            this.Config.Sombrero1 = 4;
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
            this.Config.Sombrero2 = 2;
        }
        else if (this.sombrero22.visible) {
            this.sombrero22.visible = false;
            this.sombrero23.visible = true;
            this.Config.Sombrero2 = 3;
        }
        else if (this.sombrero23.visible) {
            this.sombrero24.visible = true;
            this.sombrero23.visible = false;
            this.Config.Sombrero2 = 4;
        } else if (this.sombrero24.visible) {
            this.sombrero24.visible = false
            this.SinSombrero2 = true;
            this.Config.Sombrero2 = 0;
        } else if (this.SinSombrero2) {
            this.sombrero21.visible = true;
            this.SinSombrero2 = false;
            this.Config.Sombrero2 = 1;
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
            this.Config.Sombrero2 = 0;
        }
        else if (this.sombrero22.visible) {
            this.sombrero22.visible = false;
            this.sombrero21.visible = true;
            this.Config.Sombrero2 = 1;
        }
        else if (this.sombrero23.visible) {
            this.sombrero22.visible = true;
            this.sombrero23.visible = false;
            this.Config.Sombrero2 = 2;
        } else if (this.sombrero24.visible) {
            this.sombrero24.visible = false
            this.sombrero23.visible = true;
            this.Config.Sombrero2 = 3;
        } else if (this.SinSombrero2) {
            this.sombrero24.visible = true;
            this.SinSombrero2 = false;
            this.Config.Sombrero2 = 4;
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
            this.Config.Panuelo1 = 2;
        }
        else if (this.panuelo2.visible) {
            this.panuelo2.visible = false;
            this.panuelo3.visible = true;
            this.Config.Panuelo1 = 3;
        }
        else if (this.panuelo3.visible) {
            this.panuelo4.visible = true;
            this.panuelo3.visible = false;
            this.Config.Panuelo1 = 4;
        } else if (this.panuelo4.visible) {
            this.panuelo4.visible = false
            this.SinPanuelo = true;
            this.Config.Panuelo1 = 0;
        } else if (this.SinPanuelo) {
            this.panuelo1.visible = true;
            this.SinPanuelo = false;
            this.Config.Panuelo1 = 1;
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
            this.Config.Panuelo1 = 0;
        }
        else if (this.panuelo2.visible) {
            this.panuelo2.visible = false;
            this.panuelo1.visible = true;
            this.Config.Panuelo1 = 1;
        }
        else if (this.panuelo3.visible) {
            this.panuelo2.visible = true;
            this.panuelo3.visible = false;
            this.Config.Panuelo1 = 2;
        } else if (this.panuelo4.visible) {
            this.panuelo4.visible = false
            this.panuelo3.visible = true;
            this.Config.Panuelo1 = 3;
        } else if (this.SinPanuelo) {
            this.panuelo4.visible = true;
            this.SinPanuelo = false;
            this.Config.Panuelo1 = 4;
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
            this.Config.Panuelo2 = 2;
        }
        else if (this.panuelo22.visible) {
            this.panuelo22.visible = false;
            this.panuelo32.visible = true;
            this.Config.Panuelo2 = 3;
        }
        else if (this.panuelo32.visible) {
            this.panuelo42.visible = true;
            this.panuelo32.visible = false;
            this.Config.Panuelo2 = 4;
        } else if (this.panuelo42.visible) {
            this.panuelo42.visible = false
            this.SinPanuelo2 = true;
            this.Config.Panuelo2 = 0;
        } else if (this.SinPanuelo2) {
            this.panuelo12.visible = true;
            this.SinPanuelo2 = false;
            this.Config.Panuelo2 = 1;
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
            this.Config.Panuelo2 = 0;
        }
        else if (this.panuelo22.visible) {
            this.panuelo22.visible = false;
            this.panuelo12.visible = true;
            this.Config.Panuelo2 = 1;
        }
        else if (this.panuelo32.visible) {
            this.panuelo22.visible = true;
            this.panuelo32.visible = false;
            this.Config.Panuelo2 = 2;
        } else if (this.panuelo42.visible) {
            this.panuelo42.visible = false
            this.panuelo32.visible = true;
            this.Config.Panuelo2 = 3;
        } else if (this.SinPanuelo2) {
            this.panuelo42.visible = true;
            this.SinPanuelo2 = false;
            this.Config.Panuelo2 = 4;
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
            this.Config.Gato1 = 2;
        }
        else if (this.gato12.visible) {
            this.gato12.visible = false;
            this.gato13.visible = true;
            this.Config.Gato1 = 3;
        }
        else if (this.gato13.visible) {
            this.gato14.visible = true;
            this.gato13.visible = false;
            this.Config.Gato1 = 4;
        } else if (this.gato14.visible) {
            this.gato14.visible = false
            this.gato1.visible = true;
            this.Config.Gato1 = 1;
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
            this.Config.Gato2 = 1;
        }
        else if (this.gato21.visible) {
            this.gato21.visible = false;
            this.gato23.visible = true;
            this.Config.Gato2 = 3;
        }
        else if (this.gato23.visible) {
            this.gato24.visible = true;
            this.gato23.visible = false;
            this.Config.Gato2 = 4;
        } else if (this.gato24.visible) {
            this.gato24.visible = false
            this.gato2.visible = true;
            this.Config.Gato2 = 2;
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
        var msg = {
			name: 'Personalizacion',
			destination: 'Others',
			message: this.Config
		};
		
		connection.send(JSON.stringify(msg));
        
        connection.removeEventListener('message', this.handleMessages);
        
        this.scene.start('SceneSecPartidaWS', this.Config);
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