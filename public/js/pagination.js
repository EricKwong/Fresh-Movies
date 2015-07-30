var Pagination = React.createClass({
  render: function() {
    var pages = [];
    for (var i = 1; i <= this.props.maxPage; i++) {
      pages.push(i);
    }

    return (
      <div className="text-center">
        <div className="pagination-container">
          <ul className="pagination">
            <li className="first" onClick={this.firstClicked}>
              <a className="page-link">First</a>
            </li>
            <li className="previous disabled" onClick={this.prevClicked}>
              <a className="page-link">Prev</a>
            </li>
            {pages.map(function(page) {
              return <li onClick={this.pageClicked} key={page}><a className={"page-link page-link-" + page}>{page}</a></li>;
            }, this)}
            <li className="next" onClick={this.nextClicked}>
              <a className="page-link">Next</a>
            </li>
            <li className="last" onClick={this.lastClicked}>
              <a className="page-link">Last</a>
            </li>
          </ul>
        </div>
      </div>
    );
  },

  prevNextCheck: function(page) {
    (page !== 1) ? $(".previous").removeClass('disabled') : $(".previous").addClass('disabled');
    (page === this.props.maxPage) ? $(".next").addClass('disabled') : $('.next').removeClass('disabled');
  },

  pageClicked: function(e) {
    var page = parseInt(e.target.innerHTML);
    $('.page-link').removeClass('active');
    $(e.target).addClass('active');
    this.prevNextCheck(page);
    this.props.changePage(page);
  },

  firstClicked: function() {
    $('.page-link').removeClass('active');
    $('.page-link-1').addClass('active');
    this.prevNextCheck(1);
    this.props.changePage(1);
  },

  lastClicked: function() {
    var maxPage = this.props.maxPage

    $('.page-link').removeClass('active');
    $('.page-link-' + maxPage).addClass('active');
    this.prevNextCheck(maxPage);
    this.props.changePage(maxPage);
  },

  prevClicked: function() {
    var page = this.props.currentPage - 1;
    if (page) {
      $('.page-link').removeClass('active');
      $('.page-link-' + page).addClass('active');
      this.prevNextCheck(page);
      this.props.changePage(page);
    }
  },

  nextClicked: function() {
    var page = this.props.currentPage + 1;
    if (this.props.maxPage >= page) {
      $('.page-link').removeClass('active');
      $('.page-link-' + page).addClass('active');
      this.prevNextCheck(page);
      this.props.changePage(page);
    }
  }
});