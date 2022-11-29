class SceneMenu extends Phaser.Scene {
    constructor() {
        super({key:"SceneConf)"});
    }
    
    preload() {
        this.load.image('Fondo1', 'assets/Fondos/calledia.png');
    }
    
    create() {
        this.fondo1 = this.add.image(540,375,'Fondo1');
        
        this.key_W =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    
    update(delta) {
        if(this.key_W.isDown)
            this.fondo1.y -= 5;
        
        if(this.key_A.isDown)
            this.fondo1.x -= 5;
        
        if(this.key_S.isDown)
            this.fondo1.y += 5;
        
        if(this.key_D.isDown)
            this.fondo1.x += 5;
    }
}