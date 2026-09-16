---
title: Unlock Bootloader
description: Unlock the bootloader on Motorola Edge 50 (tank) via Motorola unlock site.
---

:::danger
Back up now — unlocking **wipes all data** (photos, apps, internal storage). No way to recover after. See [Prerequisites](/prerequisites/#2-backup).
Motorola also records the unlock key request: warranty is void from that point, even if you relock.
:::

Motorola unlock portal: [unlock-your-device-a](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a/action/auth)

You need a Motorola account, platform-tools, and Motorola USB drivers (see [Prerequisites](/prerequisites/)).

## Steps

### 1. Boot into fastboot

1. Power off phone
2. Hold **Power + Volume Down** together, then connect USB cable to PC
3. Screen shows fastboot mode

Verify on PC:

```bash
fastboot devices
```

### 2. Get Device ID

```bash
fastboot oem get_unlock_data
```

Output is 5 lines, example format:

```
(bootloader) 0A40040192024205#4C4D3556313230
(bootloader) 30373731363031303332323239#BD00
(bootloader) 8A672BA4746C2CE02328A2AC0C39F95
(bootloader) 1A3E5#1F53280002000000000000000
(bootloader) 0000000
```

Join them into **one continuous string**, stripping `(bootloader)` / `INFO` prefixes and all spaces:

```
0A40040192024205#4C4D355631323030373731363031303332323239#BD008A672BA4746C2CE02328A2AC0C39F951A3E5#1F532800020000000000000000000000
```

On macOS the prefix is `INFO` instead of `(bootloader)` — same join rule.

### 3. Check unlockable + request key

1. Log in to [Motorola unlock site](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a/action/auth)
2. Paste Device ID into **Can my device be unlocked?** field
3. If valid, accept the Legal Agreement and click **REQUEST UNLOCK KEY**
4. Key arrives by email (check spam). It is unique to your device.

Summary of agreement: you assume all brick / safety / legal risk, Motorola disclaims liability, carrier approval is your responsibility.

### 4. Unlock

:::caution
Last chance: running the command below erases everything. Confirm your backup is off the phone before proceeding.
:::

```bash
fastboot oem unlock YOUR_UNLOCK_KEY
```

Confirm on-device with Volume / Power keys. Phone wipes and reboots.

Verify:

```bash
fastboot oem device-info
# look for: Device unlocked: true
```

## Fail cases

- **Not unlockable**: carrier-locked XT2407 variants return invalid Device ID. Cannot proceed — do not use bypass tools from random Telegram channels.
- **No device in fastboot**: reinstall Motorola drivers, try USB 2.0 port, different cable.
- **No email**: wait 30 min, check spam, re-request. Key is tied to Motorola account email.
- **Stuck after unlock**: boot to system once and complete setup before flashing. This avoids encryption / slot issues.
