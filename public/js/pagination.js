var Pagination = React.createClass({
  render: function() {
    var pages = [];
    for (var i = 1; i <= this.props.maxPage; i++) {
      pages.push(i);
    }
    return (
      <div className="pagination-container">
        <ul className="pagination">
          <li className="previous disabled"><a href="#">Prev</a></li>
          {pages.map(function(page) {
            return <li key={page}><a href="#">{page}</a></li>;
          })}
          <li className="next"><a href="#">Next</a></li>
        </ul>
      </div>
    );
  }
});