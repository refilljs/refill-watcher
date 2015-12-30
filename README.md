zkflow-watcher
==============

Zkflow watcher watches files for you and runs provided asynchronous function when this files changes.
It prevents function to run more than once at a time and prevents building up run queue.

Made by Zaklinacze Kodu

Shields
-------

[![npm](https://img.shields.io/npm/v/zkflow-watcher.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-watcher)
[![npm](https://img.shields.io/npm/l/zkflow-watcher.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-watcher)
[![npm](https://img.shields.io/npm/dm/zkflow-watcher.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-watcher)<br>
[![Travis](https://img.shields.io/travis/zaklinaczekodu/zkflow-watcher/master.svg?style=flat-square)](https://travis-ci.org/zaklinaczekodu/zkflow-watcher)
[![Code Climate](https://img.shields.io/codeclimate/github/zaklinaczekodu/zkflow-watcher.svg?style=flat-square)](https://codeclimate.com/github/zaklinaczekodu/zkflow-watcher)<br>
[![David](https://img.shields.io/david/zaklinaczekodu/zkflow-watcher.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-watcher)
[![David](https://img.shields.io/david/dev/zaklinaczekodu/zkflow-watcher.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-watcher)<br>
[![GitHub forks](https://img.shields.io/github/forks/zaklinaczekodu/zkflow-watcher.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-watcher)
[![GitHub stars](https://img.shields.io/github/stars/zaklinaczekodu/zkflow-watcher.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-watcher)
[![GitHub followers](https://img.shields.io/github/followers/zaklinaczekodu.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-watcher)

Installation
------------

```bash
npm install --save zkflow-watcher
```

API
---

```javaScript
require('zkflow-watcher').watch(task, isWatching, globs, logger);
```

* task - asynchronous function, witch return promise;
* isWatching - true or false. When false task will be run only once and then it will exit.
* globs - globs that will be passed to [gulp-watch](https://www.npmjs.com/package/gulp-watch)
* logger - logger from [gulp-zkflow-utils](https://www.npmjs.com/package/gulp-zkflow-utils)
