---
title: Flash ROMs
description: Generic clean flash, update, and GApps guide for custom ROMs on tank.
---

:::caution
Always follow the ROM maintainer's XDA / release post if it differs from this page. Backup first. See [All ROMs](/roms/) for tank-specific builds.
:::

## What you need

- Unlocked bootloader ([Unlock](/unlock/))
- ROM zip for **tank** from [All ROMs](/roms/) + verified checksum
- Maintainer-specified recovery / boot image — for the 2026-09-11 Evolution X build, a copy is mirrored on [Google Drive](https://drive.google.com/file/d/10k2eF2NqXqVyHjPvFnz-seP-16OedXSB/view?usp=drive_link) (100 MB, check ROM page before using on other builds)
- Platform-tools, 60%+ battery
- Decide GApps vs Vanilla **before** flashing (see below)

## GApps vs Vanilla

- **GApps included (GMS)**: ROM ships with Google apps. Flash ROM only, done. Do not flash extra GApps.
- **Vanilla (no GApps)**: ROM has no Google apps. You must flash GApps separately right after the ROM if you want Play Store:
  - [NikGapps](https://nikgapps.com/downloads) — pick the build matching your Android version + ARM64
  - [MindTheGapps 17.0.0-arm64](https://github.com/MindTheGapps/17.0.0-arm64/releases) — for Android 17
- Use GApps built for your ROM's Android version. Wrong version = bootloop.

## Clean flash (first install)

1. `adb reboot bootloader`
2. Flash recovery if required by maintainer:
```bash
fastboot flash recovery recovery.img
# or for A/B with boot-as-recovery:
fastboot flash boot boot.img
fastboot flash vendor_boot vendor_boot.img
```
3. Reboot to recovery: select "Recovery Mode" with the physical buttons, or `fastboot reboot recovery`
4. In recovery: Factory reset / Format data (required coming from stock or another ROM)
5. Sideload ROM:
```bash
adb sideload rom-tank-*.zip
```
Or copy zip to phone and Install in recovery UI, if you're using a custom recovery that supports it.  

Recovery will ask if you want to reboot to recovery after sideload  

6. **If GApps ROM: choose no, and reboot to system.** First boot should take under 2 min. Done.
7. **If Vanilla + you want GApps:** Choose yes, then sideload GApps the same way:
```bash
adb sideload NikGapps-*.zip
# or MindTheGapps-*.zip
```
Then reboot to system.

Do not boot to system between ROM and GApps on a vanilla install — flash them back-to-back or Play Services will misbehave and you'll need a clean flash.

## Dirty flash / update

Only if staying on the same ROM and maintainer allows it:

1. Reboot to recovery
2. `adb sideload` new build without wipe
3. If vanilla + GApps: re-flash the **same** GApps package right after (most setups require it, check maintainer notes)
4. Wipe cache / Dalvik if offered
5. Reboot

If bootloop after a dirty flash, do a clean flash. Major Android bumps usually require a clean flash.

## Slots (A/B)

tank is A/B. After sideload, recovery handles slot switch automatically. Do not manually change slots unless maintainer says so. If stuck in fastboot after flash:

```bash
fastboot getvar current-slot
fastboot --set-active=a
# or b, then:
fastboot reboot
```

## Back to stock

1. Use Motorola Online Fix (RSA) (Recommended. Windows only), or
2. Download exact XT2407 stock firmware from [Resources](/resources/) 
3. Relocking (`fastboot oem lock`) is **not recommended** on custom firmware — only relock on 100% stock, same variant, or you hard-brick.
