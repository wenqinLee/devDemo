[toc]

####《markdown学习笔记》-J&L

####1.标题
----
```
# 一级标题## 二级标题
### 三级标题 
####四级标题
#####五级标题
######六级标题
```
-----------
####2.列表
#####无序列表
* 1
* 2
* 3

+ 1
+ 2
+ 3

- 1
- 2
- 3
#####有序列表
1. 列表1
2. 列表2
3. 列表3
1. 列表1
2. 列表2
3. 列表3
#####未完成的列表
- [ ] 待选择的列表
- [ ] 待选择的列表
- [ ] 待选择的列表
#####已选择的列表
- [x] 已选择的列表
- [x] 已选择的列表
- [x] 已选择的列表
####3.区块引用
* 下面是区块引用的例子：
    >这是区块
* 接着联系
    >我还是区块
* 前方高能
>1级引用
>>2级引用
>>>3级引用
>>>>4级引用
>>>>>5级引用
####4.分割线
***
---
___

####5.链接
#####（1）行内式
[我是百度](http://www.baidu.com)点击进入
* [我也是百度](http://www.baidu.com)只是我加了列表样式
#####（2）参数式
[name]:http://www.baidu.com "名称"
[home]:http:www.baidu.com "首页"
[也支持中文]:/home/name
这里是[name],这里是[home]，这里是[也支持中文]
####6.图片
![我是图片](imageUrl)
[图片]:imageUrl

####7.代码框
#####（1）单行代码用单引号

`<p><a href="/home" title="说明">说明文字</a></p>`
#####（2）多行代码用三个单引号
```
<p><a href="/home" title="说明">说明文字</a></p>
<p><a href="/home" title="说明">说明文字</a></p>
<p><a href="/home" title="说明">说明文字</a></p>
```
####8.table
表格一|b
--------|-------
表头1  | 表头2
--------|-------
content cell|content cell
content cell|content cell

表格二|，|.|
-|-|-
学号|姓名|分数
-|-|-
01|小明|70
01|小红|90
03|小张|80

####9.字体
*我是斜的*
_我也是斜的吧_
**我变胖了点**
__我也胖了__
==我有背景色哦==

####10.转义
* \\ 用于转义字符
* \` 我是返单引号
* \~
*  \*
* \_
* \-
* \+
* \.
* \!

####11.删除线
~~我被删除的文字~~

####12.生成目录

[TOC]

#### 13 自定义折叠区
<details>
<summary>已更新：</summary>
  content
</details>

