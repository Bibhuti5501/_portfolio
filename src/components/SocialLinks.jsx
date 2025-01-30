import React from "react";
import {
	FaGithub,
	FaLinkedin,
	FaTelegram,
	FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

import { SiSubstack } from "react-icons/si";
import Button from "./Button";

const socialLinks = [
	{
		href: "https://github.com/Bibhuti5501",
		icon: <FaGithub className="text-2xl" />,
		label: "GitHub",
	},
	{
		href: "https://x.com/BIBHUTI8765",
		icon: <FaXTwitter className="text-2xl" />,
		label: "Twitter",
	},
	{
		href: "mailto:bibhutisingh8765@gmail.com",
		icon: <HiOutlineMail className="text-2xl" />,
		label: "Email",
	},
	{
		href: "https://www.linkedin.com/in/bibhutibhushansingh/",
		icon: <FaLinkedin className="text-2xl" />,
		label: "LinkedIn",
	},
	{
		href: "https://www.instagram.com/bibhuti5501/",
		icon: <FaInstagram className="text-2xl" />,
		label: "Instagram",
	},
];

function SocialLinks() {
	return (
		<div className="mt-4 flex justify-center flex-wrap space-x-2">
			{socialLinks.map((link, index) => (
				<Button
					key={index}
					label={link.icon}
					onClick={() =>
						window.open(
							link.href,
							"_blank",
							"noopener,noreferrer"
						)
					}
					variant="outline"
					className={"p-3"}
				/>
			))}
		</div>
	);
}

export default SocialLinks;
