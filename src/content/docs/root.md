---
title: Root and Play Integrity
description: Root Evolution X on tank with Magisk, KernelSU notes, and Play Integrity.
---

:::
If your build comes pre-rooted with KernelSU, you can skip Magisk instructions. Check it on your build's page 
:::

Tested target: Evolution X 12.2 on tank. Methods change per build — trust maintainer notes over generic guides.

## Get boot.img (3 ways)

Use the image matching your **exact installed** build. Never patch a boot.img from a different build.

**1. Download from Drive (easiest):** use the [boot.img mirror](https://drive.google.com/file/d/10k2eF2NqXqVyHjPvFnz-seP-16OedXSB/view?usp=drive_link) linked on the [Evolution X page](/roms/evolution-x/) — only valid for the 2026-09-11 build.

**2. Extract from ROM zip on laptop:** Evolution X zips use `payload.bin` (not a plain `boot.img`). Extract it with [ssut/payload-dumper-go](https://github.com/ssut/payload-dumper-go):
```bash
payload-dumper-go -p boot /path/to/build.zip
# output lands in ./extracted_YYYYMMDD_hhmmss/
```

**3. Dump from phone in TWRP:** boot to TWRP, then on the laptop run (replace `a` with your slot — check `fastboot getvar current-slot`):
```bash
adb shell dd if=/dev/block/by-name/boot_a of=/sdcard/boot.img
adb pull /sdcard/boot.img
```

## Patch with Magisk

1. Install Magisk APK from https://github.com/topjohnwu/Magisk/releases
2. Get `boot.img` above
3. Copy image to phone, open Magisk > Install > Select and Patch a File > pick image > Start
4. Copy `magisk_patched-*.img` back to PC
5. Flash:
```bash
adb reboot bootloader
fastboot flash boot magisk_patched.img
fastboot reboot
```
6. Open Magisk, verify installed, enable Zygisk if needed

Never flash a patched image from a different build / version.


## Play Integrity / banking apps (Strong)

An unlocked bootloader trips Play Integrity. Two working paths on tank:

### Way 1: Any ROM — ReZygisk + AlwaysStrong (easiest)

1. Magisk/KernelSU + [ReZygisk](https://github.com/PerformanC/ReZygisk) module installed
2. Install [AlwaysStrong](https://github.com/evoker0/AlwaysStrong) — packs PIF + TrickyStore + everything in one module
3. Reboot, check integrity. Done.

### Way 2: Built-in spoofing — ROM dependent.

ROMs such as EvoX and Infinity X ship PIF + TrickyStore, no extra modules needed:

1. Settings > Evolver > Miscellaneous > Spoofing > enable **PIF**
2. Tap **Fetch Pixel canary fingerprint** — device selector opens, pick any device. Prefer older models (last longer); latest Pixels expire fast.
3. Back in Spoofing > enable **TrickyStore**
4. Tap **Fetch official Keybox**. Done — Strong passes.

### Hide root from WhatsApp / banking

Magisk:
- Install [**Zygisk Assistant**](https://github.com/snake-4/Zygisk-Assistant/releases) module
- Magisk settings: **DO NOT enable Enforce DenyList**
- Hide the Magisk app (Magisk > Settings > Hide the Magisk app) if an app still detects it

KernelSU:
- Install [ReZygisk](https://github.com/PerformanC/ReZygisk) and [HMA-OSS](https://github.com/frknkrc44/HMA-OSS)
- In HMA-OSS > Manage apps > (Your banking app), Enable hide.
- In the same page, open Template config > Using 0 presets, and check "Root managers/Rooted apps" and "LSPosed/Xposed modules"
- Repeat the same steps for whatsapp if the app is nagging you

No setup passes forever — Google patches fingerprints. If banking is critical, expect to re-fetch fingerprints / update modules.

## Unroot

- Magisk > Uninstall > Restore Images (if on magisk), or re-flash stock `boot` or
- Full unroot: dirty-flash ROM zip without Magisk
- Uninstall the manager

Related: [Root Modules](/modules/) · [Root Apps](/root-apps/)
