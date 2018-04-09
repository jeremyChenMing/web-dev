// 不使用hash值
fis.match('*', {
  useHash: false
});
// js 采用压缩 自带插件
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});


// dev 环境下使用less开发
fis.media('dev').match('less/**.less', {
  parser: fis.plugin('less2', {
    sourceMap: true
  }),
  rExt: '.css'
})

// 生产环境配置
fis.media('prod').match('less/**.less', {
  preprocessor: fis.plugin('autoprefixer', { //自动加前缀  fis3-preprocessor-autoprefixer
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  }),
  parser: fis.plugin('less2', {
    sourceMap: false
  }),
  relative: true,
  useSprite: true,
  rExt: '.css',
  optimizer: fis.plugin('clean-css') //css 压缩
}).match('package.json', {
  release: false
})

// 二者之间使用“雪碧图”, 并对图片进行压缩 ---》
fis.media('prod').match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
fis.media('prod').match('::packager', {
  spriter: fis.plugin('csssprites')
});
// 《 -------

// 启用大包后压缩  需要插件“fis3-deploy-zip”  //启用后把命令的后面改成 fis3 release prod -c
// fis.media('prod').match('**', {
//   deploy: [
//     fis.plugin('zip'),
//     fis.plugin('local-deliver', {
//       to: './dist'  
//     })
//   ]
// })



// 使用相对路径 ------》启用插件 fis3-hook-relative
fis.hook('relative');
// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
})
// 《 ------------


