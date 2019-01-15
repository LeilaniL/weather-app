// // AJAX jQuery version below
//
// $(document).ready(function () {
//   $('#weatherLocation').click(function () {
//     let city = $('#location').val();
//     $('#location').val("");
//     $.ajax({
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API-KEY-GOES-HERE`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function (response) {
//         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//       },
//       error: function () {
//         $('#errors').text("There was an error processing your request. Please try again.");
//       }
//     });
//   });
// });
// // XMLHttpRequest version below
//
// // $(document).ready(function () {
// //   $('#weatherLocation').click(function () {
// //     const city = $('#location').val();
// //     $('#location').val("");
// //
// //     let request = new XMLHttpRequest();
// //     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[APPKEY]`;
// //
// //     request.onreadystatechange = function () {
// //       if (this.readyState === 4 && this.status === 200) {
// //         const response = JSON.parse(this.responseText);
// //         getElements(response);
// //       }
// //     }
// //
// //     request.open("GET", url, true);
// //     request.send();
// //
// //     const getElements = function (response) {
// //       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
// //       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
// //     }
// //   });
// // });
