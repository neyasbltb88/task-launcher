window.launch = new Launcher({
    condition: () => window.test === 5,
    callback: function(text) {
        console.log(text);
    },
    arg: () => 'window.test равен ' + window.test,
    run: true
});