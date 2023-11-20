//export const dynamic = 'force-dynamic';

export default function Home({ children }: { children: React.ReactNode }) {
	return (
		<main className="w-full h-full flex justify-center items-center bg-gray-200">
			<div className="w-full max-w-md">
				{children}
				<p className="text-xl">"I sometimes think I am controlled by someone. Some space invader is invading my inner space, some fucking joker. But he’s not from out there. He’s from in here."</p>
				<p className="mt-5">
					- <b>Martin Amis</b>, <span className="italic text-sm">Money, 1984</span>
				</p>
			</div>
		</main>
	);
}
