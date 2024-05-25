
# PaperPVP

这是由**Paper99**开发的，可以由玩家**自己控制**是否开启PVP模式的插件。

玩家PVP模式默认为**开启**。

当玩家关闭PVP模式后，其他玩家将无法直接攻击该玩家，该玩家也无法直接攻击其它玩家。

当关闭PVP模式的玩家攻击其它玩家时，会有消息提示（攻击者）。

当攻击关闭PVP模式的玩家时，会有消息提示（攻击者）。

TODO：此插件尚未开源，开源了可以放一个GitHub链接

## 命令

- `/pvp on` 玩家命令，开启自己的PVP模式

- `/pvp off` 玩家命令，关闭自己的PVP模式

- `/pvp status` 玩家命令，查看自己是否PVP模式

- `/pvp reload` 管理命令，重载插件配置

> [!TIP]
> 如果`/pvp`命令与其它插件冲突，可使用全命令`/paper-pvp`代替。如：`/paper-pvp off`


## 权限

> [!NOTE]
> 所有权限默认`false`，需要手动配置权限。

- `paper-pvp.command.on` 允许玩家开启PVP模式（`/pvp on`）

- `paper-pvp.command.off` 允许玩家关闭PVP模式（`/pvp off`）

- `paper-pvp.command.status` 允许玩家查看自己的PVP模式（`/pvp status`）

- `paper-pvp.command.reload` 重载插件配置所需要的权限（`/pvp reload`）


## 配置文件

配置文件：`config.yml`

> [!TIP]
> 下文中的`Coins`在PaperCard服务器中含义为`电池`

- `coins.on` 玩家开启PVP模式需要的Coins，默认值：`10`

- `coins.off` 玩家关闭PVP模式需要的Coins，默认值：`1`
