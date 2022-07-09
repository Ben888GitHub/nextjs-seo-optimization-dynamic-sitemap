import Link from 'next/link';
import useSWR from 'swr';
import { NextSeo } from 'next-seo';

const fetcher = () =>
	fetch('https://api.spacexdata.com/v4/capsules').then((r) => r.json());

function Capsules() {
	const { data } = useSWR('capsules', fetcher);

	return (
		<div>
			<NextSeo
				title="Capsules"
				description="List of Capsules from SpaceX API"
				defaultTitle="Capsules"
			/>
			<h1>Capsules</h1>
			{data ? (
				<ul>
					{data?.map((capsule) => (
						<li key={capsule.id}>
							<Link href={`/capsules/${capsule.id}`}>
								<a>
									{capsule.type} {capsule.serial}
								</a>
							</Link>
						</li>
					))}
				</ul>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default Capsules;
