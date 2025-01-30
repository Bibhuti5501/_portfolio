import {
	FaLinkedin,
	FaInstagram,
	FaFacebook,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";

const educationData = [
	{
		institution: "GITAM University",
		duration: "10/2021 - Present",
		address: "Hyderabad, India",
		cgpa: "7.37/10",
		links: [
			{
				link: "https://www.gitam.edu/",
				icon: CgWebsite,
				type: "website",
			},
			{
				link:
					"https://www.linkedin.com/school/gitam-deemed-university/",
				icon: FaLinkedin,
				type: "linkedin",
			},
			{
				link: "https://x.com/GITAMUniversity",
				icon: FaXTwitter,
				type: "twitter",
			},
			{
				link:
					"https://www.instagram.com/gitamdeemeduniversity/",
				icon: FaInstagram,
				type: "instagram",
			},
		],
		courses: [
			"Bachelor of Technology in Computer Science and Engineering",
		],
	},
	{
		institution: "Narayana Junior College",
		duration: "2019 - 2021",
		address: "Chandanagar, Telangana, India",
		cgpa: "6.6/10",
		links: [
			{
				link: "https://www.narayanajuniorcolleges.com/",
				icon: CgWebsite,
				type: "website",
			},
			
		],
		courses: [
			"Physics",
			"Chemistry",
			"Mathematics",
			"English",
			"Sanskrit",
		],
	},
	{
		institution:
			"G.D.Mother International School",
		duration: "2014 - 2019",
		address: "Muzaffarpur, Bihar, India",
		cgpa: "9.14/10",
		links: [
			{
				link: "https://gdmis.in/",
				icon: CgWebsite,
				type: "website",
			},
			{
				link: "https://www.instagram.com/g_d_m_i_s/",
				icon: FaInstagram,
				type: "instagram",
			},
			
		],
		courses: [
			"Science",
			"Mathematics",
			"English",
			"Social Studies",
			"Computer Science",
			"Sanskrit",
			
		],
	},
];

export default educationData;
