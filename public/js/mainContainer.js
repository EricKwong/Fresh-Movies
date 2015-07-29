var MainContainer = React.createClass({
  render: function() {
    return (
      <div id="main-container" className="container-fluid">
        <p className="category">Latest Releases</p>
        <MovieList/>
      </div>
    );
  }
});