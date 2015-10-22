#Simple video background tutorial  
This is a simple boilerplate in basic HTML/CSS to demonstrate how to implement a full screen video for a document/window background.  

This style of implementing videos as a window background is becoming increasingly popular due to its visual appeal and cross-platform availability. Some excellent examples:  

[Dadaab Stores](http://www.dadaabstories.org/), [Matter Design](http://www.matter.to/), [Drexel University](http://www.getgoingtoday.org/curious)  


## The HTML  
We will require the special elements `video` and `source`. These will in turn hold, you guessed it, attributes to set the video source and to play the video. We will end up with a template resembling something like this:  

```html
<video autoplay loop id="bgvid">
  <source src="yourfile.webm" type="video/webm">
</video>
```  

We need the attributes `autoplay` and `loop` to both instantiate the video on the window load, as well as have the video loop for continuity.  

While HTML5 allows you to embed a multitude of video filetypes into your html document, using a compressed, lossy format is the best choice for building a video background as it will dramatically minimize latency & page load speed, as well as keep your project asset size to a minimum. *WebM* is currently one of the most reliable video codec that natively stands up to the most popular browsers.

It is important to note that the best practice for production is to encode your video into a multitude of accepted formats and include them as additional sources, i.e. *ogg* and *mp4*.  

```html
<source src="yourfile.webm" type="video/webm">
<source src="yourfile.mp4" type="video/mp4">
<source src="yourfile.ogg" type="video/ogg">
```  
[More on HTML media formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats).

#test  

<video autoplay loop poster="first-frame.jpg" id="bgvid">
  <source src="wow.webm" type="video/webm">
  <source src="wow.mp4" type="video/mp4">
</video>
