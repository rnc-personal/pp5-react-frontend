# "BATTLEBOXES"

PC Gaming has become very popular since 2020 and many Youtubers and content creators like to make videos rating their views builds so i thought a dedicated site focused on people sharing their builds and rating other peoples would be a good idea. Additionally it would provide a resource for people planning their own builds to see what other people have used and how they have performed.

[Live Site] (https://pp5-react-frontend-be81d616c51b.herokuapp.com/)

# TODO TEMP:

- Component Documentation
- Figma Wireframes



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

### React Components

The site makes use of Many Bootstrap React Components and some from React Router.
Examples of these are <Row>, <Column>, <Media> (Bootstrap) and <Link> (React Router).

Additionally the site has some of its own components which are detailed below:

#### BuildGallery:

##### Overview
The BuildGallery component is a React component that displays a gallery of images. It includes a main image and a gallery of smaller images. Users can click on the smaller images to change the main image. The main image also serves as a clickable link to another page (typically for a detailed view of the gallery).

##### Props
id (number): This is used for the users profile and is optional but used here to link back to the users profile above the gallery.
allImages (array of strings): An array of image URLs to be displayed in the gallery.

The data for both these props is being passed down from the Build component where the dta fetching occurs.

##### Component Structure
Main Image Display: The main image is displayed at the top of the component and is wrapped in a link element (Link from react-router-dom). Clicking the main image redirects the user to another page.

##### Image Gallery:
Below the main image, there is an image gallery consisting of smaller thumbnail images. Users can click on these thumbnails to change the main image.

##### State Management
The component uses the useState hook to manage the currentMainImage state, which tracks the index of the currently displayed main image.
A nextImage function is used to update the currentMainImage state when a user clicks on a thumbnail in the gallery. It takes an index parameter, representing the index of the clicked image.

---
#### FeaturedCreator

##### Overview
The FeaturedCreator component is a React component that displays information about a featured creator. It retrieves data from an API, filters the featured creators, and renders the information, including the creator's name, image, description, content, and a link to their profile. Creators can be marked as featured I nthe django admin under the profiles section.

##### Component Functionality
State Initialization: The component initializes a state variable called featuredCreator using the useState hook. This state variable is an object with a results property, which is initially an empty array.

##### Data Fetching:
Inside the useEffect hook with an empty dependency array ([]), the component makes an asynchronous API request using the axiosReq function to fetch data from the /profiles/ endpoint. It checks if the response data contains a results property and filters the profiles to find those marked as featured. The filtered results are then set in the featuredCreator state.

##### Rendering:
The component conditionally renders content based on the length of the featuredCreator.results array. If there are featured creators available, it displays their information, including name, image, description, content, and a link to their profile. If no featured creators are found, it displays a message indicating that no featured creators were found.

##### Component Structure
Featured Creator Information: If featured creators are found, the component renders the following information for the first featured creator:

Image: Displayed using an img element with the src attribute set to the creator's profile image URL.
Name: Displayed as a heading (h3).
Subtitle: Displayed as a small text (small) element, typically showing the creator's description.
Content: Displayed as a paragraph (p) element, showing additional information about the creator.
Link to Profile: A clickable link (Link from react-router-dom) that redirects the user to the creator's profile page.
No Featured Creators Message: If no featured creators are found, the component displays a message indicating that no featured creators were found.

---
#### TopBuilds

##### Overview
The TopBuilds component is a React component responsible for displaying a list of top builds based on a specified filter. It fetches data from an API, combines the existing top builds with new top builds, and displays them as cards with build information, including an image, build name, comment count, and a link to view more details.

##### Props:
 The component accepts a filter prop passed down from the Home component. This makes use of the Django DRF API query paramters and filtering to directly request the top builds based on the number of comments each build has for gathering the results

##### Component Functionality
State Initialization: The component initializes two state variables using the useState hook:

topBuilds: An object with a results property, initially an empty array, to store the top builds.
currentPage: A state variable initially set to 1, which keeps track of the current page of top builds.

##### Data Fetching:
Inside the useEffect hook with a dependency array containing [currentPage], the component makes an asynchronous API request using the axiosReq function to fetch data from the /builds/ endpoint with the specified filter and page number. It then processes the response data to handle missing comments_count and combines the new top builds with the existing ones. Finally, it updates the topBuilds state with the first 6 top builds based on the most comments and resets the currentPage to 1.

##### Rendering:
The component maps over the topBuilds.results array to render build cards. Each build card includes the following information:

Image: Displayed using an img element with the src attribute set to the build's main image URL.
Build Name: Displayed as a heading (h3).
Comment Count: Displayed as a paragraph (p) showing the number of comments on the build.
View Link: A clickable link (Link from react-router-dom) styled as a button that redirects the user to the detailed view of the build.

##### Component Structure
Build Cards: The component renders multiple build cards, each containing information about a top build.

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