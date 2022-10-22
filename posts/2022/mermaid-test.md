---
title: Mermaid测试
date: 2022-10-22
author: dyzdyz010
collection: Test Cases
draft: false
tags:
  - javascript
  - markdown
  - showcase
---

```mermaid
flowchart TD

A[SceneServer] --> B[InterfaceSup]
A --> C[PlayerSup]
A --> D[AoiSup]
B --> E[Interface]

subgraph Player
C --> F[PlayerManager]
C --> G[PlayerCharacterSup]
G -- 1:N --> J[PlayerCharacter]
end

subgraph AOI
D --> H[AoiManager]
D --> I[AoiItemSup]
I -- 1:N --> K[AoiItem]
end

J -.-> K
```