import { Navigation } from "../components/nav";

export default function Example() {
	return (
		<div className="relative pb-16">
			<Navigation />   
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-8 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Resume
					</h2>
					<p className="mt-4 text-zinc-400">
						Devops Engineer, Aspriring Full Stack Developer, Finance/Computing Student
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />
            </div>
        </div>
    );
}