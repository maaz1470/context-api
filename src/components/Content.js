import HoverCounter from './HoverCounter';
import Counter from './Counter'
import ThemeContext from './contexts/ThemeContext'
export default function Content() {
	return (
		<>
			<h1>This is Content</h1>
			<Counter>
				{(count,increment) => (
					<ThemeContext.Consumer>
						{({theme}) => (
							<HoverCounter count={count} increment={increment} theme={theme} />
						)}
					</ThemeContext.Consumer>
				)}
			</Counter>
		</>
		
	)
}