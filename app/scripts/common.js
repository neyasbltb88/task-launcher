window.launch = new Launcher({
    condition: () => window.test === 5,
    callback: function(text) {
        console.log(text);

        window.test = 0;
        this.run();
    },
    arg: () => 'window.test равен ' + window.test,
    run: true
});