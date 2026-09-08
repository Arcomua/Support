# Installation

This guide will walk you through installing the Arcomua Modpack from scratch. If you have already completed some steps, you may skip them.

## Preparation

### System requirements

Thanks to Java's “write once, run anywhere” nature, as long as your operating system has a usable Java runtime environment, you have generally met the basic requirements for playing Minecraft.

However, you still need modern hardware and an operating system. Hardware or software that is too old may no longer be supported and may provide a poor gameplay experience.

Please reserve at least 8 GB of storage space and 2 GB of RAM to run Java and Minecraft.

### Install Java

We recommend letting your launcher download and manage Java automatically. You only need to install Java manually if automatic installation fails or you need to specify a runtime yourself.

Choose the recommended 64-bit Java version according to your Minecraft version:

|Minecraft version|Recommended Java version|Download links|
|:-----------:|:------:|:-----:|
|1.6 and earlier|Java 7|[Zulu7]|
|1.7.\* ~ 1.16.\*|Java 8|[Zulu8]|
|1.17.x\* ~ 1.20.4\*|Java 17|[MSJDK17]/[Zulu17]|
|1.20.5\* ~ 26.1|Java 21|[MSJDK21]/[Zulu21]|
|26.2 and later|Java 25|[MSJDK25]/[Zulu25]|

Minecraft 26.2 requires Java 25 or later. Java 21 cannot launch this version correctly.

If you have multiple Java versions installed, specify the correct Java executable for each Minecraft instance in the launcher's version settings. Do not rely on the system default Java to match every game version automatically.

For Arcomua Modpack, allocating about 4 GB of memory is recommended. You can increase this to about 6 GB when using large resource packs or shaders, but do not allocate all of your computer's memory to Minecraft.

:::warning Warning
Using a Java version whose architecture does not match your operating system (32-bit or 64-bit), using certain Java 7 versions, or having multiple Java versions installed when playing Minecraft: Java Edition may cause user experience issues in some cases.
:::

<!-- Download Links -->
[MSJDK17]: <https://learn.microsoft.com/en-us/java/openjdk/download#openjdk-17>
[MSJDK21]: <https://learn.microsoft.com/en-us/java/openjdk/download#openjdk-21>
[MSJDK25]: <https://learn.microsoft.com/en-us/java/openjdk/download#openjdk-25>
[Zulu7]: <https://www.azul.com/downloads/?version=java-7-lts&show-old-builds=true#zulu>
[Zulu8]: <https://www.azul.com/downloads/?version=java-8-lts&show-old-builds=true#zulu>
[Zulu17]: <https://www.azul.com/downloads/?version=java-17-lts&show-old-builds=true#zulu>
[Zulu21]: <https://www.azul.com/downloads/?version=java-21-lts&show-old-builds=true#zulu>
[Zulu25]: <https://www.azul.com/downloads/?version=java-25-lts&show-old-builds=true#zulu>

### Install a launcher

Most third-party launchers provide good support for installing modpacks, while Minecraft Launcher (the “official launcher”) does not offer these convenient features. Therefore, this guide does not use the official launcher.

You can choose your preferred third-party launcher below. These launchers can help you launch the game, manage mods, or install modpacks.

- [HMCL](https://hmcl.huangyuhui.net/) - A long-established Chinese launcher with features such as one-click installation and version management.
- [Prism Launcher](https://prismlauncher.org/) - A launcher built with Qt that can manage multiple game instances.

:::info Note
Other recommended launchers: [PCL2](https://afdian.com/p/0164034c016c11ebafcb52540025c377) · [BakaXL](https://www.bakaxl.com/)
:::

## Install the modpack

Once you have Java and a launcher ready, you can install the modpack. We have prepared separate guides for different launchers.

- [Install the modpack with HMCL](/en/install/hmcl)
- [Install the modpack with PCL2](/en/install/pcl2)
- [Install the modpack with BakaXL](/en/install/bakaxl)
- [Install the modpack with the PCL2 Community Edition (guide in progress)](/en/install/pcl2-ce)
