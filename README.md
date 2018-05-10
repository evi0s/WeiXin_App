# 答题系统-微信客户端

工作室答题系统微信小程序端

## 项目定位

我们旨在开发一个能在微信小程序平台上运行的答题系统客户端。区别于传统的题库网站，该答题系统拥有实时发布题目，实时评测，题目解析，题目讨论等交互功能之外，还能根据客户需要，定制客户专属题目。

该系统主要用于学习交流，任何人都可以通过微信小程序等各个平台注册账号登陆我们的答题系统，题目包含但不限于数学，计算机科学，物理学⋯⋯，用户包含但不限于小学生，中学生，大学生，在职工作者，甚至是老年人。只要有一颗追求新知识，想要同志同道合的人一起讨论学习，都可以访问我们的系统。

初步定位是用于成员内部学习交流使用的微信小程序客服端，随后将会向学校，公众进行推广。使人们能够通过微信简单快捷的登陆我们的系统，使用系统提供的各项功能进行高效而有趣的学习。

在拥有微信小程序客户端的基础上，陆续将推出安卓客户端，苹果客户端，PC客户端，WEB主页等，实现系统的跨平台化，使得用户能在各种各样的环境下便捷的登陆系统。

## 项目用户

项目初期旨在给工作室内部招新时或小范围培训时使用，项目完善后可向社会开放，面向所有老师、学生甚至工作者、老年人等群体，提供一个习题问答、学术交流等的平台。

## 项目目标

首先要实现的答题系统的微信小程序客户端开发。在云服务器上搭建好服务器运行环境，完成数据库等各种模块的架构。其次是完成微信小程序端的UI样式设计，规划各个部分的路由控制，与后台的API对接方式等等问题

## 项目背景

早期招纳成员时，采用了在线问答，线下笔试，面试等各种方法对候选者进行考核。虽然方法多样化，但是无论线上线下都受到时间、空间等各种因素的干扰，或多或少都有一些不便的地方。同时对于团队的新成员进行培训时没有一个高效、出众的培养模式，团队成员中对某一知识点的理解出现疑问时也只能通过线上聊天的形式进行讨论，十分的不方便。

于是，在诸如以上这些问题的影响下，萌生了构建一个答题系统的念头，方便内部成员进行考核、培训、交流等。

如今又有新的发展，便是要讲这个系统公开化，跨平台化。

## 基础架构

本小程序app使用wx.request请求答题系统提供的标准API获取数据，系统后台拥有通用的API使得各个平台都能够统一、便利、快捷的获取所需数据。

前端：使用微信web开发工具，借助微信官方提供的各种API完成设计的用户界面UI。

后台：预计将会采用Node.JS+MongoDB+Nginx的结构，对服务器进行优化，达到能够高效的处理庞大的用户数据和题目信息。

答题系统属工作室项目，具有通用请求API，后端架构详见 [QuestionSystem](https://github.com/evi0s/QuestionSystem-Rebuild)

## 功能实现

### 主界面

![alt](https://wcxp1314.oss-cn-shenzhen.aliyuncs.com/wx_img/2.png)

主界面将会展示工作室答题系统封面等信息以及一些推送的学习资料，近期新加入的题目等内容，这一部分将由答题系统的管理员负责更新与推送。

### 题目列表

![alt](https://wcxp1314.oss-cn-shenzhen.aliyuncs.com/wx_img/IMG_1974.PNG)

题目列表将会列出答题系统中的所有题目，每页将会显示十个到二十个题目标题，用户可根据需求，通过点击某一题目标题来查看具体的题目内容。对于每一道题目，用户可以提交自己的答案、查看题目的题解、发布题目相关的讨论内容等等操作。

同时，用户拥有发布题目的权利，支持纯文本书写，图片上传，markdown格式上传等功能，用户上传的题目将由管理员进行审核后发布到题目列表。同时，管理员有权利删除任意一道题目、题解或讨论。

### 讨论区

![alt](https://wcxp1314.oss-cn-shenzhen.aliyuncs.com/wx_img/IMG_1975.PNG)

类似于题目讨论，用户可在讨论区发布讨论内容，其他用户可在讨论区对应的标题下进行回复，讨论发布者在收到回复信息后将会收到系统的提示，以此达到多人线上讨论的效果。同样的，管理员拥有管理讨论区的权限，对用户发布的内容保留审核，删除，修改的权限。

### 我的

![alt](https://wcxp1314.oss-cn-shenzhen.aliyuncs.com/wx_img/IMG_1976.PNG)

用户个人界面将会显示用户个人信息，包括用户的头像和用户名等。用户可在该界面修改用户详细信息，对进行一些设置操作，或是注销、切换账号。
