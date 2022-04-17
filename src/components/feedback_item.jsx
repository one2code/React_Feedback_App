import { FaTimes, FaEdit } from "react-icons/fa";
import {useContext} from 'react'
import PropTypes from "prop-types";
import Card from "./shared/card";
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
	const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
            <button onClick = {() => deleteFeedback(item.id)}className="close">
                <FaTimes color = 'purple'/>
            </button>
			<button className="edit" onClick = {() => editFeedback(item)}>
				<FaEdit color= 'purple'/>
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
