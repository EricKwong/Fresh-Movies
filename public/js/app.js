var App = React.createClass({
  getInitialState: function() {
    return {
      currentMovies: [],
      maxPage: null,
      currentPage: 1
    }
  },

  render: function() {
    return (
      <div>
        <NavBar/>
        <div className="list-container">
          <MainContainer 
            getMovies={this.getMovies} 
            currentPage={this.state.currentPage} 
            currentMovies={this.state.currentMovies} 
            maxPage={this.state.maxPage}
            movieSelected={this.movieSelected}/>
          <Pagination 
            getMovies={this.getMovies} 
            currentPage={this.state.currentPage} 
            changePage={this.changePage} 
            maxPage={this.state.maxPage}/>
        </div>
        <div id="modal-container"/>
      </div>
    );
  },

  getMovies: function(page) {
    var nowPlayingURI = 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=';
    var self = this;
    $.get(nowPlayingURI + page, function(data) {
      self.setState({currentMovies: data.results});
      self.setState({maxPage: data.total_pages});
    });
  },

  changePage: function(page) {
    this.setState({currentPage: page});
    this.getMovies(page);
  },

  movieSelected: function(movie) {
    this.setState({selectedMovie: movie});
    React.render(<MovieModal modalClose={this.modalClose} movie={movie}/>, document.getElementById("modal-container"));
    $('.list-container').hide();
  },

  modalClose: function() {
    $('#modal-container').empty();
    $('.list-container').show();
  }
});

React.render(<App/>, document.getElementById("app"));