import Card from "./shared/card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useState, useContext } from "react";
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
	const [text, setText] = useState("");
	const [btnDisabled, setBtnDisabled] = useState("true");
	const [message, setMessage] = useState("");
	const [rating, setRating] = useState("10");

	const {addFeedback} = useContext(FeedbackContext)

	const handleTextChange = (e) => {
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setMessage("Text must be at least 10 characters long");
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};
			addFeedback(newFeedback);
			setText("");
		}
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						value={text}
						placeholder="Write a review"
					/>
					<Button type="submit" version="primary" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
