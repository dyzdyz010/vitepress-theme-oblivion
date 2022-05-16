---
title: "重建 Bulletproof Task Management in Notion 中的 Priority Formula"
date: 2020-12-05T10:34:56+08:00
tags:
  - notion
  - life
author: dyzdyz010
collection: 生产力
---


昨天看了 [Bulletproof Task Management in Notion](https://www.notion.vip/bulletproof-task-management-in-notion/)，其中 *Tasks* 数据库中有一个字段叫做 `Priority`，用于根据 `Urgency`, `Impact`, `Workload`, `Enjoyment` 四个字段来计算一项任务的优先级：

![Projects Database Task Prioritizer](../../assets/img/2020/12/projects_database__task_prioritizer.png)

根据视频及[原文](https://www.notion.vip/bulletproof-tasks/#the-prioritizer)中提到的[The Eisenhower Matrix](https://todoist.com/productivity-methods/eisenhower-matrix)可以知道，作者将 Matrix 中的两个维度共四种情况分为 4 个优先级：1, 2, 3, 4，数字越小优先级越高：

![Eisenhower Matrix](../../assets/img/2020/12/productivity-methods_eisenhower-matrix.png)

根据Task Database中的设置，优先级共分为四个维度：
  - Urgency
  - Impact
  - Workload
  - Enjoyment

每个维度均有 `High`, `Medium`, `Low` 三种程度。四个维度各有权重，最终计算出 `Priority` 项的值。

原文及视频中没有给出具体的计算方式，但根据视频中已有的 5 条记录，我们可以利用解方程的方式计算出每个维度的权重：

![Prioritizer](../../assets/img/2020/12/bulletproof-task-management-priority-formula.png)

假设 `High`的优先级为 1，`Medium`的优先级为 2，`Low`的优先级为 3，设四个维度的权重分别为\\(a, b, c, d\\)。我们可以看到图中有几个特殊的`Priority`值：**1.67**、**1.83**、**2.67**，显然这是分数没有除尽而造成的截取误差。我们可以得到：

$$
\begin{aligned}
\begin{array}{l}
1.67 &\approx& 1.6666666666... &=& \dfrac{5}{3} \\[3ex]
1.83 &\approx& 1.8333333333... &=& \dfrac{11}{6} \\[3ex]
2.67 &\approx& 2.6666666666... &=& \dfrac{8}{3}
\end{array}
\end{aligned}
$$

如此一来，由前四行我们可以得到方程组：

$$
\begin{aligned}
\left\{
\begin{array}{l}
2a &+& b &+& 2c &+& 3d &=& \dfrac{3}{2} \\[3ex]
3a &+& b &+& c &+& 3d &=& \dfrac{5}{3} \\[3ex]
a &+& 2b &+& 3c &+& 2d &=& \dfrac{11}{6} \\[3ex]
3a &+& 2b &+& 3c &+& 2d &=& \dfrac{5}{2}
\end{array}
\right.
\end{aligned}
$$

求解可得：

$$
\begin{aligned}
\left\{
\begin{array}{l}
a &=& \dfrac{1}{3} \\[3ex]
b &=& \dfrac{1}{2} \\[3ex]
c &=& \dfrac{1}{6} \\[3ex]
d &=& 0
\end{array}
\right.
\end{aligned}
$$

看样子作者认为享受程度不影响任务的完成🤣

总之，有了权重之后，我们就可以将 `Priority` 的计算方式写进 formula：

```
round(
  (
    if(
      prop("Urgency") == "Low", 
      3, 
      if(
        prop("Urgency") == "Medium", 
        2, 
        1
      )
    ) / 3 + 
    if(
      prop("Impact") == "Low", 
      3, 
      if(
        prop("Impact") == "Medium", 
        2, 
        1
      )
    ) / 2 + 
    if(
      prop("Workload") == "Low", 
      3, 
      if(
        prop("Workload") == "Medium", 
        2, 
        1
      )
    ) / 6
  )* 100
) / 100
```

单行版本：

```
round((if(prop("Urgency") == "Low", 3, if(prop("Urgency") == "Medium", 2, 1)) / 3 + if(prop("Impact") == "Low", 3, if(prop("Impact") == "Medium", 2, 1)) / 2 + if(prop("Workload") == "Low", 3, if(prop("Workload") == "Medium", 2, 1)) / 6) * 100) / 100
```

完成！🎉