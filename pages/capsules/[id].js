import Head from 'next/head';

function Capsule({ capsule }) {
	return (
		<div>
			{/* <NextSeo
				title={capsule.type}
				description={capsule.last_update}
				defaultTitle={capsule.type}
			/> */}
			<Head>
				<title>{capsule.type}</title>
				<meta name="description" content={capsule.last_update} />
			</Head>
			<h1>
				{capsule.type} {capsule.serial}
			</h1>
			<h2>Status: {capsule.status}</h2>
			<p>{capsule.last_update}</p>
		</div>
	);
}

export const getStaticPaths = () => {
	return { paths: [], fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
	const { id } = params;
	// console.log(`Params is ${params}`);
	const response = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`);
	const data = await response.json();

	return {
		props: {
			capsule: data
		}
	};
};

export default Capsule;
