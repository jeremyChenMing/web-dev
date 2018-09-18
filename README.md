# 个人网站开发版本
## 纯原生js手写页面
   其实也是最开始进入前端行业锻炼的一个项目。也是为了后面的面试和自己留个念想，在前端快速发展的今天，保留其实是对自己的一个认识。同时也是记录自己这一来的路程。

## 此项目线上地址
  http://jeremychen.site/web/

## 个人博客页面
  http://jeremychen.site/

## 个人SF
  https://segmentfault.com/u/jeremychen

## 注意：
  此项目比较大，如有愿意拿去学习的，此项目会很慢，不过在后期会进行相应的优化。


### 优化：
  1、开发采用fis3，所以如果要开发的话需要全局安装fis3
  2、

```
 项目启动： npm start
 项目打包： npm run build
```
# 个人信息
姓名：陈明
NAME：Jeremy
学历：本科
民族：汉族
出生日期：1990-04-08
学校：兰州理工大学
联系方式：17310360959
E-mail：361196961@qq.com
博客：http://jeremychen.site
SF: https://segmentfault.com/u/jeremychen
Github: https://github.com/jeremyChenMing

# 专业技能
熟练掌握HTML/CSS、HTML5/CSS3网页制作技术，熟悉W3C标准，熟悉页面架构和布局，熟练掌握响应式布局；
熟练使用less/sass组织可复用ui组件；
熟练掌握原生javascript语言，业余时间浏览过MDN；
熟练使用javascript的几种前端框架，如react、vue，jquery；
熟练掌握react各种脚手架，如dva、create-react-app、umi，vue-cli等框架，自己也从零搭过react全家桶项目的架构，在自己个github上有webpack2和webpack4架子；
熟练掌握react全家桶的知识，如react-router、redux、react-redux
熟练掌握webpack、grunt等前端自动化构建工具；
熟悉Typescript，搭过ts+react+react-router+redux的架子，在github上有项目；
熟悉ES6，ES7语法；
熟悉NodeJS，express，koa开发；
熟悉python+django后台开发，写过简单的增删改查接口，使用过koa+node开发过接口；
熟悉使用Git以及图形化工具sourcetree；

工作经历

2017.04 - 至今      易企飞人力资源科技有限公司       前端主管
  1、主管贵州西南水泥有限公司人力系统（前端）架子的搭建、页面的开发、维护、上线等；
  2、主管中瑞放胜（fesco）人力系统（前端）架子的搭建、页面的开发、维护、上线等；
  3、企飞App的H5相关页面；
  4、掌薪工资条小程序的开发和上线；
  5、企飞官网开发、维护、上线以及SEO；
  6、ops、hro、crm企业内部系统的前端开发、维护、上线等；
  7、以及兄弟公司承接的南昌产业园的官网、人力相关子系统的开发、维护；

2016.06 - 至今 2017.03   北京快人科技有限公司       前端开发者
  1、参与公司主体saas薪酬服务项目开发与维护
  2、参与公司主体App的H5相关页面的开发与维护

2015.08 - 至今 2017.03   上海尼采国际文教机构       前端开发者
  1、参与公司官网改版项目，负责UI展示和JS交互

项目经验

1、贵州西南水泥有限公司人力系统
<!-- 18910271863 12345678 dev. -->
网址：http://xnsn.upvi.com  
主要是为该公司定制的人力系统，内容包括员工、公司架构、公司的岗位、考勤、薪酬、绩效、审批、统计等模块。
技术：
    1）采用dva+react脚手架（实质就是webpack+react+react-redux+react-router等）；
    2）UI框架采用阿里的Ant Design,另外根据项目需要扩展了webpack相应的配置；
    3）接口采用fetch，进行了相应的请求头以前接口的封装，开发只管调用即可，鉴权方式采用的是JWT；
    4）代码规范采用standard，提交代码前强制校验；
    5）项目兼容到ie9+，采用babel-polyfill和es6-promise和es6-shim解决兼容问题；
    6）项目样式采用less、iconfont；
    7）项目路由切换过渡效果采用react-transition-group；
    8）表单操作采用的是redux-form和UI组件的Form相结合；
    9）接口采用proxy进行代理转发；
    负责项目架构的搭建，公司组织架构、考勤、薪酬、审批等模块的开发

