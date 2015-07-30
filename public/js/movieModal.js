var MovieModal = React.createClass({
  getInitialState: function() {
    return {
      imgURI: "http://image.tmdb.org/t/p/w342"
    }
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
      <div className="movie-modal">
        <div className="modal-background-image" style={style}/>
        <div className="modal-dim"/>
        <img className="col-lg-3 movie-modal-image" src={posterPath}/>
        <h2 className="col-lg-6 movie-title">{movieData.title}({movieData.release_date.substr(0,4)})</h2>
        <p onClick={this.props.modalClose}>close</p>
      </div>
    );
  }
});