let tasks = [{
    condition: () => window.test === 5,
    callback: function(text) {
        console.log(text);

        // window.test = 0;
        // this.run();
    },
    arg: () => 'window.test равен ' + window.test,
    name: 'test5',
    // attempts: 50,
    // run: true
}, {
    condition: () => window.test === 4,
    callback: function(text) {
        console.log(text);

        // window.test = 0;
        // this.run();
    },
    arg: () => 'window.test равен ' + window.test,
    name: 'test4',
    // attempts: 50,
    run: true
}];

window.launch = new Launcher(tasks);
// window.launch = new Launcher();