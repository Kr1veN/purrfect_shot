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
            
            child.setDataEnabled();
            child.data.set('status', '1'); //0 abajo, 1 arriba
            i++;
        });
        
        //this.diana = this.physics.add.sprite(150,500,'Diana');
        //this.diana.body.setSize(95,125,false).setOffset(40,25);
        
        // Mirilla Jugador 1 junto con sus arreglos de hitbox
        this.mirilla1 = this.physics.add.image(150,200,'Mirilla1');
        this.mirilla1.setCollideWorldBounds(true);
        this.mirilla1.body.setSize(10,10,true);
        this.mirilla1.body.setCircle(5);
        
        // Mirilla Jugador 2 junto con sus arreglos de hitbox
        this.mirilla2 = this.physics.add.image(930,200,'Mirilla2');
        this.mirilla2.setCollideWorldBounds(true);
        this.mirilla2.body.setSize(10,10,true);
        this.mirilla2.body.setCircle(5);
        
        
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
        
        // Colisiones de las mirillas y las dianas
        this.physics.add.overlap(this.mirilla1, this.dianas, function(obj1, obj2){
            this.diana1 = obj2;
        }, null, this);
        
        this.physics.add.overlap(this.mirilla2, this.dianas, function(obj1, obj2){
            this.diana2 = obj2;
        }, null, this);
        
        // Puntuaciones
        this.scoreJ1 = 0;
        this.scoreJ2 = 0;
        this.scoreTextJ1 = this.add.bitmapText(100, 60, 'YW', 'Pts: 0', 30);
        this.scoreTextJ2 = this.add.bitmapText(880, 60, 'YW', 'Pts: 0', 30);
        
        // Balas
        this.bulletTextJ1 = this.add.bitmapText(62, 690, 'YW', '10', 40).setTint(0x000000);
        this.bulletTextJ2 = this.add.bitmapText(992, 690, 'YW', '50', 40).setTint(0x000000);
        
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
                this.scoreJ1 += 5;
                this.scoreTextJ1.setText("Pts:" + this.scoreJ1);
                this.diana1.data.set('status', 0);
            }
        }
        
        if(this.key_C.isDown && (!this.mirilla1.body.touching.none || this.mirilla1.body.embedded)){
            if(this.diana1.data.get('status') == 0) { //si la diana está tumbada
                this.diana1.anims.play('arriba', true);
                this.diana1.data.set('status', 1);
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
    
}