2、中瑞方胜（fesco）人力系统
<!--18612819427 123456  d.-->
网址：http://fesco.upvi.com
主要是为该公司的定制的人力系统，内容主要是财务、合同、薪酬计算、工资条以及发放、企业管理及企业员工管理相关业务的一个系统。
技术：
  1）采用dva+react脚手架，项目架构同西南水泥架构大体相似；
  2）项目拖拽采用的是react-draggable
  负责项目架构的搭建以及部分模块的开发

3、企飞官网
网址：http://www.upvi.com/
技术：
  1）采用fis3+js；
  2) 样式采用less，并用autoprefixer进行补浏览器标识；
  3）采用多html写法，公用组件用link标签引进来
  负责新需求版本的迭代更新，更换框架，原框架是由gulp+js

4、掌薪工资条小程序
主要应用人群是员工，收到的工资条的展示以及工资条数据的相关统计
技术：
  1）采用gulp+less书写小程序，试试监听（watch）js,less的变动，只需要将编译后的文件名写成.wxss
  负责小程序的全部开发和上线

5、ops、hro、crm企业内部系统
主要是提供给本公司内部使用的业务系统
技术：
  1）采用dva+react框架
  2）图标工具使用echarts
  负责部分模块的开发
  
6、App的H5页面
主要是提供给本公司App（企飞）的一些展示和交互页面
技术：
  1）采用vue+webapck(从零搭建项目，多页面应用)；
  2）UI采用的是mint-ui，less样式文件，图标采用echarts；
  3）js代码片段采用underscore；
  4）开发使用的是webpack-dev-server热更新；
  5）项目打包webpack打包，静态资源拷贝；
  6）UI按需加载，路由懒加载等；
  负责项目价格的搭建，上线与维护，全部页面的模块开发

7、Saas薪酬服务项目
网址：http://console.d.upvi.com
主要是做了一款通用的人力系统，是一个标配薪酬服务系统，模块也有很多，例如人员管理、考勤管理、薪酬管理等模块，系统比较大。
技术：
  1）采用webpack1+react+redux+react-router等；
  2）样式采用定制antd，less样式文件，echarts图标；
  3）鉴权模式采用node做中间件鉴权，完全剥离前端，数据启用redis服务，后期正在优化剥离node中间件，实现分离；
  4）接口采用fetch，头部的'Service-Catalog'字段区分；
  4）开发采用webpack-dev-middleware+webpack-hot-middleware进行热更新；
  5）项目升级后采用webpack2，目前正在测试阶段；
  主要负责考勤管理，薪酬管理的模块开发，架构的从webpack1升级到webpack2（考虑的项目比较大，开发编译时间过长）



8、个人项目
利用业余时间写的相关项目
地址：https://github.com/jeremyChenMing?tab=repositories
  1）有webpack2和webpack4与react等全家桶搭乘的架子，在github上；
  2）vue.js全家桶PC端和Mobile端的架子和例子，在github上；
  3）dva老版本与新版本的项目架子，在github上；
  4）vue写的一个试卷网页，在github上；
  5）原生js写的个人主页，在github上，线上地址 http://jeremychen.site/web/；
  6）博客系统，采用的是hexo脚手架写的博客，部署在github page上，域名为阿里购买，地址映射在github page上,线上地址 http://jeremychen.site；

9、创业项目
支持朋友的创业，该项目主要是为积木玩家提供一个平台，上传和展示玩家作品，并且进行量产的一个产业链。
主要负责：前端官网和小程序的开发、上线、维护以及SEO
技术：
    1）采用react+react-router4+redux+webpack3
    2) 接口采用fetch，并且进行相关封装，做到拿来即用
    3）UI采用antd，less样式文件
    4）微信第三方登录与小程序互通


教育经历
2008.09-2012.06 甘肃省兰州理工大学
英语水平：CET4，具有良好的阅读能力，能读懂相关技术文档；
计算机水平：全国计算机等级三级（网络技术），全国计算机等级二级（C语言）

自我评价
1、能够积极主动与用户及同事和领导沟通，以便快速的解决项目遇到的问题；
2、喜欢专研和挑战，是一个电子控、技术控；
3、喜欢新鲜事物，了解新动态，如虎啸、前端大全公、程序员那些事等众号；
4、能快速融入团队，有强烈的集体荣誉感工作认真负责，积极上进；    
5、热爱前端技术，个性乐观，善于沟通，有较强的学习能力和团队协作精神；












