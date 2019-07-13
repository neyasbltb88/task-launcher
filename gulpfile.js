const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    webpack = require('webpack-stream'),
    gulpif = require('gulp-if'),
    named = require('vinyl-named'),
    through = require('through2')


/* === Красивое отображение ошибок === */
const notify = require('gulp-notify')


function emit_end(err) {
    this.emit('end')
}
/* --- Красивое отображение ошибок --- */

/* === Файлы проекта === */

const conf = {
    src: './app',
    dest: './build'
}

const html_files = [
    './app/**/*.html',
]

const js_files = [
    './app/scripts/**/*.js',
    '!./app/scripts/**/*.map'
]

const js_entry = {
    ['task-launcher']: './app/scripts/task-launcher.js',
    common: './app/scripts/common.js'
}

var isDev = false // Прод

// let isDev = true // Дев

var isProd = !isDev

var webpack_config = {
    entry: js_entry,
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }]
    },
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval-source-map' : 'none',
}

/* --- Файлы проекта --- */

// Пользовательские скрипты проекта

function browser_sync() {
    browserSync({
        server: {
            baseDir: conf.dest // './build'
        },
        notify: false,
        open: false,
        reloadOnRestart: true,
        cors: true,
    })
}

function js() {
    return gulp.src(js_files)
        .pipe(named())
        .pipe(webpack(webpack_config).on("error", notify.onError(function(error) {
            return "Error webpack: " + error.message;
        })).on('error', emit_end))
        .pipe(gulpif(isDev, sourcemaps.init({ loadMaps: true })))
        .pipe(through.obj(function(file, enc, cb) {
            let isSourceMap = /\.map$/.test(file.path);
            if (!isSourceMap) this.push(file);
            cb();
        }))
        .pipe(gulpif(isDev, sourcemaps.write('./maps')))
        .pipe(gulpif(isDev, gulp.dest(conf.dest + '/scripts')))
        .pipe(gulpif(isProd, gulp.dest(conf.dest + '/scripts')))
        .pipe(browserSync.reload({ stream: true }))
}

function html() {
    return gulp.src(html_files)
        .pipe(gulp.dest(conf.dest))
        .pipe(browserSync.reload({ stream: true }))
}

gulp.task('watch', ['setDev', 'build', 'browser_sync'], function() {
    gulp.watch(html_files, ['html'])
    gulp.watch(js_files, ['js'])
})

gulp.task('build', ['removedist', 'html', 'js'], function() {
    gulp.src(conf.dest)
        .on('error', emit_end)
})

function removedist() {
    try {
        return del.sync(conf.dest)
    } catch (err) {}
}

function setDev() {
    isDev = true
    isProd = false
    webpack_config.mode = isDev ? 'development' : 'production'
    webpack_config.devtool = isDev ? 'eval-source-map' : 'none'
}


gulp.task('browser_sync', browser_sync)
gulp.task('js', js)
gulp.task('html', html)
gulp.task('removedist', removedist)
gulp.task('setDev', setDev)

gulp.task('default', ['watch'])