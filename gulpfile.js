const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gm = require('gulp-gm');
const rename = require("gulp-rename");

const sizes = ['small', 'medium', 'large'];

const images = [
    {
        widths: [850, 1536, 3840],
        path: 'parallax'
    },{
        widths: [850, 1536, 1280],
        path: 'experts'
    },{
        widths: [850, 1536, 1280],
        path: 'certificates'
    },{
        widths: [850, 1536, 3840],
        path: 'welcome'
    }, {
        widths: [720, 1340, 840],
        path: 'placeholders/events'
    }, {
        widths: [850, 720, 1600],
        path: 'placeholders/resources'
    },
]

gulp.task('default', (cb) => {
    images.map(item => {
        item.widths.map((size, index) => {
            gulp.src(`${item.path}/**/*.{jpg,jpeg,png}`)
                .pipe(gm(function (gmfile) {
                    return gmfile.resize(size, null);
                }, {
                    imageMagick: true
                }))
                .pipe(rename(function (path) {
                    path.basename = `${path.basename}@${sizes[index]}`;
                }))
                .pipe(imagemin({quality: 75}))
                .pipe(gulp.dest('dist/images'))
        });
    })
    cb();
})
   

