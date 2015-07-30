var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="logo-container">
          <a href="#">
            <img src="images/death-star.png" className="logo"/>
          </a>
          <a href="#">
            <p className="brand-name">Movies</p>
          </a>
        </div>
      </nav>
    );
  }
});