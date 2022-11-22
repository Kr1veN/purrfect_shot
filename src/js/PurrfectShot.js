var config = {
    type: Phaser.AUTO,  // La propiedad type (tipo) puede ser Phaser.CANVAS, Phaser.WEBGL o Phaser.AUTO. 
                        // Esta variable indica qué usar para mostrar el juego. El valor recomendado es Phaser.AUTO 
                        // que intenta utilizar WebGL automáticamente, pero si el navegador o dispositivo no lo admite, usará Canvas.
    /*scale: {
        parent: 'mygame',
        autoCenter: Phaser.Scale.CENTER_BOTH
    },*/
    width: 1080,
    height: 750,        // Las propiedades width (ancho) y height (alto) establecen el tamaño de la pantalla que usará Phaser. 
                        // En este caso son 800 x 600 píxeles. El juego puede ser del tamaño que se desee, pero esta será la resolución en la que se mostrará el juego.
    
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    
    scene: [ SceneGame ]
};

var game = new Phaser.Game(config);

