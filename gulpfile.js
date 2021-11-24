const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require('gulp-minify-css')

gulp.task('sass', async function () {
  return gulp.src('packages/theme/src/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('lib/packages/theme'))
})