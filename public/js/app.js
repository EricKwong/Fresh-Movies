var App = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar/>
        <MainContainer/>
        <Pagination maxPage={28}/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById("app"));