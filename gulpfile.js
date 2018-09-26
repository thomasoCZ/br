var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var devip = require('dev-ip');


// add gulp-uncss to remove unused css code

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}


gulp.task('sass', function() {

	var processors = [
	autoprefixer({browsers: ['last 8 versions']}),
	cssnano(),
	];

	return gulp.src('scss/style.scss')
	//.pipe(sourcemaps.init())
	.pipe(sass())
	.on('error', swallowError) 
	.pipe(postcss(processors))
	//.pipe(sourcemaps.write())
	.on('error', swallowError) 
	.pipe(gulp.dest(''));

});

gulp.task('sass-watch',['sass'], browserSync.reload);


gulp.task('scripts', function() {  
    return gulp.src('js/script.js')
    	.pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function(){
	browserSync({
		//host: devip(),
		host: '10.0.0.43',
		server: {
			baseDir: './'
		}
	}),
	gulp.watch(['scss/*.scss','scss/**/*.scss'], ['sass-watch']);
	gulp.watch('js/script.js', ['scripts']);
	
});
