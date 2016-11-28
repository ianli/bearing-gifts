// Gulpfile.js
//
// Based on https://github.com/callemall/material-ui-browserify-gulp-example/blob/f893414ed2f48864f909a9d537b9f332c65488d8/gulpfile.js
//
// Rather than manage one giant configuration file responsible
// for creating multiple tasks, each task has been broken out into
// its own file in gulp/tasks. Any files in that directory get
// automatically required below.
// To add a new task, simply add a new task file that directory.
// gulp/tasks/default.js specifies the default set of tasks to run
// when you run `gulp`.

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks including subfolders.
requireDir('./gulp/tasks', { recurse: true });
