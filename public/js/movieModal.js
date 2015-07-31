var MovieModal = React.createClass({
  getInitialState: function() {
    return {
      imgURI: "http://image.tmdb.org/t/p/w342",
      movieReleaseDate: null,
      movieRating: null
    }
  },

  componentWillMount: function() {
    var movieData = this.props.movie;

    this.getReleaseDate(movieData);
    this.getRating(movieData.id);
  },

  render: function() {
    var posterPath;
    var movieData = this.props.movie;
   
    if (!movieData.poster_path) {
      posterPath = "http://www.stolendroids.com/wp-content/uploads/2013/10/default-missing-category-placeholder.png";
    } else {
      posterPath = this.state.imgURI + movieData.poster_path;
    }

    var style = {
      backgroundImage: "url(" + posterPath + ")"
    };

    return (
      <div className="movie-modal" onClick={this.props.modalClose}>
        <div className="modal-background-image" style={style}/>
        <div className="modal-dim"/>
        <div className="movie-modal-content pagination-center">
          <img className="col-lg-3 col-md-6 col-sm-10 movie-modal-image" src={posterPath}/>
          <div className="movie-details-container col-lg-6">
            <h1 className="movie-title">{movieData.title} ({movieData.release_date.substr(0,4)})</h1>
            <h3 className="movie-score movie-details">Score: {movieData.vote_average}</h3>
            <div className="vertical-line"/>
            <h3 className="movie-rating movie-details">Rating: {this.state.movieRating}</h3>
            <div className="vertical-line"/>
            <h3 className="movie-release movie-details">Release Date: {this.state.movieReleaseDate}</h3>
            <hr className="horizontal-rule"/>
            <p className="movie-description">{movieData.overview}</p>
            <hr className="horizontal-rule"/>
          </div>
        </div>
      </div>
    );
  },

  getReleaseDate: function(movie) {
    var releaseDate = new Date(movie.release_date).toDateString();
    var monthDayYear = releaseDate.substr(4,releaseDate.length).split(" ");
    var finalDate = monthDayYear[0] + " " + monthDayYear[1] + ", " + monthDayYear[2]; 
    this.setState({movieReleaseDate: finalDate});
  },

  getRating: function(id) {
    var self = this;
    $.get("http://api.themoviedb.org/3/movie/" + id + "/releases?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c", function(data) {
      data.countries.forEach(function(country) {
        if (country.iso_3166_1 === "US") {
          self.setState({movieRating: country.certification});
        }
      });
    });
  }
});