---
title: Downloads & Resources
description: Stock firmware, tools, drivers, and download links for tank.
---

:::caution
Do not re-host or mirror ROMs without maintainer permission. Link to official posts. Verify checksums (SHA256 / MD5) before flashing.
:::

## Device

- Motorola Edge 50 — codename **tank**
- Models: XT2407-1 / XT2407-2 / XT2407-3
- Verify: `fastboot getvar product` → `tank`

## Official tools

- Motorola unlock portal: [unlock-your-device-a](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a/action/auth)
- Platform-tools: https://developer.android.com/tools/releases/platform-tools
- Motorola USB drivers (Windows): https://en-us.support.motorola.com/app/usb-drivers
- Online Fix (RSA): https://en-us.support.motorola.com/app/softwarefix (unbrick / return to stock)

## Firmware

- Stock firmware mirrors (pick exact XT2407 variant): https://mirrors.lolinet.com/firmware/lenomola/ — folder `tank/`
- Always match variant + region. Flashing wrong variant radio can break signal / IMEI.

## Custom ROM

See [All ROMs](/roms/) for the full list. Right now:

- [Evolution X 12.2 (2026-09-11 Unofficial)](/roms/evolution-x/) — Android 17, [Google Drive](https://drive.google.com/file/d/1D2Q24Pr0Bn445HW7LQQVHg5EMPj5Xduq/view?usp=sharing)
- File: `EvolutionX-17.0-20260911-tank-12.2-Unofficial.zip` (2.9 GB)

```text
SHA256: af1f533bfd8d7c095e026facb15b8a935cac1e8c6efe4d1e8f0d9d6d0208d39d
MD5: e2df0051199517ccee2b187c3dcc13d7
```

Verify after download:

```bash
shasum -a 256 EvolutionX-17.0-20260911-tank-12.2-Unofficial.zip
# must match SHA256 above
```

## GApps (for Vanilla ROMs only)

- [NikGapps](https://nikgapps.com/downloads) — match Android version + ARM64
- [MindTheGapps 17.0.0-arm64](https://github.com/MindTheGapps/17.0.0-arm64/releases) — for Android 17
- Skip if your ROM already includes GApps. See [Flash ROMs](/flash/#gapps-vs-vanilla).

## Recovery / boot

- Use recovery / boot image shipped or linked by the ROM maintainer for your build date
- For the 2026-09-11 Evolution X build, a copy is mirrored on [Google Drive](https://drive.google.com/file/d/10k2eF2NqXqVyHjPvFnz-seP-16OedXSB/view?usp=drive_link) (100 MB)
- Do not use recoveries from other variants unless explicitly marked compatible

## Root

- KernelSU (Recommended): check ROM page — only if the build explicitly supports it
- Magisk: https://github.com/topjohnwu/Magisk/releases

Update this page on every new Evolution X drop: build date, changelog link, checksum.
