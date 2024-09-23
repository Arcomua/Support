# 安装

本文将指导您从零开始安装Arcomua Modpack并准备好游玩Minecraft。若部分步骤已完成，则可以选择跳过。

## 准备工作

### 安装Java

首先，请确保您的电脑已安装了合适的Java运行时环境（JRE）或Java开发套件（JDK）。对于大部分玩家来说，JRE与JDK作用相同。若有Java开发需求，可以选择安装JDK；若希望节省存储空间，可以选择安装JRE。

请按照下表选择需要安装的Java版本，您可以在同一台机器上安装多个不同版本的Java。

:::warning 警告
当使用与操作系统不匹配的Java版本（32或64位）、使用某些Java 7版本或安装了多个版本的Java玩Minecraft Java版时可能会在部分情况下引发用户体验问题。
:::

|Minecraft版本|最低Java版本|下载链接|
|:-----------:|:------:|:-----:|
|低于1.7（不包括1.7）|Java7|[Zulu7]|
|1.7.\*~1.16.\*|Java8|[Zulu8]|
|1.17.\*~1.20.\*|Java17|[MSJDK17]/[Zulu17]|
|高于1.21.\*（包括1.21）|Java21|[MSJDK21]/[Zulu21]|

<!-- Download Links -->
[MSJDK17]: <https://learn.microsoft.com/zh-cn/java/openjdk/download#openjdk-17>
[MSJDK21]: <https://learn.microsoft.com/zh-cn/java/openjdk/download#openjdk-21>
[Zulu7]: <https://www.azul.com/downloads/?version=java-7-lts&show-old-builds=true#zulu>
[Zulu8]: <https://www.azul.com/downloads/?version=java-8-lts&show-old-builds=true#zulu>
[Zulu17]: <https://www.azul.com/downloads/?version=java-17-lts&show-old-builds=true#zulu>
[Zulu21]: <https://www.azul.com/downloads/?version=java-21-lts&show-old-builds=true#zulu>

下载好安装包后，请按照安装向导进行安装操作。安装结束后，您可以选择是否重启计算机。

### 安装启动器

目前绝大多数第三方启动器对安装整合包有良好的支持，而Minecraft Launcher（即“官方启动器”）不具有这些方便的功能，因此本教程不使用官方启动器进行教学。

您可以在下方选择自己喜爱的第三方启动器，这些启动器都可以协助您启动游戏、管理模组或安装整合包。

- [HMCL](https://hmcl.huangyuhui.net/) - 老牌国产启动器，包含一键安装、版本管理等多种功能。

- [Prism Launcher](https://prismlauncher.org/) - 使用Qt开发的启动器，可管理多个游戏实例。

:::info 提示
其他国产启动器推荐：[PCL2](https://afdian.com/p/0164034c016c11ebafcb52540025c377) · [BakaXL](https://www.bakaxl.com/)

其他国外启动器推荐：[MultiMC](https://multimc.org/) · [ATLauncher](https://atlauncher.com/)
:::

## 安装整合包

当您准备好Java和启动器后，就可以开始安装整合包。我们为不同的启动器准备对应的教程。

### 使用HMCL安装

1. 首先打开HMCL，点击左侧栏的“下载”按钮。

2. 进入“下载”页后，点击左侧栏的“整合包”按钮。

3. 切换到“整合包”页后，找到顶部的“下载源”字样，点击旁边的白框以打开下拉菜单，切换到“Modrinth”。

4. 点击“名称”旁边的白框，输入“Arcomua”，点击“搜索”按钮。

5. 选择好需要下载的整合包后，点击对应的条目。

6. 选择想玩的Minecraft版本，点击对应的条目。在下拉菜单中选择最上面的的条目，在弹出的窗口中，点击“下载”按钮。

7. 点击后即可进入“导入整合包”页，点击右下方的“安装”按钮即可自动安装。安装完成后，点击“确定”。

8. 点击启动器窗口左上角的小房子图标回到主菜单，此时点击右下角的“启动游戏”即可使用Arcomua整合包。

9. 如果启动器里有其他游戏示例，可能需要在“版本列表”中，点击Arcomua整合包左侧的圆圈才能在主菜单启动。

10. 若您在使用HMCL时遇到其他问题，请[点此](https://docs.hmcl.net/help.html)向HMCL开发组寻求帮助。

:::warning 警告
如果安装不成功，请检查网络是否正常，电脑存储空间是否充足。
:::

<!-- ### 使用Prism Launcher安装

1. 打开Prism Launcher，点击“文件”，在下拉菜单中选择“添加实例”。

### 使用PCL2安装

### 使用BakaXL安装

### 使用MultiMC安装

### 使用ATLauncher -->
