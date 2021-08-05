
# Deconge

Deconge is a **React component library** created for easy developing of the interactive greeting cards in the form of websites.

It contains a number of the pages you can use in your greeting card. Every page is the prepared component with the determined behaviour and it has to have the individual link, because theese pages are independent.


# Pages
There are two types of pages at the moment: page with the slides (like a little presentation with slides of text, images or something else) and messenger page:

## Slides
You are able to switch slides by left-click. There are several slide types: simple slide with title and some text, slide with image, and feedback slide with simple form and button.

A simple example:

    <Slides  
      slides={ exampleSlides }  
      animation='fadein'  
      background={{  
        type: 'animgradient',  
		colors: ['rgba(83,79,244,1)', 'rgba(170,51,200,1)', 'rgba(83,79,244,1)'],  
		time: 30
      }}  
    />

You can return it just in the App component (or instead of it) 

And there are slides for Slides:
  
    const exampleSlides = [  
      {  
	      type: 'simple',  
	      title: 'Colourful slide',  
	      content: 'With some useful content',  
	      size: 'small',  
	      color: 'cyan',  
	      highlight: 'black'  
      },
      {
	      type: 'feedback',  
		  content: 'Type something interesting',  
		  placeholder: 'And type it here',  
		  onButton: feedback => console.log(feedback)
      },
      {  
	      type: 'image',  
	      content: 'https://www.webturizm.ru/storage/photos/estonia/estonia-15963.jpg',  
	      size: 'medium'  
	  }
    ]

In the slide object you may pass the next properties:
- type - Type of the slide ('simple', 'feedback', 'image')
- title - Title of the slide, if type supports it
- content - Main content of the slide, like text or link to an image
- placeholder - Placeholder text in the Feedback slide
- onButton - Additional action in the Feedback slide (sending answer to the server, for example)
- animation - Animation of the slide occurrence ('fadein' and others)
- color - The color of the text
- highlight - The color of text highlighting
- size - The size of the slide content ('small', 'medium', 'large')
- buttonPassing - Does the slide have to have a button to switch (boolean)

And the properties of the Slide component:
- slides - Array with the objects of slides
- redirectAfter - link to the next page
- animation - default animation for slides ('fadein' and others)
- background - Background settings
