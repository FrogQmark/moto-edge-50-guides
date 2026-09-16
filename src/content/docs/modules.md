---
title: Magisk Modules
description: Tested Magisk / KernelSU modules for tank on Evolution X 12.2.
---

:::danger
Modules are the #1 bootloop cause. Install one at a time, reboot, test. Keep a way to disable modules from recovery / safe mode.
:::

## Tested table (Evolution X 12.2, 2026-09-11 build)

| Module | Version tested | Purpose | tank status |
|--------|----------------|---------|-------------|
| [Zygisk Assistant](https://github.com/snake-4/Zygisk-Assistant/releases) | v2.1.4 | Hide root from banking / WhatsApp | ✅ Recommended — use this, keep Enforce DenyList OFF |
| [Vector](https://github.com/JingMatrix/Vector) | v2.2 | Modern open-source LSPosed alternative (Xposed framework) | ✅ Works perfectly |
| Play Integrity Fix | — | Pass Device integrity | Not needed on EvoX — ROM ships its own PIF, see [Root](/root/) |
| Shamiko | [v1.2.5](https://github.com/LSPosed/LSPosed.github.io/releases) | Hide root (Zygisk) | ❌ Did not work on EvoX — use Zygisk Assistant instead |
| AlwaysStrong | v1.0.4 | All-in-one PIF + TrickyStore | ❌ Not needed on EvoX — conflicts with built-in PIF/TrickyStore, use [EvoX spoofing](/root/#way-2-evolution-x-only--built-in-spoofing) |
| Systemless Hosts | built-in | Adaway host blocking | ✅ Works perfectly (Magisk built-in, enable in Magisk settings) |

## Safe install flow

1. Download from official GitHub (not random mirrors)
2. Magisk > Modules > Install from storage > reboot
3. If bootloop: hold Vol Up during boot to enter safe mode (disables modules), or `adb wait-for-device shell magisk --remove-modules` from PC, then reboot

## Do not install

- Duplicate integrity / safetynet fixers together
- Audio + camera HAL mods built for other SoCs
- Any module marked Android 13/14-only on Android 17

Report: module, version, Evolution X build date, pass/fail, logs if fail.
