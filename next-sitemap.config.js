const siteUrl = 'https://www.capsules.com';

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		// to disallow and allow pages from google crawling
		policies: [
			{ userAgent: '*', disallow: '/secret' },
			{ userAgent: '*', allow: '/' }
		],
		additionalSitemaps: [`${siteUrl}/server-sitemap.xml`]
	},
	exclude: ['/secret'] // to exclude a page from sitemap, to prevent crawling this page
};
