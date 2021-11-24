const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require('gulp-minify-css')
const replace = require('gulp-replace');

gulp.task('sass', async function () {
  return gulp.src('packages/theme/src/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('lib/packages/theme'))
})


gulp.task('sass-rep', async function () {
  return gulp.src('packages/components/**/*.ts')
    .pipe(replace(/.\.scss$/g, '.css'))
    .pipe(dest('build/'));
})

// let regex = /.\.scss$/;
// regex.test("a.scss")