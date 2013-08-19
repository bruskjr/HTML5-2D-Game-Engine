requirejs.config({
    baseUrl: 'js',
    appDir: "../",
    
    paths: {
        models: 'models',
        lib: 'lib'
    }
});

requirejs(['models/game'],
function(game){

	game.init();
	game.start(); // Run the game
	
});
