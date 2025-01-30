import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const projectsData = [
	{
		project: "Portfolio Website",
		description:
			"A minimal, fully responsive website built with React.js to showcase my career, education, projects and social links.",
		technologies: [
			"React.js",
			"Vite",
			"Redux with persistence storage",
			"Tailwinds(majorly)",
			"React Router",
		],
		links: [
			{
				link: "https://github.com/Bibhuti5501/_portfolio",
				icon: FaGithub,
			},
			{
				link: "https://bibhuti.vercel.app/",
				icon: CgWebsite,
			},
		],
	},
	
];

export default projectsData;
