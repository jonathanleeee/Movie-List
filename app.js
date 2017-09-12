class App extends React.Component {
	render() {
		return <h2>MovieList</h2>
	}
};

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

ReactDOM.render(<App/>, document.getElementById('root'));