# node实现的网站爬虫

项目以抓取一个[博客网站](http://blog.sina.com.cn/u/1776757314)为例，并将数据保存在MySQL数据库中，可定时更新。

## 目录结构

+ **example** 目录：本实例最终的代码
+ **images** 目录：文章内容用到的图片
+ **snippets** 目录：文章内容用到的代码片段
+ **book.md** 文件：文章内容

## 项目用到的相关模块

+ request：使用request模块来获取网页内容
+ cheerio：是jQuery Core的子集，实现了其中绝大部分的DOM操作API，适用于服务端
+ mysql：数据持久化到MySQL的驱动
+ async：一个使用比较广泛的JS异步流程控制模块
+ debug：用于打印调试信息，可通过设置环境变量来控制开发、测试、生产的信息输出
  + 可通过cross-env进行跨平台设置，cross-env DEBUG=blog:*
  + Windows系统在命令行下执行：set DEBUG=blog:*
  + Linux系统在命令行下执行：export DEBUG=blog:*

## 开发过程中的难点或盲点

1. JS中[match](http://www.w3school.com.cn/jsref/jsref_match.asp)与[exec](http://www.w3school.com.cn/jsref/jsref_exec_regexp.asp)方法的区分  

TODO
=====

增加 async 模块介绍

cron 模块介绍部分，增加简单的 cron 语法

末尾增加扩展内容：  Event: 'uncaughtException'

使用 gbk 模块来抓取 gbk 编码的内容