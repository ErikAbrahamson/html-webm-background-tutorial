#Simple video background tutorial  
This is a simple boilerplate in basic HTML/CSS to demonstrate how to implement a full screen video for a document/window background.

## The HTML  
We will require the special elements *video* and *source*. These will in turn hold, you guessed it, attributes to set the video source and to play the video. We will end up with a template resembling something like this:  

<video autoplay loop id="bgvid">
  <source src="yourfile.webm" type="video/webm">
  <source src="yourfile.mp4" type="video/mp4">
</video>

#test  

<video autoplay loop poster="first-frame.jpg" id="bgvid">
  <source src="wow.webm" type="video/webm">
  <source src="wow.mp4" type="video/mp4">
</video>
