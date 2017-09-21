# node实现的网站爬虫

项目以抓取一个[博客网站](http://blog.sina.com.cn/u/1776757314)为例，并将数据保存在MySQL数据库中，可定时更新。

## 目录结构

+ **example** 目录：本实例最终的代码
+ **images** 目录：文章内容用到的图片
+ **snippets** 目录：文章内容用到的代码片段
+ **book.md** 文件：文章内容

## 项目启动命令

scripts中有两个命令：
+ crawler命令为爬取网站内容到数据库
+ server命令为带有定时功能并可展示数据（localhost:3000）的服务器程序指令

## 项目用到的相关模块

+ request：使用request模块来获取网页内容
+ cheerio：是jQuery Core的子集，实现了其中绝大部分的DOM操作API，适用于服务端
+ mysql：数据持久化到MySQL的驱动
+ async：一个使用比较广泛的JS异步流程控制模块
+ debug：用于打印调试信息，可通过设置环境变量来控制开发、测试、生产的信息输出
  + 可通过cross-env进行跨平台设置，cross-env DEBUG=blog:*
  + Windows系统在命令行下执行：set DEBUG=blog:*
  + Linux系统在命令行下执行：export DEBUG=blog:*
+ cron：使用[cron模块](https://www.npmjs.com/package/cron)来定时执行任务

## 开发过程中的难点或盲点

1. JS中[match](http://www.w3school.com.cn/jsref/jsref_match.asp)与[exec](http://www.w3school.com.cn/jsref/jsref_exec_regexp.asp)方法的区分  
2. node中的cron模块的定时规则与Linux中的定时任务工具[crontab语法规则](http://crontab.org/)大致相同，只是cron多了一个秒单位。具体如下：f1 f2 f3 f4 f5 f6
   + f1表示秒钟，f2表示分钟，f3表示小时，f4表示一个月份中的第几日，f5表示月份，f6表示一个星期中的第几天。
   + 各部分的取值含义如下（以f1部分为例，其他部分类似）：
     + 当值为*时，表示每秒执行一次；
     + 当值为a-b时，表示从第a秒到第b秒这段时间内执行一次；
     + 当值为*/n时，表示每隔n秒执行一次；
     + 当值为a-b/n时，表示从第a秒到第b秒这段时间内每隔n秒执行一次。


TODO
=====

增加 async 模块介绍

cron 模块介绍部分，增加简单的 cron 语法

末尾增加扩展内容：  Event: 'uncaughtException'

使用 gbk 模块来抓取 gbk 编码的内容