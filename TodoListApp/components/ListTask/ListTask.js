import React from 'react';
import {Text} from 'react-native';

// export default class ListTask extends React.Component {
export const ListTask = ({ task }) => {

		return (
			<Text>{task.name}</Text>
		);
};

