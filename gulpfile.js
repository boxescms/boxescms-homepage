require('dotenv').config()

const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefix = require('gulp-autoprefixer')
const pug = require('gulp-pug')
const hashsum = require('gulp-hashsum')
const del = require('del')
const replace = require('gulp-batch-replace')
const sequence = require('gulp-sequence')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const named = require('vinyl-named')
const {browserslist} = require('./package.json')

require('gulp-notifiable-task')

gulp.task('default', ['prepare', 'build'])
gulp.task('prepare', cb => sequence('clean:static', ['prepare:normalize', 'prepare:smoothscroll'])(cb))
gulp.task('clean', ['clean:html', 'clean:js', 'clean:css', 'clean:assets'])

gulp.task('clean:html', () => del('dist/**/*.html'))
gulp.task('clean:js', () => del('dist/js/'))
gulp.task('clean:css', () => del('dist/css/'))
gulp.task('clean:assets', () => del('dist/assets/'))
gulp.task('clean:static', () => del('dist/assets/'))

gulp.task('prepare:normalize', () => {
  return gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest('dist/static/'))
})

gulp.task('prepare:smoothscroll', () => {
  return gulp.src('node_modules/smoothscroll-polyfill/dist/smoothscroll.min.js')
    .pipe(gulp.dest('dist/static/'))
})

gulp.task('build', cb => sequence('clean', ['build:css', 'build:js', 'build:assets'], 'hashsum', 'build:html')(cb))

gulp.task('hashsum', () => {
  return gulp.src('dist/**/*.{png,gif,jpg,css,js,svg}')
    .pipe(hashsum({
      dest: 'dist',
      json: true,
      filename: 'hashsum.json'
    }))
})

gulp.notifiableTask('build:html', cb => sequence('compile:html', 'hash:html')(cb))

gulp.task('compile:html', () => {
  return gulp.src(['web/pug/**/*.pug', '!web/pug/components/*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
})

gulp.task('hash:html', () => {
  const sums = require('./dist/hashsum.json')

  const time = Date.now()

  const replacements = Object.keys(sums).map(sum => [sum, sum + '?' + time])

  return gulp.src('dist/**/*.html')
    .pipe(replace(replacements))
    .pipe(gulp.dest('dist/'))
})

gulp.notifiableTask('build:css', () => {
  return gulp.src('web/sass/**/*.sass')
    .pipe(sass({
      indentation: true
    }))
    .pipe(autoprefix({
      browsers: browserslist
    }))
    .pipe(gulp.dest('dist/css/'))
})

gulp.notifiableTask('build:js', () => {
  return gulp.src('web/js/**/*.js')
    .pipe(named())
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('dist/js/'))
})

gulp.notifiableTask('build:assets', () => {
  return gulp.src('web/assets/**')
    .pipe(gulp.dest('dist/assets'))
})

gulp.task('watch', ['prepare', 'build', 'watch:html', 'watch:css', 'watch:js', 'watch:assets'])

gulp.task('watch:html', () => gulp.watch('web/pug/**/*.pug', ['build:html']))
gulp.task('watch:css', () => gulp.watch('web/sass/**/*.sass', ['build:css']))
gulp.task('watch:js', () => gulp.watch(['web/js/**/*.js', 'web/components/**/*.vue', 'web/library/**/*.js'], ['build:js']))
gulp.task('watch:assets', () => gulp.watch('web/assets/**/*', ['build:assets']))
