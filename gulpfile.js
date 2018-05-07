var gulp 		= require('gulp'),
	scss 		= require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat      = require('gulp-concat'),
	uglify      = require('gulp-uglifyjs');


gulp.task('scss', function(){
	return gulp.src('app/scss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

 gulp.task('script', function(){
 	return gulp.src([
 		'app/libs/jquery/dist/jquery.min.js',
 		'app/libs/owl.carousel/dist/owl.carousel.min.js',
 		])
 		.pipe(concat('libs.min.js'))
 		.pipe(uglify())
 		.pipe(gulp.dest('app/js'));
 });

 gulp.task('icons', function() {
    return gulp.src('app/libs/components-font-awesome/webfonts/**.*')
    .pipe(gulp.dest('app/webfonts'));
});

gulp.task('watch', ['browser-sync', 'scss', 'script', 'icons'], function(){
	gulp.watch('app/scss/*.scss', ['scss']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);

});
