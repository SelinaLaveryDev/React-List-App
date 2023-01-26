import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./Components/App";

// const restaurantArray = ["one", "two", "three", "four"];

{
	/* const filteredData = response.map((restaurant) => {
					return (
						<ListItem
							name={restaurant.BusinessName}
							address={restaurant.AddressLine2}
							addressLine2={restaurant.AddressLine3}
							address3={restaurant.PostCode}
						/>
					);
				}); */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
