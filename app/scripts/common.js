window.launch = new Launcher({
    condition: () => window.test === 5,
    callback: (text) => alert(text),
    arg: 'window.test === 5',
    run: true
});