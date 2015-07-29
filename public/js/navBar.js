var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="logo-container">
          <img src="images/death-star.png" className="logo"/>
          <p className="brand-name">Movies</p>
        </div>
      </nav>
    );
  }
});