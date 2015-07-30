var MainContainer = React.createClass({
  render: function() {
    return (
      <div id="main-container" className="container-fluid">
        <p className="category">Latest Releases</p>
        <MovieList 
          getMovies={this.props.getMovies} 
          currentPage={this.props.currentPage} 
          currentMovies={this.props.currentMovies} 
          maxPage={this.props.maxPage}
          movieSelected={this.props.movieSelected}/>
      </div>
    );
  }
});