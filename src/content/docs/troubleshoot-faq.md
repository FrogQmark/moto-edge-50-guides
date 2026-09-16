---
title: Troubleshoot & FAQ
description: Fix bootloops, fastboot issues, and decide when to unbrick tank.
---

## Bootloop after flash

1. Hold Power 10s to force off, boot to recovery (Power + Vol Up)
2. If you dirty-flashed: clean flash Evolution X (Format data)
3. If you flashed Magisk module: safe mode (hold Vol Up on boot) or `adb wait-for-device shell magisk --remove-modules`
4. If you flashed wrong image: re-flash correct tank build for your slot

## fastboot vs fastbootd

- **Bootloader / fastboot**: Power + Vol Down. For unlock, flash boot/recovery.
- **fastbootd** (userspace): reached from recovery > Enter fastboot. Needed for dynamic partitions / `super`. If `fastboot flash system` says “not allowed”, you’re in the wrong mode — switch.

Useful:

```bash
fastboot devices
fastboot getvar current-slot
fastboot --set-active=a
fastboot reboot recovery
fastboot reboot
```

## PC doesn't see device

- Windows: reinstall Motorola drivers, try USB 2.0 port, original cable
- Linux: add udev rules, run with sudo once to test, use `lsusb`
- macOS: allow accessory in Privacy settings, try different cable
- Try `adb kill-server && adb start-server`

## Unbrick / return to stock

1. Install Rescue and Smart Assistant (LMSA) — see [Resources](/resources/)
2. Boot tank to fastboot, LMSA > Rescue > select XT2407 variant
3. If LMSA fails, flash stock firmware from lolinet manually per `flashfile.xml`
4. Boot stock once, verify IMEI / signal before relocking (relock only on 100% stock, same variant)

## FAQ

**Can I relock?** Only on full stock, matching variant. Relocking on custom ROM = hard brick.

**Will I get OTAs?** No Motorola OTAs while unlocked / custom ROM. Update via Evolution X built-in updater or sideload.

**Banking apps?** Expect failures with unlocked bootloader even unrooted. See [Root](/root/) Play Integrity notes.

**Only one ROM?** Yes — Evolution X 12.2 is the only tank ROM right now. This site will add new ROMs as maintainers release them.

**Where to ask for help?** Maintainer XDA thread / device Telegram with: model, build dates, exact steps, `fastboot getvar all` (redact IMEI/serial), recovery logs.
