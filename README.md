# "BATTLEBOXES"

PC Gaming has become very popular since 2020 and many Youtubers and content creators like to make videos rating their views builds so i thought a dedicated site focused on people sharing their builds and rating other peoples would be a good idea. Additionally it would provide a resource for people planning their own builds to see what other people have used and how they have performed.

[Live Site] (https://pp5-react-frontend-be81d616c51b.herokuapp.com/)


---

## CONTENTS

* [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---


### User Stories

An up to date list of user stories is avaialble here: [User Stories](https://github.com/users/rnc-personal/projects/3/views/1)

## Design

The site makes use of a simple, clean design. The site is designed to be easy to navigate and use.
In order to aid with develoment a modified React-Bootstrap design has been used with some defaults being overriden.

### Colour Scheme

The color scheme for the site employs a dark and high contrast theme. The site is themed around gaming PC's which often have lots of bright RGB lighting in neon colours so the dark theme is designed to make the site feel like it fits in with the theme with the content that is likely to be posted by users.

Key Colours: 

Background: #222
Dark, without being too dark/eye straining. This colour is used for the background of the site.

Text: #fafafa
White, used for the text on the site. This colour is used for the text on the site. Again, consideration has been made for eye strain on a high contrast site.

Main Accent: #D9176B
The first of the three main colors used, Bright neon pink. This colour is used for the main accent on the site, such key submit / login buttons.

Secondary Accent: #00E6D6
Complimentary to the main accent, this colour is used for secondary accents on the site, such hover states and some smaller elements.

Tertiary Accent: #11DF6A
Again, a neon complimentary colour to the main accent, this colour is used for tertiary accents on the site, mostly before confirming an action and is used in limited amounts.

### Typography

For this project I have used the Google Gont 'Inter' as it is a modern, clean font that is easy to read and also has a slightly futuristic feel to it. I have used the font in a few different weights:

h1: font-weight: 800;

h2: font-weight: 500;

h3 / p:font-weight: 300;

p, text, input, select, textarea, label, ul, li: font-weight: 200;


### Imagery

The imagery for the site is mostly supplied by the users of the site but for the placeholder content i have used Migjourney to genrate some placeholder images. The images are all of gaming PC's and gaming setups to fit in with the theme of the site and I have also chosen images that compliment the colour scheme for the site.


## Features

The site follows a similar layout and feature set to sites like Instagram or Twitter. Users can sign up to post content (PC builds they have worked on). Including all the specifications and components used. Users can also comment on other users content and save them for later. Users can also follow other users to see their content in their feed.

Users can also view an individual profile page for each user to see all of their content and follow them.

### Future Implementations

I had hoped to add numerous features to the site but due to time constraints I have had to limit the scope of the project. I have listed some of the features I would like to add in the future below:

- Home / landing page with some curated content. Managable by the site admin or based on Creation date/ ratings.
- Add a rating system for content where users could vote on different aspects of the content (Parts chosen, looks, tidyness etc).


## Technologies Used

The project is comprised of a backend, written in Django and a frontend written in React. The frontend also makes use of React Router for routing and React Bootstrap to aid with the structure and layout of the site.
Both are hosted on Heroku and the database is hosted on ElephantSQL remotely and a CDN is used for hosting images (Cloudinary).

### Languages Used
- Python
- JavaScript
- React/JSX
- CSS

### Frameworks, Libraries & Programs Used

- Django
- JWT for Django
- React Router
- React Bootstrap
- Google Fonts
- Cloudinary

## Deployment & Local Development

The project can be run locally using npm start dev. Please note that due to an OpenSSL issue with Node 18. You will need to change Node versions to 16 for the project to work locally. When the project first loads it will try to initialise and start the local server but will produce an error.

Please run the following in the terminal:
nvm install 16
nvm use 16

Then run npm start dev again and the project should load correctly.

### Deployment

Both projects are deployed to Heroku via the Github integrations. Once you have the project files, please commit them both to their own new repositories and connect them to Heroku via the Github integration. You will need to set the following config vars in Heroku for the Django App:

CLIENT_ORIGIN_DEV: If you are using gitpod or similar online IDE you will need to add the URL of your development preview here (e.g. https://8000-brown-otter-7j5j2j7b.ws-eu03.gitpod.io)

CLOUDINARY_API_KEY: This is the API key for your Cloudinary account, available in the dashboard.
CLOUDINARY_NAME: This is the name of your Cloudinary account, available in the dashboard.
CLOUDINARY_SECRET: This is the secret for your Cloudinary account, available in the dashboard.
CLOUDINARY_URL: This is the URL for your Cloudinary account, available in the dashboard.

DATABASE_URL: This is the URL for your ElephantSQL database, available in the dashboard.

DISABLE_COLLECTSTATIC: Set to 1 to disable collectstatic and use Cloudinary for hosting assets. Please disable in production only.

CLIENT_ORIGIN: "The URL for the deployed React App in heroku" (e.g. https://rnc-personal-react.herokuapp.com)
**Only avaialble after deployment** 

ALLOWED_HOST: "The URL for the deployed Django App in heroku" (e.g. https://rnc-personal-django.herokuapp.com) 
**Only avaialble after deployment** 

SECRET_KEY: THis is the secret key for your Django app. You can generate one here: https://miniwebtool.com/django-secret-key-generator/

#### How to Fork

You can fork either project by clicking the fork button in the top right of the repository page. This will create a copy of the project in your own github account. You can then clone the project to your local machine and make any changes you wish.

#### How to Clone

You can clone either project by clicking the green code button in the top right of the repository page. This will open a dropdown with the option to clone the project using HTTPS or SSH. Copy the link for the method you wish to use and then in your terminal navigate to the folder you wish to clone the project to and run the following command:

```bash
git clone <link>
``` 

### Content

All of the site content mostly relates to PC components so I was able to scrape some popular parts and data from pcppartpicker.com. I have additional written some of the "fluff" content for the site myself.

###  Media

All Images were generated by Midjourney V5
  
###  Acknowledgments

I found the React part of this project exceptionally difficult due to the number of new concepts I had to take onboard and did not find the teaching resources provided by the course to be sufficient in helping me to understand them well. I was advised to use the walkthrough as a guide as well as my own notes I had taken during the moments walkthrough. I have tried to add and expand on the example code as much as I was able to but do not feel that I am that comfortable with many of the concepts used in the teaching material and will peronally be taking some more time with React. I enquired about an extension for this project due to the above as well as some additional time and external personal issues during the project timeline. 