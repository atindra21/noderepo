var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

gulp.task('default', ['lint', 'uglify']);

gulp.task('uglify', function () {
    return watch('lintTest.js', { ignoreInitial: false })
        .pipe(gulp.src('lintTest.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist-gulp'))
        );
});

gulp.task('lint', function () {
    return watch('lintTest.js', { ignoreInitial: false })
        .pipe(gulp.src('lintTest.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
        );
});