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