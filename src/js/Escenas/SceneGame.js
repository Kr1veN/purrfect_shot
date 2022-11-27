class SceneGame extends Phaser.Scene {
    constructor() {
        super({key:"SceneConf)"});
    }
    
    /*init ()
    {
        //  Inject our CSS
        var element = document.createElement('style');

        document.head.appendChild(element);

        var sheet = element.sheet;

        var styles = '@font-face { font-family: "Bonzer"; src: url("assets/fonts/BonzerSanFrancisco.ttf") format("truetype"); }\n';
        
        sheet.insertRule(styles, 0);
    }*/
    
    preload() {
        this.load.image('Fondo1', 'assets/Fondos/granerodia.png');
        this.load.image('Marco', 'assets/marco.png');
        this.load.spritesheet('Diana', 'assets/Diana.png', {frameWidth: 175, frameHeight: 300});
        
        this.load.image('Bueno1', 'assets/Personajes reescalados/Bueno1.png')
        this.load.image('Bueno1b', 'assets/Personajes reescalados/Bueno1b.png')
        this.load.image('Bueno2', 'assets/Personajes reescalados/Bueno2.png')
        this.load.image('Bueno2b', 'assets/Personajes reescalados/Bueno2b.png')
        this.load.image('Bueno3', 'assets/Personajes reescalados/Bueno3.png')
        this.load.image('Bueno3b', 'assets/Personajes reescalados/Bueno3b.png')
        
        this.load.image('Malo1', 'assets/Personajes reescalados/Malo1.png')
        this.load.image('Malo1b', 'assets/Personajes reescalados/Malo1b.png')
        this.load.image('Malo2', 'assets/Personajes reescalados/Malo2.png')
        this.load.image('Malo2b', 'assets/Personajes reescalados/Malo2b.png')
        this.load.image('Malo3', 'assets/Personajes reescalados/Malo3.png')
        this.load.image('Malo3b', 'assets/Personajes reescalados/Malo3b.png')
        this.load.image('Malo4', 'assets/Personajes reescalados/Malo4.png')
        this.load.image('Malo4b', 'assets/Personajes reescalados/Malo4b.png')
        
        this.load.image('Mirilla1', 'assets/MirillaJ1.png');
        this.load.image('Mirilla2', 'assets/MirillaJ2.png');
        //this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        this.load.bitmapFont('Bonzer', 'assets/fonts/BonzerSanFrancisco.png', 'assets/fonts/BonzerSanFrancisco.xml');
        this.load.bitmapFont('YW', 'assets/fonts/YatsuranoWestern.png', 'assets/fonts/YatsuranoWestern.xml');
    }
    
    create() {
        
            
            
        this.fondo1 = this.add.image(540,375,'Fondo1');
        this.marco = this.add.image(540,375,'Marco');
        
        
        /*var add = this.add;
        WebFont.load({
            custom: {
                families: [ 'Bonzer' ]
            },
            active: function ()
            {
                add.text(150, 350, 'Prueba', { fontFamily: 'Bonzer', fontSize: 64, color: '#5656ee' });
            }
        });*/
        
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
        this.dianas =  this.physics.add.group({
            key: 'Diana',
            repeat: 5,
            setXY: {x: 150, y: 550, stepX: 152}
        });
        
        // Hacer que las impares se muevan hacia arriba y cambiar las hitboxs
        var i=0;
        this.dianas.children.iterate(function(child){ // para todas las dianas
            if(i%2 == 1){
                child.y -= 100; // si es impar la subimos 100 px hacia arriba
            }
            child.body.setSize(95,125,false).setOffset(40,25); // cambiamos la hitbox
            
            child.anims.play('abajo', 'true'); // bajamos las dianas
            child.setDataEnabled();
            child.data.set('status', 0); //0 abajo, 1 arriba
            i++;
        });
        
    /*--------------------------------------------------------------------------------------------------------------------*/
        
        // Creamos el grupo en donde se guardan los personajes que hay en pantalla
        this.cats = this.physics.add.group();
        
    /*-----------------------------------------------------------------------------------------------------------------------*/
        
        // Mirilla Jugador 1 junto con sus arreglos de hitbox
        this.mirilla1 = this.physics.add.image(150,200,'Mirilla1');
        this.mirilla1.setCollideWorldBounds(true); // que no se salga de la pantalla
        this.mirilla1.body.setSize(10,10,true); // hitbox cuadrada centrada
        this.mirilla1.body.setCircle(5); // hitbox circular
        this.mirilla1.setDepth(50); // subimos la profundidad para que salga siempre por encima de los gatos de las dianas
        
        // Mirilla Jugador 2 junto con sus arreglos de hitbox
        this.mirilla2 = this.physics.add.image(930,200,'Mirilla2');
        this.mirilla2.setCollideWorldBounds(true);
        this.mirilla2.body.setSize(10,10,true);
        this.mirilla2.body.setCircle(5);
        this.mirilla1.setDepth(50);
        
        
        // Colisiones de las mirillas y las dianas
        this.physics.add.overlap(this.mirilla1, this.dianas, function(obj1, obj2){ // cuando hay overlap
            this.diana1 = obj2; // guardamos la última diana sobre la que ha estado el jugador
        }, null, this);
        
        this.physics.add.overlap(this.mirilla2, this.dianas, function(obj1, obj2){
            this.diana2 = obj2;
        }, null, this);
        
    /*-------------------------------------------------------------------------------------------------------------------*/
        
        // Puntuaciones
        this.scoreJ1 = 0;
        this.scoreJ2 = 0;
        this.scoreTextJ1 = this.add.bitmapText(100, 60, 'YW', 'Pts: 0', 30);
        this.scoreTextJ2 = this.add.bitmapText(880, 60, 'YW', 'Pts: 0', 30);
        
        // Balas
        this.bulletTextJ1 = this.add.bitmapText(62, 690, 'YW', '10', 40).setTint(0x000000);
        this.bulletTextJ2 = this.add.bitmapText(992, 690, 'YW', '50', 40).setTint(0x000000);
        
    /*---------------------------------------------------------------------------------------------------------------------*/
        
        // JUGADOR 1
        this.key_W =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_F =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.key_C =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
                
        // JUGADOR 2
        this.key_UP =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.key_LEFT =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_DOWN =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.key_RIGHT =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_HOME = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.HOME);
        this.key_END = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.END);
        
    }
    
