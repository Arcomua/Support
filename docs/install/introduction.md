# 安装

本文将指导您从零开始安装 Arcomua Modpack。若部分步骤已完成，则可以选择跳过。

## 准备工作

### 环境要求

由于 Java “一次编写，到处运行”的特性，只要您的操作系统具有可使用的 Java 运行时环境，那么大体上已经达成了玩 Minecraft 的必要条件。

但是，您仍需要使用现代硬件和操作系统。过于古老的软硬件很可能无法受到服务支持，且游玩体验可能会很糟糕。

请至少留出 8 GB 的存储空间和 2 GB 的运行内存以运行 Java 和 Minecraft。

### 安装 Java

建议优先让启动器自动下载并管理 Java。只有在自动安装失败或需要手动指定运行环境时，才需要自行安装。

请根据 Minecraft 版本选择推荐的 64 位 Java：

|Minecraft 版本|推荐 Java 版本|下载链接|
|:-----------:|:------:|:-----:|
|1.6 及更早版本|Java 7|[Zulu7]|
|1.7.\* ~ 1.16.\*|Java 8|[Zulu8]|
|1.17.x\* ~ 1.20.4\*|Java 17|[MSJDK17]/[Zulu17]|
|1.20.5\* ~ 26.1|Java 21|[MSJDK21]/[Zulu21]|
|26.2 及更新版本|Java 25|[MSJDK25]/[Zulu25]|

Minecraft 26.2 必须使用 Java 25 或更新版本，Java 21 无法正常启动该版本。

如果电脑中安装了多个 Java 版本，请在启动器的版本设置中为相应 Minecraft 实例指定正确的 Java 可执行文件。不要依靠系统默认 Java 自动匹配所有游戏版本。

对于 Arcomua Modpack，建议分配约 4GB 内存；使用大型资源包或光影时可提高到约 6GB，但不建议将电脑的全部内存分配给 Minecraft。

:::warning 警告
当使用与操作系统不匹配的 Java 版本（32 或 64 位）、使用某些 Java 7 版本或安装了多个版本的 Java 玩 Minecraft Java 版时，可能会在部分情况下引发用户体验问题。
:::

<!-- Download Links -->
[MSJDK17]: <https://learn.microsoft.com/zh-cn/java/openjdk/download#openjdk-17>
[MSJDK21]: <https://learn.microsoft.com/zh-cn/java/openjdk/download#openjdk-21>
[MSJDK25]: <https://learn.microsoft.com/zh-cn/java/openjdk/download#openjdk-25>
[Zulu7]: <https://www.azul.com/downloads/?version=java-7-lts&show-old-builds=true#zulu>
[Zulu8]: <https://www.azul.com/downloads/?version=java-8-lts&show-old-builds=true#zulu>
[Zulu17]: <https://www.azul.com/downloads/?version=java-17-lts&show-old-builds=true#zulu>
[Zulu21]: <https://www.azul.com/downloads/?version=java-21-lts&show-old-builds=true#zulu>
[Zulu25]: <https://www.azul.com/downloads/?version=java-25-lts&show-old-builds=true#zulu>

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
- [使用 PCL2 社区版安装整合包（教程编写中）](/install/pcl2-ce)
