class SceneGame extends Phaser.Scene {
    constructor() {
        super({key:"SceneConf)"});
    }
    
    preload() {
        this.load.image('Fondo1', 'assets/Fondos/granerodia.png');
        this.load.spritesheet('Diana', 'assets/Diana.png', {frameWidth: 175, frameHeight: 300});
        this.load.image('Mirilla1', 'assets/MirillaJ1.png');
        this.load.image('Mirilla2', 'assets/MirillaJ2.png');
        
    }
    
    create() {
        this.fondo1 = this.add.image(540,375,'Fondo1');
        this.diana = this.physics.add.sprite(300,375,'Diana');
        this.diana.body.setSize(95,125,false).setOffset(40,25);
        this.mirilla1 = this.physics.add.image(500,375,'Mirilla1');
        this.mirilla1.body.setSize(20,20,true);
        this.mirilla2 = this.add.image(580,375,'Mirilla2');
        
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
        
        this.physics.add.overlap(this.mirilla1, this.diana);
        
        // JUGADOR 1
        this.key_W =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_F =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.key_G =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        
        // JUGADOR 2
        this.key_UP =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.key_LEFT =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_DOWN =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.key_RIGHT =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    
    update(delta) {
        this.mirilla1.body.debugBodyColor = this.mirilla1.body.touching.none ? 0x00ffff : 0xffff00;
        // JUGADOR 1
        if(this.key_W.isDown)
            this.mirilla1.y -= 10;
        
        if(this.key_A.isDown)
            this.mirilla1.x -= 10;
        
        if(this.key_S.isDown)
            this.mirilla1.y += 10;
        
        if(this.key_D.isDown)
            this.mirilla1.x += 10;
        
        if(this.key_F.isDown && this.diana.body.touching.none){
           this.diana.anims.play('abajo', true);
        }
        
        if(this.key_G.isDown)
            this.diana.anims.play('arriba', true);
        
        // JUGADOR 2
        if(this.key_UP.isDown)
            this.mirilla2.y -= 10;
        
        if(this.key_LEFT.isDown)
            this.mirilla2.x -= 10;
        
        if(this.key_DOWN.isDown)
            this.mirilla2.y += 10;
        
        if(this.key_RIGHT.isDown)
            this.mirilla2.x += 10;
    }
}