import React, { Component } from "react";
import ListItem from "./ListItem";

const FaveList = ({ faveList }) => {
	return (
		<ul>
			{faveList.map((restaurant, index) => (
				<ListItem
					key={index}
					id={restaurant._id}
					restaurant={restaurant}
				/>
			))}
		</ul>
	);
};

export default FaveList;
