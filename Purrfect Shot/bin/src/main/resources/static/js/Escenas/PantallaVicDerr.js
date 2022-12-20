class PantallaVicDerr extends Phaser.Scene{
    constructor(){
        super({key:'PantallaVicDerr'})
    }

    init(data) {
        this.stats = data;
        console.log(this.stats);
    }
preload(){
    
    this.load.image('FondoDesierto', 'assets/Fondos/desiertodia.png'),
        
    this.load.image('PantallaResultados', 'assets/Menus/MenusJuego/inGame/pantallaEstadisticas.png'),
    
    this.load.image('botOpciones', 'assets/Menus/MenusJuego/inGame/botEstadisticas.png');
    this.load.image('Pers1', 'assets/PersonajesResultados/PersonajeGatoBlanco.png');
    this.load.image('Pers2', 'assets/PersonajesResultados/PersonajeGatoTricolor.png');
    this.load.image('Pers3', 'assets/PersonajesResultados/PersonajeGatoNegro.png');
    this.load.image('Pers4', 'assets/PersonajesResultados/PersonajeGatoNaranja.png');

    this.load.image('Somb1', 'assets/PersonajesResultados/SombreroMarron.png');
    this.load.image('Somb2', 'assets/PersonajesResultados/Sombrero.png');
    this.load.image('Somb3', 'assets/PersonajesResultados/SombreroVerde.png');
    this.load.image('Somb4', 'assets/PersonajesResultados/SombreroNegro.png');

    this.load.image('Panu1', 'assets/PersonajesResultados/PanueloAzul.png');
    this.load.image('Panu2', 'assets/PersonajesResultados/PanueloLila.png');
    this.load.image('Panu3', 'assets/PersonajesResultados/PanueloRojo.png');
    this.load.image('Panu4', 'assets/PersonajesResultados/PanueloVerde.png');

    //this.load.bitmapFont('Letra', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
}

 create(){
     
   
    
    this.add.image(540, 375, 'FondoDesierto'),
        
    this.add.image(540,355, 'PantallaResultados').setScale(1.05)
     
     this.boton1 = this.add.image(540, 670, 'botOpciones')
         .setInteractive()
         .on('pointerdown', () => this.volver())
         .on('pointerover', () => this.enterButtonHoverState())
         .on('pointerout', () => this.enterButtonRestState());

     this.Volver = this.add.bitmapText(540, 670, 'Letra', "Volver a seleccion", 40, 1).setOrigin(0.5);
     this.Resultado = this.add.bitmapText(560, 55, 'Letra', "Resultado", 60, 1).setOrigin(0.5);
     this.Ganador = this.add.bitmapText(200, 200, 'Letra', "Ganador", 30, 1).setOrigin(0.5).setTint(0x95FF00);
     this.Perdedor = this.add.bitmapText(200, 200, 'Letra', "Perdedor", 30, 1).setOrigin(0.5).setTint(0xff0000);
     if (this.stats.PuntosJ1 > this.stats.PuntosJ2) {
         this.Ganador.setPosition(350, 200);
         this.Perdedor.setPosition(760, 200);
     } else if (this.stats.PuntosJ2 > this.stats.PuntosJ1) {
         this.Ganador.setPosition(760, 200);
         this.Perdedor.setPosition(350, 200);
     } else {
         this.Ganador.setPosition(350, 200).setText('Empate').setTint(0x000000);
         this.Perdedor.setPosition(760, 200).setText('Empate').setTint(0x000000);
     }

     this.Jugador1 = this.add.bitmapText(350, 500, 'Letra', 'Puntos: ' + this.stats.PuntosJ1 + '\nBalas Disparadas: ' + this.stats.BJ1 + '\nEnemigos Derrotados: '
         + this.stats.EnemiesJ1 + '\nAliados Heridos: ' + this.stats.AlliesJ1 + '\nPower UPs Recogidos: ' + this.stats.PUJ1, 25, 1).setOrigin(0.5).setTint(0x000000);

     this.Jugador2 = this.add.bitmapText(760, 500, 'Letra', 'Puntos: ' + this.stats.PuntosJ2 + '\nBalas Disparadas: ' + this.stats.BJ2 + '\nEnemigos Derrotados: '
         + this.stats.EnemiesJ2 + '\nAliados Heridos: ' + this.stats.AlliesJ2 + '\nPower UPs Recogidos: ' + this.stats.PUJ2, 25, 1).setOrigin(0.5).setTint(0x000000);

     this.shooter1 = this.add.group();
     // skin jugador 1
     var skin1;
     if (this.stats.Configuracion.Jugadores.Gato1 == 1) //Gato blanco
         skin1 = 'Pers1';
     else if (this.stats.Configuracion.Jugadores.Gato1 == 2) //Gato tricolor
         skin1 = 'Pers2';
     else if (this.stats.Configuracion.Jugadores.Gato1 == 3) //Gato tricolor
         skin1 = 'Pers3';
     else if (this.stats.Configuracion.Jugadores.Gato1 == 4)
         skin1 = 'Pers4';
     else {
         skin1 = 'Pers1';
     }

     this.shooter1.add(this.add.image(350, 330, skin1).setFlipX(true));

     // sombrero jugador 1
     var hat1;
     if (this.stats.Configuracion.Jugadores.Sombrero1 == 1) //Gato blanco
         hat1 = 'Somb1';
     else if (this.stats.Configuracion.Jugadores.Sombrero1 == 2) //Gato tricolor
         hat1 = 'Somb2';
     else if (this.stats.Configuracion.Jugadores.Sombrero1 == 3) //Gato tricolor
         hat1 = 'Somb3';
     else if (this.stats.Configuracion.Jugadores.Sombrero1 == 4)
         hat1 = 'Somb4';

     if (this.stats.Configuracion.Jugadores.Sombrero1 != 0) //Gato blanco
         this.shooter1.add(this.add.image(350, 330, hat1).setFlipX(true));

     // pañuelo jugador 1
     var scarf1;
     if (this.stats.Configuracion.Jugadores.Panuelo1 == 1) //Gato blanco
         scarf1 = 'Panu1';
     else if (this.stats.Configuracion.Jugadores.Panuelo1 == 2) //Gato tricolor
         scarf1 = 'Panu2';
     else if (this.stats.Configuracion.Jugadores.Panuelo1 == 3) //Gato tricolor
         scarf1 = 'Panu3';
     else if (this.stats.Configuracion.Jugadores.Panuelo1 == 4)
         scarf1 = 'Panu4';

     if (this.stats.Configuracion.Jugadores.Panuelo1 != 0) //Gato blanco
         this.shooter1.add(this.add.image(350, 330, scarf1).setFlipX(true));



     this.shooter2 = this.add.group();
     // skin jugador 2
     var skin2;
     if (this.stats.Configuracion.Jugadores.Gato2 == 1) //Gato blanco
         skin2 = 'Pers1';
     else if (this.stats.Configuracion.Jugadores.Gato2 == 2) //Gato tricolor
         skin2 = 'Pers2';
     else if (this.stats.Configuracion.Jugadores.Gato2 == 3) //Gato tricolor
         skin2 = 'Pers3';
     else if (this.stats.Configuracion.Jugadores.Gato2 == 4)
         skin2 = 'Pers4';
     else
         skin2 = 'Pers2';

     this.shooter2.add(this.add.image(760, 330, skin2));

     // sombrero jugador 2
     var hat2;
     if (this.stats.Configuracion.Jugadores.Sombrero2 == 1) //marron 
         hat2 = 'Somb1';
     else if (this.stats.Configuracion.Jugadores.Sombrero2 == 2) //beige
         hat2 = 'Somb2';
     else if (this.stats.Configuracion.Jugadores.Sombrero2 == 3) //verde
         hat2 = 'Somb3';
     else if (this.stats.Configuracion.Jugadores.Sombrero2 == 4) //gris
         hat2 = 'Somb4';

     if (this.stats.Configuracion.Jugadores.Sombrero2 != 0) //sin sombrero
         this.shooter2.add(this.add.image(760, 330, hat2));

     // pañuelo jugador 2
     var scarf2;
     if (this.stats.Configuracion.Jugadores.Panuelo2 == 1) //azul
         scarf2 = 'Panu1';
     else if (this.stats.Configuracion.Jugadores.Panuelo2 == 2) //violeta
         scarf2 = 'Panu2';
     else if (this.stats.Configuracion.Jugadores.Panuelo2 == 3) //rojo
         scarf2 = 'Panu3';
     else if (this.stats.Configuracion.Jugadores.Panuelo2 == 4) // verde
         scarf2 = 'Panu4';

     if (this.stats.Configuracion.Jugadores.Panuelo2 != 0) //sin pañuelo
         this.shooter1.add(this.add.image(760, 330, scarf2));
}
    volver() {
        this.scene.start('SceneSecPartida');
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

 update(){
    
}

}