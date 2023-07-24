// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";


// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/working_together.jpg";
import HeroDark from "./images/working_together.jpg";

import DynamicObstacle from "./images/dynamic_crowd_horizontal.gif"

// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "hubernikus";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
	"I enjoy learning about new technologies and exploring new boundaries. In my free time, I spend time outdoors whenever possible, from hiking and climbing in the Swiss mountains to surfing at the Dutch shores.";
// "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
	{
		id: 1,
		skill: <Icon icon="teenyicons:c-outline" className="display-4" />,
		name: "C",
	},
	{
		id: 2,
		skill: <Icon icon="teenyicons:python-outline" className="display-4" />,
		name: "Python",
	},
	{
		id: 3,
		skill: <Icon icon="simple-icons:ros" className="display-4" />,
		name: "ROS / ROS2",
	},
	{
		id: 4,
		skill: <Icon icon="carbon:linux" className="display-4" />,
		name: "Linux / shell",
	},
	{
		id: 5,
		skill: <Icon icon="bi:git" className="display-4" />,
		name: "Git",
	},
	{
		id: 6,
		skill: <Icon icon="file-icons:matlab" className="display-4" />,
		name: "MATLAB / Octave",
	},
	{
		id: 7,
		skill: <Icon icon="mdi:language-cpp" className="display-4" />,
		name: "C++",
	},
	{
		id: 8,
		skill: <Icon icon="mdi:language-html5" className="display-4" />,
		name: "HTML5 / CSS3 / JS",
	},
	{
		id: 9,
		skill: <Icon icon="simple-icons:latex" className="display-4" />,
		name: "LaTex",
	},
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
	"dynamic_obstacle_avoidance",
	"fast_obstacle_avoidance",
	"nonlinear_obstacle_avoidance"];

// Replace the default GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardData = [
	{
		name: "dynamic_obstacle_avoidance",
		title: "Navigation in Dynamic and Crowded Environments",
		image: DynamicObstacle,
		video_url: "https://www.youtube.com/embed/WKso-wu68v8",
		description: "This work describes a closed-form approach for constraining flow within specified volumes and navigating around people . The approach guarantees convergence to a single fixed point and ensures that the flow remains enclosed within the volume, never contacting obstacle boundaries. Smooth motion fields are created around obstacles, enabling navigation in time-varying environments. This technique was successfully applied to an autonomous robot (QOLO) in complex indoor settings, including simulations with dense crowds. The final validation was conducted in an outdoor environment in Lausanne (Switzerland), where the QOLO-robot effectively traversed a marketplace amidst a diverse crowd with varying motion patterns.",
	},
	{
		name: "fast_obstacle_avoidance",
		title: "Sensor Based Motion Generation",
		image: DynamicObstacle,
		video_url: "https://www.youtube.com/embed/kr7R_cJoaYI",
		description: "My portfolio showcases a cutting-edge control scheme aimed at enabling obstacle avoidance for robots in dynamic and complex environments. By combining high-level input commands with fast reactive obstacle avoidance (FOA), the proposed scheme efficiently handles sparse and asynchronous sensor data. It can seamlessly integrate sampling-based sensor data with analytical obstacle reconstructions to achieve real-time collision avoidance. In the evaluation phase, the algorithm demonstrated its effectiveness in cluttered indoor office environments and dynamic outdoor scenarios in the center of Lausanne. It successfully avoided collisions in both settings, and the controller's remarkable performance was highlighted, with the ability to evaluate over 30,000 data points in just 1 millisecond. This approach represents a significant advancement in equipping robots with reactive obstacle avoidance capabilities, mirroring humans' ability to navigate crowded spaces with ease.",
	},
	{
		name: "nonlinear_obstacle_avoidance",
		title: "Nonlinear Obstacle Avoidance",
		image: DynamicObstacle,
		video_url: "https://www.youtube.com/embed/DosIOEwInkQ",
		description: "I have developed the Rotational Obstacle Avoidance Method (ROAM), a novel approach for controlling complex tasks in robotic systems. ROAM enables obstacle avoidance in partially occluded workspaces and efficiently navigates around multi-obstacle environments. Through experimental evaluation, ROAM outperforms existing approaches in minimizing local minima occurrences and maintaining the robot's initial dynamics. Its simplicity and reactivity make it highly effective for dynamic environments, as demonstrated in collision-free navigation scenarios with a 7 degree-of-freedom robot arm.",
	},
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xjvqkjaa";
