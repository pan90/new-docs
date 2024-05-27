# 封禁、解封与举报☠️
**PaperCard使用自己开发的封禁与举报系统。**

1. 在封禁到期之前，可由相关玩家决定封禁与解封，所谓“由相关玩家决定处罚方式（封禁时长）”。
2. 确认举报后，被举报玩家会被立刻踢出游戏并24小时限制登录，直到管理员处理举报。
3. 若举报成功，举报者可获得一定奖励，被举报者会被封禁一定时长。
4. 若举报失败，举报者若被判定为恶意举报，将被封禁一定时长，被举报者会获得一定赔偿。
5. 在举报之前，请确保有充足的证据（截图，录屏等）。
6. 如果要举报恶意破坏与盗窃，直接举报即可，随时可查的COI记录就是证据。
7. 如果你不知道怎么查是谁干的，可以向管理员或其它玩家寻求帮助。
8. 管理员在封禁矿透和其它作弊行为时，应当将相关玩家设置为自己，即使是其它玩家举报的，举报信息可写在封禁理由中。
指令总览
### 封禁相关（玩家）
- `/ban help`&nbsp;&nbsp; 查看帮助（本篇文档）
- `/ban list`&nbsp;&nbsp; 查看与自己有关的封禁记录
- `/ban list-about <玩家名>`&nbsp;&nbsp; 查看与指定玩家有关的封禁记录
- `/ban list-all`&nbsp;&nbsp; 查看所有封禁记录
- `/ban view <封禁ID>`&nbsp;&nbsp; 查看指定封禁ID的封禁记录
- `/ban ban <封禁ID>`&nbsp;&nbsp; 执行封禁（不推荐使用，因为可以实现点击封禁了）
- `/ban unban <封禁ID>`&nbsp;&nbsp; 执行解封（不推荐使用，因为可以实现点击封禁了）
### 封禁相关（管理员）
- `/ban soft-ban <被封禁玩家> <相关玩家> <封禁理由> <封禁时长>`&nbsp;&nbsp; 执行软封禁，添加一条封禁记录
- `/ban delete <封禁ID>`&nbsp;&nbsp; 删除指定ID的封禁记录
### 举报相关（玩家）
- `/report help`&nbsp;&nbsp; 查看帮助（本篇文档）
- `/report player`&nbsp;&nbsp; <玩家名> <举报理由> 举报玩家
- `/report confirm`&nbsp;&nbsp; 确认举报（不推荐使用，因为可以一键确认）
- `/report cancel`&nbsp;&nbsp; 取消举报（不推荐使用，因为可以一键确认）
- `/report list`&nbsp;&nbsp; 查看未处理的举报记录，可点击翻页，点击处理举报（管理员）
- `/report list-accepted`&nbsp;&nbsp; 查看成功的举报，可点击翻页
- `/report list-rejected`&nbsp;&nbsp; 查看失败的举报，可点击翻页
举报相关（管理员）
- `/report accept <举报ID> <备注>`&nbsp;&nbsp; 标记为举报成功，不推荐使用，因为report list中可以一键处理
- `/report reject <举报ID> <备注>`&nbsp;&nbsp; 标记为举报失败，不推荐使用，因为report list中可以一键处理
- `/report delete <举报ID>`&nbsp;&nbsp; 删除指定ID的举报记录