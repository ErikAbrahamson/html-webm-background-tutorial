# Simple video background tutorial  
This is a simple boilerplate in basic HTML/CSS to demonstrate how to implement a full screen video for a document/window background.  

This style of implementing videos as a window background is becoming increasingly popular due to its visual appeal and cross-platform availability. Some excellent examples:  

[Dadaab Stores](http://www.dadaabstories.org/), [Matter Design](http://www.matter.to/), [Drexel University](http://www.getgoingtoday.org/curious)  


## The HTML  
We will require the special elements `video` and `source`. These will in turn hold, you guessed it, attributes to set the video source and to play the video. We will end up with a template resembling something like this:  

```html
<video autoplay loop>
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

The `video` element that will contain the video will need two additional attributes, either an `id` or `class`, preferably an `id` as there will be no additional background video elements.  

Lastly, we will want to capture a still image from the first frame of our video to act as a `poster`, or placeholder to immediately load with the page. This is a great little trick that keeps the UX fast and clean. The final HTML should resemble:  

```html
<video autoplay loop poster="first-frame.png" id="bg-video">
  <source src="wow.webm" type="video/webm">
  <source src="wow.mp4" type="video/mp4">
</video>
```

## The CSS

Since we have an `id` in place for our video element, we can then begin to create the video as a window-sized overlay. Let's also ensure that our first-frame image loads as the background.  

```css
video#bg-video {
  background: url(first-frame.png) no-repeat;
  background-size: cover;
}
```

The next few steps are the most complicated part in this entire process
