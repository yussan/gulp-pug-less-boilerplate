# example-pug-less
example-pug-less project to build web pages.

*) This repo is not deprecated, i just migrated not to use Gulp and Less anymore because now i have used Grunt to replace Gulp and Sass to replace Gulp. You can find boilerplatenya repo here [grunt-pug-sass-boilerplate](https://github.com/yussan/grunt-pug-sass-boilerplate)

## System Requirement
install NODEJS and NPM on your computer.

## Getting started 
### First time
Make sure it is installed `NODE JS` and `NPM` in your system, then execute this command :
```
npm install
```

### Watching
```
npm run start
```

### Details 
All you need to do only in `*.pug` , `partials/*.pug`, `less/*.less` and `less/partials/*.less`. 
We are using `Gulp` as `pug` and `less` compilers, and all run asynchronously using `browser-sync`.

`.pug` files will be compiled into a directory `_site` and `.less` to the directory `_site/css`.
 

## Thinks to learn 
- Pug, https://pugjs.org/
- Less, http://lesscss.org
- Node JS, https://nodejs.org/
- NPM, https://www.npmjs.com
- Gulp, http://gulpjs.com/
