import Card from "../components/shared/card";
import {Link} from 'react-router-dom'
function About() {
	return (
		<Card>
			<div>
				<h1>About This Project</h1>
				<p>This is a simple CRUD React App that allows users to enter a rating and review, while demonstrating some of the foundational design priciples of the React framework such as immutability and state management, while delivering snappy loading times via the latest React Router. While simple, this app demonstrates some of benefits of React in delivering a superior user experience. </p>
				<p>Version: 1.0.0</p>
				<p>
					<Link to ="/">Back to the Home</Link>
				</p>
			</div>
		</Card>
	);
}
export default About;
