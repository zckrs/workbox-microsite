'use strict';

const gulp = require('gulp');
const swBuild = require('sw-build');
const path = require('path');

gulp.task('sw', () => {
  return swBuild.generateSW({
    globDirectory: global.config.dest,
    staticFileGlobs: ['**\/*.{html,js,css}'],
    globIgnores: [
      // Only include the latest reference docs
      'reference-docs/stable/*.*.*/**/*',
      // Only include the top level styles for css
      'themes/styles/**/*',
    ],
    swDest: path.join(global.config.dest, 'sw.js'),
  });
});