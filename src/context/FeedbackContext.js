import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "To add a review, select a rating and then enter your review information in the text area and click send",
			rating: 10,
		},
		{
			id: 2,
			text: "To modify a entry, please click the pencil icon to begin editing",
			rating: 9,
		},
		{
			id: 3,
			text: "To delete an item, please click the x icon",
			rating: 7,
		},
	]);

    // state for feedbackEdit and setFeedbackEdit
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
		console.log(newFeedback);
	};

    // Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete this item?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
    };

    // Update feedback item

    const updateFeedback = (id, updateItem) => {
       setFeedback(feedback.map((item) =>item.id === id ? {...item, ...updateItem} : item ))
    }
    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

        // Gives listed components access to the form
		return (
			<FeedbackContext.Provider
				value={{
					feedback,
                    addFeedback,
					deleteFeedback,
                    updateFeedback,
                    editFeedback, //This is the function that edits feedback
                    feedbackEdit,  //This is the state
                   
				}}
			>
				{children}
			</FeedbackContext.Provider>
		);
	
};
export default FeedbackContext;
