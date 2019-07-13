export default class Launcher {
    running = false;
    rafId = 0;
    tasks = [];

    /*  tasks = {
     *       condition:  @Function: должна проверять условие, необходимое для вызова callback и возвращать boolean.
     *       callback:   @Function: вызовется когда condition вернет true.
     *       name:       @String: Имя таска для более удобного управления им. Необязательный.
     *       arg:        @Any: один аргумент, который передастся в callback при его вызове. Необязательный.
     *                   @Function: если передана функция, то все, что она вернет, будет передано в callback при его вызове.
     *       attempts:   @Number: количество попыток для проверки условия. Необязательный.
     *                   Если не передан, проверка будет бесконечной, пока condition не вернет true или не будет вызван метод остановки .stop()
     *       run:        @Boolean: если true, то запуск таска произойдет автоматически, без вызова .run(). Необязательный.
     *   } */
    constructor(tasks = []) {
        this.add(tasks);
    }

    add = (tasks) => {
        let newTasks = [];
        if (tasks instanceof Array) {
            newTasks = tasks;
        } else if (tasks instanceof Object) {
            newTasks.push(tasks);
        }

        newTasks.forEach(task => {
            // Валидация таска
            if (!task.condition || typeof task.condition !== 'function') {
                console.warn('Laucher: не передано условие', task);
                return;
            }
            if (!task.callback || typeof task.callback !== 'function') {
                console.warn('Laucher: не передан коллбек', task);
                return;
            }

            // Подготовка таска
            task.attempts = tasks.attempts || Infinity;
            task.tryNum = 0;
            task.run = task.run || false;

            // Добавление в общий массив тасков
            this.tasks.push(task);
        });

        // Попытка запуска тасков после добавления
        this.rafId = requestAnimationFrame(this._launch);
    }

    hasActive = () => {
        return this.tasks.some(task => task.run);
    }

    _launch = (rafId) => {
        // Если не рекурсивный запуск и уже запущен процесс проверки тасков, или нет активных, то выходим
        if (this.rafId !== rafId && (this.running || !this.hasActive())) return;
        this.running = true;

        this.tasks.forEach((task, index) => {
            // Если таск не активный, то выходим
            if (!task.run) return;

            // Если функция условия таска вернула true, отключаем дальнейшее выполнение таска и выззываем callback
            if (task.condition.call(this)) {
                this.stop(index);

                task.callback.call(this, typeof task.arg === 'function' ? task.arg.call(this) : task.arg);

                // Если функция условия вернула false и количество попыток исчерпано, тормозим таск
            } else if (!task.condition.call(this)) {
                task.tryNum++;

                if (task.tryNum >= task.attempts) {
                    this.stop(index);
                }

            }
        });

        // После цикла по таскам проверяем остались ли активные таски

        // Если активные таски есть, планируем следующий запуск _launch
        if (this.hasActive()) {
            this.rafId = requestAnimationFrame(() => this._launch(this.rafId));

            // Если таски все завершены, то переходим в глобальное состояние остановки
        } else {
            this.stop();
        }

    }

    _findTask(taskId) {
        let index;
        // Если число - то это индекс, и если под индексом есть таск
        if (typeof taskId === 'number' && this.tasks[taskId]) {
            index = taskId;

            // Если строка, то это имя
        } else if (typeof taskId === 'string') {
            this.tasks.forEach((task, ind) => {
                if (task.name === taskId) index = ind;
            });
        } else {
            return false;
        }

        return index;
    }

    _runTask = (taskId, arg) => {
        let index = this._findTask(taskId);
        if (index === false) return false;

        // Если нет аргумениа и таск уже запущен, возвращаем false
        if (!arg && this.tasks[index].run) return false;

        // Запускаем таск
        this.tasks[index].run = true;
        // Если есть аргумент, обновим его в таске
        if (arg) this.tasks[index].arg = arg;

        return index;
    }

    // Запуск рекурсивной проверки условий тасков
    run = (...args) => {
        let runs;
        // Если аргументов нет, то запуск всех тасков
        if (args.length === 0) {
            runs = [];

            this.tasks.forEach((task, index) => {
                if (task.run === false) {
                    runs.push(index);
                    task.run = true;
                }
            });

            // Если аргумент один, то это индекс или имя таска
        } else if (args.length === 1) {
            runs = this._runTask(args[0]);

            // Если аргумента два, то в первом индекс/имя таска, а во втором обновление для task.arg
        } else if (args.length === 2) {
            runs = this._runTask(args[0], args[1]);
        }

        // Запуск выполнения проверки активных тасков
        this.rafId = requestAnimationFrame(this._launch);

        return runs;
    }

    _stopTask(taskId) {
        let index = this._findTask(taskId);
        if (index === false) return false;

        this.tasks[index].run = false;
        this.tasks[index].tryNum = 0;

        return index;
    }

    // Остановка рекурсивной проверки условия
    stop = (taskId) => {
        let stoped;
        if (taskId !== undefined) {
            let index = this._stopTask(taskId);
            if (index === false) return false;

            stoped = index;
        } else {
            stoped = [];
            this.tasks.forEach((task, idx) => {
                let index = this._stopTask(idx);
                if (index === false) return false;

                stoped.push(index);
            });

            this.running = false;
            cancelAnimationFrame(this.rafId);
            this.rafId = 0;
        }

        return stoped;
    }
}

window.Launcher = Launcher;