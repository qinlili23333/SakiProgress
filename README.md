# SakiProgress
简单无依赖的网页悬浮进度条，名字的灵感来自老大哥@早见咲Saki  
[![](https://data.jsdelivr.com/v1/package/gh/qinlili23333/SakiProgress/badge)](https://www.jsdelivr.com/package/gh/qinlili23333/SakiProgress)


## 接口说明
#### init(?颜色)`1.0.0`  
初始化进度条，调用其他接口前必须先调用该接口  
颜色是可选参数，用于进度条颜色  
#### destroy()`1.0.1`  
销毁进度条，可在body内容大幅更改前调用，等之后重新初始化  
#### setPercent(百分比)`1.0.0`  
设置进度条百分比，传入纯数字，不需要带百分号  
#### clearProgress()`1.0.0`  
清空进度条到0%  
#### hideDiv()`1.0.0`  
隐藏进度条  
#### showDiv()`1.0.0`  
显示进度条  
#### setText(文本)`1.0.0`  
设置进度条显示的文本  
