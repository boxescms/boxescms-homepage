require('dotenv').config()

const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefix = require('gulp-autoprefixer')
const pug = require('gulp-pug')
const hashsum = require('gulp-hashsum')
const del = require('del')
const replace = require('gulp-batch-replace')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const named = require('vinyl-named')
const {browserslist} = require('./package.json')

const {parallel, series, task, src, dest, watch, lastRun} = gulp

require('gulp-notifiable-task')

task('clean:static', () => {
  return del(['dist/static'])
})

task('prepare:normalize', () => {
  return src('node_modules/normalize.css/normalize.css')
    .pipe(dest('dist/static/'))
})

task('prepare:smoothscroll', () => {
  return src('node_modules/smoothscroll-polyfill/dist/smoothscroll.min.js')
    .pipe(dest('dist/static/'))
})

task('prepare', series('clean:static', parallel('prepare:normalize', 'prepare:smoothscroll')))

task('clean', () => {
  return del(['dist/assets', 'dist/css', 'dist/js', 'dist/**/*.html'])
})

task('hashsum', () => {
  return src('dist/**/*.{png,gif,jpg,css,js,svg}')
    .pipe(hashsum({
      dest: 'dist',
      json: true,
      filename: 'hashsum.json'
    }))
})

task('compile:html', () => {
  return src(['web/pug/**/*.pug', '!web/pug/components/*.pug'], {since: lastRun('compile:html')})
    .pipe(pug())
    .pipe(dest('dist/'))
})

task('hash:html', () => {
  const sums = require('./dist/hashsum.json')
  const time = Date.now()
  const replacements = Object.keys(sums).map(sum => [sum, sum + '?' + time])

  return src('dist/**/*.html', {since: lastRun('hash:html')})
    .pipe(replace(replacements))
    .pipe(dest('dist/'))
})

task('build:html', series('compile:html', 'hash:html'))

task('build:js', () => {
  return src('web/js/**/*.js')
    .pipe(named())
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(dest('dist/js/'))
})

task('build:css', () => {
  return src('web/sass/**/*.sass', {since: lastRun('build:css')})
    .pipe(sass())
    .pipe(autoprefix({
      browsers: browserslist
    }))
    .pipe(dest('dist/css/'))
})

task('build:assets', () => {
  return src('web/assets/**', {since: lastRun('build:assets')})
    .pipe(dest('dist/assets'))
})

task('build', series('clean', parallel('build:css', 'build:js', 'build:assets'), 'hashsum', 'build:html'))

task('default', parallel('prepare', 'build'))

task('watch:html', () => watch('web/pug/**/*.pug', parallel('build:html')))
task('watch:css', () => watch('web/sass/**/*.sass', parallel('build:css')))
task('watch:js', () => watch(['web/js/**/*.js', 'web/components/**/*.vue', 'web/library/**/*.js'], parallel('build:js')))
task('watch:assets', () => watch('web/assets/**/*', parallel('build:assets')))

task('watch', parallel('watch:html', 'watch:css', 'watch:js', 'watch:assets'))

task('watch', parallel('prepare', 'build', 'watch'))
