var Movie = React.createClass({
  getInitialState: function() {
    return {
      imgURI: 'http://image.tmdb.org/t/p/w342'
    };
  },

  render: function() {
    return (
      <div className="col-lg-2 col-xs-6 movie-container">
        <div className="movie">
          <img className="movie-image img-responsive" src={this.state.imgURI + this.props.movie.poster_path}/> 
        </div> 
      </div>
    );
  }
});