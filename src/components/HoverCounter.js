import React from 'react';

export default class HoverCounter extends React.Component {
	render(){
		const {count,increment,theme} = this.props
		const style = theme === 'dark' ? {backgroundColor: '#000', color: '#fff'} : null;
		return (
			<>
				<h1 style={style} onMouseOver={increment}>Hover {count} Times</h1>
			</>
		)
	}
}