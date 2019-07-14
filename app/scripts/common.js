let tasks = [{
        condition: () => window.test === 1,
        callback: function(text) {
            console.log(text);
        },
        arg: () => 'window.test равен ' + window.test,
        name: 'test1',
        run: true
    },
    {
        condition: function() {
            let task = this.getTask('test1');
            return !task.run;
        },
        callback: function(text) {
            console.log(text);
        },
        arg: (index) => `Выполнился таск ${index}: Таск test1 остановлен`,
        name: 'test_stop',
        run: true
    },
    {
        condition: () => window.test === 2,
        callback: function(text) {
            console.log(text);
        },
        arg: () => 'window.test равен ' + window.test,
        name: 'test2',
        attempts: 150,
        run: true
    },
    {
        condition: function() {
            let task = this.getTask('test2');
            return task.complete === false;
        },
        callback: function(text) {
            console.log(text);
        },
        arg: (index) => `Выполнился таск ${index}: Таск test2 завершился неудачей`,
        name: 'test_complete',
        run: true
    }
];

// window.launch = new Launcher(tasks);
window.launch = new Launcher();