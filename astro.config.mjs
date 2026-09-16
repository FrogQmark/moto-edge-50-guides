// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://edge50.pages.dev',
	integrations: [
		starlight({
			title: 'Moto Edge 50 Guides',
			description: 'Unlock, flash custom ROMs, root, and unbrick guides for Motorola Edge 50 (codename tank, XT2407).',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/subhashhhhhh/moto-edge-50-guides' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/moto_edge_50' },
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Home', slug: 'index' },
						{ label: 'Prerequisites', slug: 'prerequisites' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Unlock Bootloader', slug: 'unlock' },
						{ label: 'Flash ROMs', slug: 'flash' },
						{ label: 'Root with Magisk', slug: 'root' },
					],
				},
				{
					label: 'ROMs',
					items: [
						{ label: 'All ROMs', slug: 'roms' },
						{ label: 'Evolution X 12.2', slug: 'roms/evolution-x' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Downloads & Resources', slug: 'resources' },
						{ label: 'Root Apps', slug: 'root-apps' },
						{ label: 'Magisk Modules', slug: 'modules' },
					],
				},
				{
					label: 'Help',
					items: [{ label: 'Troubleshoot & FAQ', slug: 'troubleshoot-faq' }],
				},
			],
		}),
	],
});