/******************************************************** U P D A T E *******************************************************************/
    /*-----------------------------------------------------------------------------------------------------------------------------*/
    
    update(delta) {
        this.mirilla1.body.debugBodyColor = this.mirilla1.body.touching.none ? 0x00ffff : 0xffff00;
        //this.dianasUp();
        /*this.dianas.children.iterate(function(child){
            if(child.data.get('status') == 0){
                child.data.set('status', 1);
                this.time.delayedCall(Phaser.Math.Between(2000, 7000), this.dianasUp, [child], this);
            }
        }, this);*/
        
        
        // JUGADOR 1
        if(this.key_W.isDown){
            this.mirilla1.setVelocityY(-350);
        }
        else if(this.key_S.isDown){
            this.mirilla1.setVelocityY(350);
        }
        else {
            this.mirilla1.setVelocityY(0);
        }
        
        if(this.key_A.isDown){
            this.mirilla1.setVelocityX(-350);
        }
        else if(this.key_D.isDown){
            this.mirilla1.setVelocityX(350);
        }
        else{
            this.mirilla1.setVelocityX(0);
        }
        
        
        // Si se pulsa la tecla de disparar y la mirilla está pasando por la diana o está dentro "parada"
        if(this.key_F.isDown && (!this.mirilla1.body.touching.none || this.mirilla1.body.embedded)){
            
            if(this.diana1.data.get('status') == 1) { //si la diana está de pie
                
                this.diana1.anims.play('abajo', true); // la diana cae
                this.diana1.data.set('status', 0);
                
                this.removeDiana(this.mirilla1, this.diana1); // este jugador ha tirado esta diana
                this.scoreTextJ1.setText("Pts:" + this.scoreJ1); // se actualiza la puntuación
            }
        }
        
        if(this.key_C.isDown && (!this.mirilla1.body.touching.none || this.mirilla1.body.embedded)){
            if(this.diana1.data.get('status') == 0) { //si la diana está tumbada
                this.diana1.anims.play('arriba', true);
                this.diana1.data.set('status', 1);
                this.time.delayedCall(1000, this.createDiana, [this.diana1], this);
                //this.createDiana(this.diana1);
            }
        }
        
        
        // JUGADOR 2
        if(this.key_UP.isDown){
            this.mirilla2.setVelocityY(-350);
        }
        else if(this.key_DOWN.isDown){
            this.mirilla2.setVelocityY(350);
        }
        else {
            this.mirilla2.setVelocityY(0);
        }
        
        if(this.key_LEFT.isDown){
            this.mirilla2.setVelocityX(-350);
        }
        else if(this.key_RIGHT.isDown){
            this.mirilla2.setVelocityX(350);
        }
        else{
            this.mirilla2.setVelocityX(0);
        }
        
        
        if(this.key_HOME.isDown && (!this.mirilla2.body.touching.none || this.mirilla2.body.embedded)){
            
            if(this.diana2.data.get('status') == 1) { //si la diana está de pie
                
                this.diana2.anims.play('abajo', true);
                this.scoreJ2 += 5;
                
                this.scoreTextJ2.setText("Pts:" + this.scoreJ2);
                this.diana2.data.set('status', 0);
            }
        }
        
        if(this.key_END.isDown && (!this.mirilla2.body.touching.none || this.mirilla2.body.embedded)){
            if(this.diana2.data.get('status') == 0) { //si la diana está tumbada
                this.diana2.anims.play('arriba', true);
                this.diana2.data.set('status', 1);
            }
        }
        
    }
    
