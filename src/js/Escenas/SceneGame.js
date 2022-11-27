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
        this.dianas.children.iterate(function(child){
            if(i%2 == 1){
                child.y -= 100;
            }
            child.body.setSize(95,125,false).setOffset(40,25);
            
            child.anims.play('abajo', 'true');
            child.setDataEnabled();
            child.data.set('status', 0); //0 abajo, 1 arriba
            i++;
        });
        
    /*--------------------------------------------------------------------------------------------------------------------*/
        
            
        // Metemos todos los NPCs, es decir, a los que no hay que disparar
        this.cats = this.physics.add.group();
        /*this.npcs.create(150,485,'Bueno1');
        this.npcs.create(200,300,'Bueno1b');
        this.npcs.create(300,485,'Bueno2');
        this.npcs.create(400,300,'Bueno2b');
        this.npcs.create(500,485,'Bueno3');
        this.npcs.create(600,300,'Bueno3b');
        
        i = 0;
        this.npcs.children.iterate(function(child){
            child.body.setSize(95,125,true);
            child.setDataEnabled();
            if(i==0 || i==1){ // bebés
                child.data.set('type', 'baby');
                child.data.set('points', -5);
            } 
            else if (i==2 || i==3){ // civiles
                child.data.set('type', 'civil');
                child.data.set('points', -10);
            } 
            else { // doctores
                child.data.set('type', 'doctor');
                child.data.set('points', -50)
            }
            i++;
        });*/
        
        // Metemos todos los malos, es decir, a los que sí hay que disparar
        //this.cats = this.physics.add.group();
        /*this.malos.create(100,500,'Malo1',0,false,true);
        this.malos.create(200,500,'Malo1b',0,false,true);
        this.malos.create(300,500,'Malo2',0,false,true);
        this.malos.create(400,500,'Malo2b',0,false,true);
        this.malos.create(500,500,'Malo3',0,false,true);
        this.malos.create(600,500,'Malo3b',0,false,true);
        this.malos.create(700,500,'Malo4',0,false,true);
        this.malos.create(800,500,'Malo4b',0,false,true);
        
        i = 0;
        this.malos.children.iterate(function(child){
            child.body.setSize(95,125,true);
            child.setDataEnabled();
            if(i==0 || i==1){
                child.data.set('type', 'baby');
                child.data.set('points', 5);
            } 
            else if (i==2 || i==3){ //
                child.data.set('type', 'civil');
                child.data.set('points', 10);
            } 
            else if (i==4 || i== 5){ //
                child.data.set('type', 'doctor');
                child.data.set('points', 20)
            } 
            else { //
                child.data.set('type', '');
                child.data.set('points', 50)
            }
            i++;
        });*/
        
    /*-----------------------------------------------------------------------------------------------------------------------*/
        
        //this.diana = this.physics.add.sprite(150,500,'Diana');
        //this.diana.body.setSize(95,125,false).setOffset(40,25);
        
        // Mirilla Jugador 1 junto con sus arreglos de hitbox
        this.mirilla1 = this.physics.add.image(150,200,'Mirilla1');
        this.mirilla1.setCollideWorldBounds(true);
        this.mirilla1.body.setSize(10,10,true);
        this.mirilla1.body.setCircle(5);
        this.mirilla1.setDepth(50);
        
        // Mirilla Jugador 2 junto con sus arreglos de hitbox
        this.mirilla2 = this.physics.add.image(930,200,'Mirilla2');
        this.mirilla2.setCollideWorldBounds(true);
        this.mirilla2.body.setSize(10,10,true);
        this.mirilla2.body.setCircle(5);
        this.mirilla1.setDepth(50);
        
        
        // Colisiones de las mirillas y las dianas
        this.physics.add.overlap(this.mirilla1, this.dianas, function(obj1, obj2){
            this.diana1 = obj2;
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
        
        
        if(this.key_F.isDown && (!this.mirilla1.body.touching.none || this.mirilla1.body.embedded)){
            if(this.diana1.data.get('status') == 1) { //si la diana está de pie
                this.diana1.anims.play('abajo', true);
                this.diana1.data.set('status', 0);
                this.removeDiana(this.mirilla1, this.diana1);
                //this.scoreJ1 += 5;
                this.scoreTextJ1.setText("Pts:" + this.scoreJ1);
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
    
    createDiana(objetivo){ // crea el objeto que va a aparecer en la diana objetivo
        //65 por encima
        //this.time.addEvent({delay: 10000});
        
        var gato; // gato que se va a crear
        var tiempo;
        
        var tipo = Phaser.Math.Between(1, 10); // bueno o malo?
        
        if(tipo<=4) { //30% de posibilidades de bueno
            var bueno = Phaser.Math.Between(1, 6);
            
            if(bueno <= 1){ // bebé 1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno1');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'baby');
                gato.data.set('points', -5);
                
                this.cats.add(gato);
                
                tiempo = 10000;
            }
            else if(bueno > 1 && bueno <= 2){ // bebé 2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno1b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'baby');
                gato.data.set('points', -5);
                
                this.cats.add(gato);
                
                tiempo = 10000;
            }
            else if(bueno > 2 && bueno <= 3){ // civil 1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno2');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'civil');
                gato.data.set('points', -10);
                
                this.cats.add(gato);
                
                tiempo = 8000;
            }
            else if(bueno > 3 && bueno <= 4){ // civil 2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno2b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'civil');
                gato.data.set('points', -10);
                
                this.cats.add(gato);
                
                tiempo = 8000;
            }
            else if(bueno > 4 && bueno <= 5){
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno3');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'doctor');
                gato.data.set('points', -50);
                
                this.cats.add(gato);
                
                tiempo = 5000;
            }
            else if(bueno > 5 && bueno <= 6){
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Bueno3b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', 'doctor');
                gato.data.set('points', -50);
                
                this.cats.add(gato);
                
                tiempo = 5000;
            }
        }
        else { // 70% posibilidades de malo
            var malo = Phaser.Math.Between(1, 8);
            
            if(malo <= 1){ //  1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo1');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 5);
                
                this.cats.add(gato);
                
                tiempo = 10000;
            }
            else if(malo <= 2){ //  2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo1b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 5);
                
                this.cats.add(gato);
                
                tiempo = 10000;
            }
            else if(malo <= 3){ //  1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo2');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 10);
                
                this.cats.add(gato);
                
                tiempo = 8000;
            }
            else if(malo <= 4){ //  2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo2b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 10);
                
                this.cats.add(gato);
                
                tiempo = 8000;
            }
            else if(malo <= 5){ //  1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo3');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 20);
                
                this.cats.add(gato);
                
                tiempo = 7000;
            }
            else if(malo <= 6){ //  2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo3b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 20);
                
                this.cats.add(gato);
                
                tiempo = 7000;
            }
            else if(malo <= 7){ //  1
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo4');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 50);
                
                this.cats.add(gato);
                
                tiempo = 5000;
            }
            else if(malo <= 8){ //  2
                gato = this.physics.add.image(objetivo.x, (objetivo.y -65), 'Malo4b');
                gato.body.setSize(95,125,true);
                gato.setDataEnabled();
                gato.data.set('type', '');
                gato.data.set('points', 50);
                
                this.cats.add(gato);
                
                tiempo = 5000;
            }
        }
        this.time.delayedCall(tiempo, this.removeDiana, [null, objetivo], this);
    }
    
    removeDiana(jugador, objetivo){
        if(objetivo.data.get('status') == 1){
            objetivo.anims.play('abajo', true);
            objetivo.data.set('status', 0);
        }
        
        var gato;
        this.cats.children.iterate(function(child){
            if (child.x == objetivo.x && child.y == objetivo.y - 65)
                gato = child;
        });
        
        if(jugador == this.mirilla1){
            this.scoreJ1 += gato.data.get('points');
        }
        else if(jugador == this.mirilla2){
            this.scoreJ2 += gato.data.get('points');
        }
        
        this.cats.remove(gato, true, true);
        
        //this.time.delayedCall(Phaser.Math.Between(2000, 7000), this.createDiana, [objetivo], this);
    }
    
    dianasUp(diana) {  
        diana.anims.play('arriba', 'true');
        this.time.delayedCall(1000, this.createDiana, [diana], this);
        
    }
    
}