import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `https://api.giphy.com/v1/stickers/random?api_key=APIKEY&tag=&rating=PG&limit=1`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function (response) {
        document.getElementById("test").src = response.data.images.original.url;
        // $('.showHumidity').html(`<img src = ${response.data.images.original.url} alt = "gif">`);
      
      },
      error: function () {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
