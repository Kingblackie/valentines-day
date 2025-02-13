// Function to display a welcome message when the page loads
function displayWelcomeMessage() {
	var messageContainer = document.getElementById('message');
	messageContainer.innerHTML = "<h1>Hey Chargie, before you answer... just know that someone (this guy, lol) thinks you're absolutely amazing! 💖</h1>";
	var imageContainer = document.getElementById('image-container');	
	var image = new Image();
	image.src = 'val.webp'
	image.classList.add('image')
	image.onload = function() {
		imageContainer.appendChild(image);
	};
}

// Function to handle button click events
function selectOption(option) {
	if (option === 'yes') {
			// Fade through soft pink shades
			softPinkTransition(function() {
					document.getElementById('question').style.display = 'none'; // Hide the question
					displayCatHeart(); // Show cat-heart gif
					displayFinalMessage(); // Show the final heartfelt message
			});
	} else if (option === 'no') {
			// Change text on "No" button to "You sure?"
			document.getElementById('no-button').innerText = 'You sure?'; 
			// Increase font size of "Yes" button
			var yesButton = document.getElementById('yes-button');
			var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
			var newSize = parseFloat(currentFontSize) * 1.5; // Increase by 50%
			yesButton.style.fontSize = newSize + 'px';
	}
}

// Function for a smooth pink transition effect
function softPinkTransition(callback) {
	var colors = ['#FFEBEE', '#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A'];
	var i = 0;
	var interval = setInterval(function() {
			document.body.style.backgroundColor = colors[i];
			i = (i + 1) % colors.length;
	}, 300); // Change every 300ms
	setTimeout(function() {
			clearInterval(interval);
			document.body.style.backgroundColor = ''; // Reset background color
			if (callback) {
					callback();
			}
	}, 2500); // Run for 2.5 seconds
}

// Function to display the cat-heart.gif
function displayCatHeart() {
	document.getElementById('image-container').innerHTML = '';
	var imageContainer = document.getElementById('image-container');
	var catHeartImage = new Image();
	catHeartImage.src = 'cat-heart.gif'; 
	catHeartImage.classList.add('image')
	catHeartImage.alt = 'Cat Heart';
	catHeartImage.onload = function() {
			imageContainer.appendChild(catHeartImage);
			document.getElementById('options').style.display = 'none';
	};
}

// Function to display the final heartfelt message
function displayFinalMessage() {
	var messageContainer = document.getElementById('message');
	messageContainer.innerHTML = "<h1>Of course, it was a yes. What else would she have said lol?<br> Just kidding, 'Preciate you loads<br>You add so much color to my life and I feel so lucky to have you. Let's live for everyday and have only beaituiful memories yeah?</h1>";
}

// Call function when page 
window.onload = displayWelcomeMessage;
