import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([]);

	// state for feedbackEdit and setFeedbackEdit
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});
useEffect(() => {
	fetchFeedback()
},[])

// Fetch feedback and Loading State Initialization

const fetchFeedback = async () => {
	const response = await fetch('/feedback?_sort=id&_order=desc')
	const data = await response.json()

	setFeedback(data)
	setIsLoading(false)
}
	// Add feedback
	const addFeedback = async (newFeedback) => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newFeedback)
		} )

		const data = await response.json()

		setFeedback([data, ...feedback]);
	};

	// Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete this item?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// Update feedback item

	const updateFeedback = (id, updateItem) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updateItem } : item
			)
		);
	};
	// Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	// Gives listed components access to the form with the Context Provider to useContext
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				addFeedback,
				deleteFeedback,
				updateFeedback,
				editFeedback, //This is the function that edits feedback
				feedbackEdit, //This is the state
				isLoading,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};
export default FeedbackContext;
