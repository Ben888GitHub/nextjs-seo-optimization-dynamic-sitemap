// Dynamic Sitemap is created every time it is requested
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (context) => {
	const response = await fetch('https://api.spacexdata.com/v4/capsules');
	const capsules = await response.json();

	// console.log(capsules);

	const fields = capsules.map((capsule) => ({
		loc: `https://www.capsules.com/capsules/${capsule.id}`,
		lastmod: new Date().toISOString()
	}));
	// console.log(fields);
	return getServerSideSitemap(context, fields);
};

function Site() {
	return <div>index</div>;
}

export default Site;
