<<<<<<< HEAD
$(function() {
	    populateButtons(animals, 'animalButton', '#animalButtons');

});


var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];

//function to make buttons and add to page



$('.animalButton')
=======
$(document).ready (function() {

$('#animalButton').on('click', function() {

	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats"
	$.ajax({url: queryURL, method: 'GET'})

            .done(function(response) {
            var imageUrl = response.data.image_original_url;
            var catImage = $("<img>");
            catImage.attr('src', imageUrl);
            catImage.attr('alt', 'cat image');
            $('#images').prepend(catImage);
})

//adds a new animal when you click the button
    $('#addAnimal').on('click', function() {

//api_key 	"dc6zaTOxFJmzC"

        var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + "input";

        $.ajax({url: queryURL, method: 'GET'})

            .done(function(response) {

            
                var imageUrl = response.data.image_original_url;
                var catImage = $("<img>");
        
                catImage.attr('src', imageUrl);
                catImage.attr('alt', 'cat image');

                $('#images').prepend(catImage);
            });
});
>>>>>>> e9468edea82b8181d80431fd7b4b446a3ed482b1
