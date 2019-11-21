var gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  postcss = require("gulp-postcss"),
  connect = require("gulp-connect");

sass.compiler = require("node-sass");

var paths = {
  styles: {
    src: "./src/design/scss/**/*.scss",
    mainScss: "./src/design/scss/main.scss",
    dest: "./src/design/css"
  },
  html: {
    src: "./src/*.html"
  },
  js: {
    src: "./src/design/js/**/*.js"
  }
};

gulp.task("server", done => {
  connect.server({
    root: "./src",
    livereload: true,
    port: 8888
  });
  done();
});

function js() {
  return gulp.src(paths.js.src).pipe(connect.reload());
}
exports.js = js;

function html() {
  return gulp.src(paths.html.src).pipe(connect.reload());
}
exports.html = html;

function style() {
  return gulp
    .src(paths.styles.mainScss)
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(connect.reload());
}
exports.style = style;

gulp.task("watch", done => {
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.js.src, js);
  done();
});

var build = gulp.series(style, html, js);

exports.default = gulp.series(build, gulp.series("server", "watch"));
