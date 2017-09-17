class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	OriginalList: this.props.movies
    };
  }

	render() {
		console.log('Props', this.props);
		return (
			<div>
				<h2>MovieList</h2>
				<SearchInput />
				<MovieList movies={this.state.OriginalList}/>
			</div>
		);		
	}
};


// props:{movies: [...]}

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

ReactDOM.render(<App movies={movies} />, document.getElementById('root'));

//store the moves on the app state
// how to set stae on the compoenent