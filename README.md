# babel-first

#### babel-cli解析ES6
* `cnpm install -g --save-dev babel-cli`
* `cnpm install babel-preset-es2015 --save-dev`
* 配置babel解析ES6为ES5,需要一个配置文件`.babelrc`

```
{
  "presets":["es2015"],
  "plugins": []
}
```
#### babel-cli命令
* `babel script.js` 按照规则编译，输出到控制台
* `babel script.js --out-file script.compiled.js`编译输出到`script.compiled.js`,参数简写`-o`
* `babel script.js --watch --out-file script-compiled.js`实时编译并输出到文件
* `babel src --out-dir lib`把`src`目录js文件编译到`lib`，参数简写`-d`

#### package.js

```
{
  "script":{
    "build":"babel src -d lib"
  }
}
npm run build
```
