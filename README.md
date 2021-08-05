
# Deconge

Deconge is a **React component library** created for easy developing of the interactive greeting cards in the form of websites.

It contains a number of the pages you can use in your greeting card. Every page is the prepared component with the determined behaviour, and it has to have the individual link, because these pages are independent.

## Install

You can install Deconge using npm:

	npm i deconge
	
---

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
- button - Style of the button

And the properties of the Slide component:
- slides - Array with the objects of slides
- redirectAfter - link to the next page
- animation - default animation for slides ('fadein' and others)
- background - Background settings

## Messenger
Wonderful page. It is messenger with the prepared messages you can send, and so, you have to collect all dialogue branches by sending and reading messages.

Another simple example:

    <Messenger  
        background={{  
	        type: 'animgradient',  
	        colors: ['rgba(83,79,244,1)', 'rgba(170,51,200,1)', 'rgba(83,79,244,1)'],  
	        time: 30  
        }}  
        collectedTitle={ 'Collected items:' }  
        message={{  
            background: 'rgba(138,182,255,1)'  
	    }}  
        response={{  
            hoverAnimGradientColors: ['rgba(255,171,216,1)', 'rgba(255,118,231,1)', 'rgba(242,111,241,1)', 'rgba(240,63,255,1)']  
        }}  
        collectItem={{  
            background: 'rgb(159, 127, 245)',  
	    }}  
        resetButton={{  
            background: 'rgba(206,103,232,1)',  
            hover: 'rgba(142,139,255,1)',  
            color: 'white'  
	    }}  
        nextButton={{  
            background: 'rgb(123,194,51)',  
	        hover: 'rgb(62,170,220)',  
	        color: 'white'  
	    }}  
        collectItemButton={{  
            background: '#f3c9ff',  
	        hover: '#d884ee',  
	        color: 'black',  
	        text: 'To find next!'  
        }}  
        msgs={[  
            { text: 'Ну привет, добро пожаловать в великолепный мессенджер.... привет!', responses: [0, 1] },  
	        { text: 'Задам один важный вопрос, вопрос, без которого дальейшая беседа просто невозможно. Как дела?', responses: [2] },  
	        { text: 'Эмм.... ты кажется немного обнаглел, наглец, что ты себе позволяешь?', responses: [4] },  
	        { text: 'Задам следующий важный вопрос. Наиважнейший в сегодняшней беседе. Что делаешь?', responses: [3] },  
	        { text: 'Ну ладно', responses: [], collect: 0 },  
	        { text: 'Всё, я обижен', responses: [], collect: 1 } 
        ]}  
        responses={[  
            { text: 'Ну приветик', msg: 1 },  
	        { text: 'Здарова неудачник', msg: 2 },  
	        { text: 'Круто!', msg: 3 },  
	        { text: 'Глажу котика', msg: 4 },  
	        { text: 'Чё эмкаешь', msg: 5 }  
        ]}  
        collection={[  
            { text: 'Приветливость в диалоге!' },  
	        { text: 'Ужасная неприветливость....' }  
        ]}  
    />

Little information about it:
- The main properties here there are *msgs*, *responses*, and *collection*. They are the map of the Messenger.
- *resetButton*, *nextButton*, and *collectItemButton* are styles of the buttons.
- *message* and *response* are styles of simple messages and responses
- *collectItem* is the style of the window of collecting
- *collectedTitle* is the text before collection counter
- *redirectAfter* - like in Slides, link to the next page

Here is what it looks like:

![Messenger](https://i.ibb.co/TcMsYK8/image.png)

---

## Background

Every page has a background property. Today there are three types of backgrounds: *simple*, *animgradient*, and *vanta*.

- **simple** - Just color or gradient
- **animgradient** - Animated gradient
- **vanta** - Vanta backgrounds

Vanta background:

      background={{
          type: 'vanta',
          color: 'lightblue',
          vanta: vantaSettings,
          effect: 'fog'
      }}

      const vantaSettings = {
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xee7eff,
          midtoneColor: 0xbf97ef,
          lowlightColor: 0x5d5dfe,
          baseColor: 0xe4efff,
          blurFactor: 0.57,
          speed: 2.20
      }

Animgradient background:

      background={{
          type: 'animgradient',
          colors: ['rgba(83,79,244,1)', 'rgba(170,51,200,1)', 'rgba(83,79,244,1)'],
          time: 30
      }}

---
