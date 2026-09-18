---
title: Root Apps
description: Curated root apps tested on Evolution X tank.
---

Only list apps you or trusted testers verified on tank + Evolution X 12.2. Note the version tested.

## Backup & system

- [**Neo Backup**](https://github.com/NeoApplications/Neo-Backup) — free, open-source app + data backup, batch restore after clean flash (needs root)
- [**Swift Backup**](https://play.google.com/store/apps/details?id=org.swiftapps.swiftbackup) — same idea, polished UI, but cloud backup is paid
- **App Manager** — debloat, trackers, inspect permissions
- **Franco Kernel Manager / EX Kernel Manager** — kernel tweaks, battery profiles (only if kernel supports)

## File / ADB

- **MiXplorer / Material Files + root add-on** — system partition browsing
- **Termux + root** — on-device shell, `su`, fastbootd helpers
- **Shizuku** — root-less API bridge for apps that support it (useful if you unroot but keep ADB). Note: upstream is stale (>1 yr), so prefer [**Shevery**](https://github.com/HmnDev-Tech/shevery) — actively maintained Shizuku-compatible fork with Material 3 UI, Android 16/17 support, ADB modules + catalog, and extra shell/Comput features

## Tweaks

- [**Vector**](https://github.com/JingMatrix/Vector) — modern open-source Xposed framework (LSPosed alternative, works on EvoX)
- **Iconify** — SystemUI theming
- **Viper4Android / JamesDSP** — audio (can break on new Android, test per build)

## Safety rules

- Grant root only to apps you trust, one at a time
- Avoid “RAM booster / optimizer” root apps — they cause more bootloops than benefits
- After major ROM update, reinstall root apps before restoring data

Suggest additions with: app name, Play / GitHub link, tank build tested, what it fixes.
