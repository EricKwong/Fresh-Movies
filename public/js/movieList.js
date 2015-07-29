var MovieList = React.createClass({
  getInitialState: function() {
    return {
      currentMovies: [],
      maxPage: null,
      currentPage: 1
    }
  },

  render: function() {
    return (
      <div className="row movie-list">
        {this.state.currentMovies.map(function(movie) {
          return <Movie movie={movie}/>;
        })}
      </div>
    );
  },

  componentDidMount: function() {
    this.getMovies(this.state.currentPage);
  },

  getMovies: function(page) {
    var nowPlayingURI = 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=';
    var self = this;
    $.get(nowPlayingURI + page, function(data) {
      self.setState({currentMovies: data.results});
      self.setState({maxPage: data.total_pages});
    });
  }
});