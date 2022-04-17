import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/card";

function FeedbackItem({ item, handleDelete }) {
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
            <button onClick = {() => handleDelete(item.id)}className="close">
                <FaTimes color = 'purple'/>
            </button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

Card.defaultProps = {
	reverse: false,
};

Card.PropTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};
export default FeedbackItem;
