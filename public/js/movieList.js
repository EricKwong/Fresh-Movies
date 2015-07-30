var MovieList = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <div className="row movie-list">
          {this.props.currentMovies.map(function(movie) {
            return <Movie movieSelected={this.props.movieSelected} key={movie.id} movie={movie}/>;
          }, this)}
        </div>
      </div>
    );
  },

  componentDidMount: function() {
    this.props.getMovies(this.props.currentPage);
  }
});