/******************************************************** C R E A T E   D I A N A *************************************************************/
    /*--------------------------------------------------------------------------------------------------------------------------------*/
    
    createDiana(objetivo){ // crea el gato que va a aparecer en la diana objetivo
        //65 por encima
        //this.time.addEvent({delay: 10000});
        
        var gato; // gato que se va a crear
        var tiempo; // el tiempo que va a estar esta diana subida
        
        var tipo = Phaser.Math.Between(1, 10); // bueno o malo?
        
        if(tipo<=4) { //30% de posibilidades de bueno
            var bueno = Phaser.Math.Between(1, 6); // cual de todos los buenos?
            
            if(bueno <= 1){ // bebé 1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno1');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'baby');
                gato.data.set('points', -5);
                
                //this.cats.add(gato);
                
                tiempo = 10000;
            }
            else if(bueno > 1 && bueno <= 2){ // bebé 2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno1b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'baby');
                gato.data.set('points', -5);
                
                //this.cats.add(gato);
                
                tiempo = 10000;
            }
            else if(bueno > 2 && bueno <= 3){ // civil 1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno2');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'civil');
                gato.data.set('points', -10);
                
                //this.cats.add(gato);
                
                tiempo = 8000;
            }
            else if(bueno > 3 && bueno <= 4){ // civil 2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno2b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'civil');
                gato.data.set('points', -10);
                
                //this.cats.add(gato);
                
                tiempo = 8000;
            }
            else if(bueno > 4 && bueno <= 5){ // médico 1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno3');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'doctor');
                gato.data.set('points', -50);
                
                //this.cats.add(gato);
                
                tiempo = 5000;
            }
            else if(bueno > 5 && bueno <= 6){ // médico 2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno3b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'doctor');
                gato.data.set('points', -50);
                
                //this.cats.add(gato);
                
                tiempo = 5000;
            }
        }
        else { // 70% posibilidades de malo
            var malo = Phaser.Math.Between(1, 8); // qué malo de todos?
            
            if(malo <= 1){ //  1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo1');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 5);
                
                //this.cats.add(gato);
                
                tiempo = 10000;
            }
            else if(malo <= 2){ //  2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo1b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 5);
                
                //this.cats.add(gato);
                
                tiempo = 10000;
            }
            else if(malo <= 3){ //  1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo2');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 10);
                
                //this.cats.add(gato);
                
                tiempo = 8000;
            }
            else if(malo <= 4){ //  2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo2b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 10);
                
                //this.cats.add(gato);
                
                tiempo = 8000;
            }
            else if(malo <= 5){ //  1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo3');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 20);
                
                //this.cats.add(gato);
                
                tiempo = 7000;
            }
            else if(malo <= 6){ //  2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo3b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 20);
                
                //this.cats.add(gato);
                
                tiempo = 7000;
            }
            else if(malo <= 7){ //  1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo4');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 50);
                
                //this.cats.add(gato);
                
                tiempo = 5000;
            }
            else if(malo <= 8){ //  2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo4b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 50);
                
                //this.cats.add(gato);
                
                tiempo = 5000;
            }
        }
        
        var timer = this.time.delayedCall(tiempo, this.removeDiana, [null, objetivo], this);
        gato.data.set('timer', timer); // asociamos el timer al gato creado
        console.log(timer);
        this.cats.add(gato);
        
    }
    
    removeDiana(jugador, objetivo){
        
        if(objetivo.data.get('status') == 1){ // si se ha llamado a la función desde el temporizador la diana está subida, si se ha disparado ya está bajada
            objetivo.anims.play('abajo', true);
            objetivo.data.set('status', 0);
        }
        
        var gato;
        this.cats.children.iterate(function(child){ // de todos los gatos de la escena
            if (child.x == objetivo.x && child.y == objetivo.y - 65) // sacamos el que se encuentra en la posición de la diana que se está bajando
                gato = child;
        });
        
        var timer = gato.data.get('timer'); // sacamos el temporizador creado para ese gato
        console.log(timer);
        timer.remove(false); // borramos el temporizador para que no se llame a la función otra vez
        
        if(jugador == this.mirilla1){ // si es el J1 el que dispara
            this.scoreJ1 += gato.data.get('points'); // se le suman sus puntos
            if(gato.data.get('points') > 0)
                this.points1 = this.add.bitmapText(130, 90, 'YW', '+' + gato.data.get('points'), 30, 1).setTint(0x95ff00);
            else
                this.points1 = this.add.bitmapText(130, 90, 'YW', gato.data.get('points'), 30, 1).setTint(0xff0000);
            this.time.delayedCall(600, this.removePoints, [this.points1], this);
        }
        else if(jugador == this.mirilla2){
            this.scoreJ2 += gato.data.get('points');
            if(gato.data.get('points') > 0)
                this.points2 = this.add.bitmapText(130, 90, 'YW', '+' + gato.data.get('points'), 30, 1).setTint(0x95ff00);
            else
                this.points2 = this.add.bitmapText(130, 90, 'YW', gato.data.get('points'), 30, 1).setTint(0xff0000);
            this.time.delayedCall(600, this.removePoints, [this.points2], this);
        }
        this.cats.remove(gato, true, true);
        
        //this.time.delayedCall(Phaser.Math.Between(2000, 7000), this.createDiana, [objetivo], this);
    }
    
    dianasUp(diana) {  
        diana.anims.play('arriba', 'true');
        this.time.delayedCall(1000, this.createDiana, [diana], this);
        
    }
    
    removePoints(puntos){
        puntos.destroy();
    }
}