# 安装

本文将指导您从零开始安装 Arcomua Modpack。若部分步骤已完成，则可以选择跳过。

## 准备工作

### 环境要求

由于 Java “一次编写，到处运行”的特性，只要您的操作系统具有可使用的 Java 运行时环境，那么大体上已经达成了玩 Minecraft 的必要条件。

但是，您仍需要使用现代硬件和操作系统。过于古老的软硬件很可能无法受到服务支持，且游玩体验可能会很糟糕。

请至少留出 5GB 的存储空间以运行 Java 和 Minecraft。

### 安装Java

首先，请确保您的电脑已安装了合适的Java运行时环境（JRE）或 Java 开发套件（JDK）。对于大部分玩家来说，JRE 与 JDK 作用相同。若有 Java 开发需求，可以选择安装 JDK；若希望节省存储空间，可以选择安装 JRE。

请按照下表选择需要安装的 Java 版本，您可以在同一台机器上安装多个不同版本的 Java。

:::warning 警告
当使用与操作系统不匹配的 Java 版本（32或64位）、使用某些Java 7版本或安装了多个版本的 Java 玩 Minecraft Java 版时可能会在部分情况下引发用户体验问题。
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

绝大多数第三方启动器对安装整合包有良好的支持，而 Minecraft Launcher（即“官方启动器”）不具有这些方便的功能，因此本教程不使用官方启动器进行教学。

您可以在下方选择自己喜爱的第三方启动器，这些启动器都可以协助您启动游戏、管理模组或安装整合包。

- [HMCL](https://hmcl.huangyuhui.net/) - 老牌国产启动器，包含一键安装、版本管理等多种功能。

- [Prism Launcher](https://prismlauncher.org/) - 使用 Qt 开发的启动器，可管理多个游戏实例。

:::info 提示
其他启动器推荐：[PCL2](https://afdian.com/p/0164034c016c11ebafcb52540025c377) · [BakaXL](https://www.bakaxl.com/)
:::

## 安装整合包

当您准备好 Java 和启动器后，就可以开始安装整合包。我们为不同的启动器准备对应的教程。

- [使用 HMCL 安装整合包](/install/hmcl)
- [使用 PCL2 安装整合包](/install/pcl2)
- [使用 BakaXL 安装整合包](/install/bakaxl)
- [使用 PCL2 社区版安装整合包](/install/pcl2-ce)