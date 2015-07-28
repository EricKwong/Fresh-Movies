$(function() {
  var imgURI = 'http://image.tmdb.org/t/p/w342';
  var nowPlayingURI = 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=';

  var movieList = $('.movie-list');

  var page = 1;

  $.get( nowPlayingURI + page, function(data) {
    var moviesArray = data.results;
    
    moviesArray.forEach(function(movie) {
      var movieImg = $('<img class="movie-image img-responsive">');
      var movieContainer = $('<div class="col-lg-2 col-xs-6 movie-container"></div>');
      var movieDiv = $('<div class="movie"></div>');
      movieImg = movieImg.attr('src', imgURI + movie.poster_path);
      // movieImg.appendTo(movieDiv).appendTo(movieContainer).appendTo(movieList);
      movieDiv.append(movieImg).appendTo(movieContainer);
      movieList.append(movieContainer);
    });
  });
});