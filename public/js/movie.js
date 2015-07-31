var Movie = React.createClass({
  getInitialState: function() {
    return {
      imgURI: 'http://image.tmdb.org/t/p/w342',
      movie: this.props.movie
    };
  },

  render: function() {
    var posterPath;
    var movie = this.state.movie

    if (!movie.poster_path) {
      posterPath = "http://www.stolendroids.com/wp-content/uploads/2013/10/default-missing-category-placeholder.png";
    } else {
      posterPath = this.state.imgURI + movie.poster_path;
    }

    return (
      <div onClick={this.movieClicked} className="col-lg-2 col-md-4 col-xs-6 movie-container">
        <div className="movie">
          <img className="movie-image img-responsive" src={posterPath}/> 
        </div> 
      </div>
    );
  },

  movieClicked: function() {
    this.props.movieSelected(this.state.movie);
  }
});