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
});

//adds a new animal when you click the button
    $('#addAnimal').on('click', function() {

//api_key 	"dc6zaTOxFJmzC"

        var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + "input";

        $.ajax({url: queryURL, method: 'GET'})

            .done(function(response) {

                // this creates the imageURL and takes the data from the original url posting
                //setting the variable of image_url to the specific object
                var imageUrl = response.data.image_original_url;

                // This defines catImage as an image
                // Creates a variable called cat image
                var catImage = $("<img>");
                
                // This gives attributes to the image, giving it a source of imageURL and alt tag of cat image
                // Given the catImage the source path and an alt tag (screen readers)
                catImage.attr('src', imageUrl);
                catImage.attr('alt', 'cat image');

                //This adds the cat image to the images div and adds it before the last image
                //Adding images before the content that's there
                $('#images').prepend(catImage);
            });
})