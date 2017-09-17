var MovieList = (props) => {
	console.log(props);
	return <ul>
		{props.movies.map((item, index) => ( <Movie aMovie={item} key={index}/>))}
	</ul>
};

window.MovieList = MovieList;
