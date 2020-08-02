![this.Event Logo](/header.jpg)

# LukeEvents.com

This is a recreation of a WordPress site. Built as a project to dynamically build pages using React with Bootstrap and a Node server connected to MongoDB Atlas

# Table of Contents

- [Description](#description)
- [Link](#link)
- [Features](#features)
- [Installation](#installation)
- [API](#api)
- [Technologies](#technologies)
- [Developers](#developers)
- [License](#license)

# Description

Phase 1 of this project is to have the core template finished and some of the page data entered into MongoDB. Phase 2 will be to finish the data and if required build a second layout template. The data already supports the ability to use an alternate layout. Phase 3 will be adding a custom CMS to create new and edit existing pages. Phase 4 will be to edit the menu as well with the CMS and update with additions and changes to the pages. At the same time a completely custopm page and be created and added to the site if needed.

# Link

[LukeEvents - Dev Site](https://thawing-falls-33010.herokuapp.com/)

# Features

- The site serves to provide information about Luke AFB's services, events and ammenities offered
- Dynamic content served by MongoDB
- Faster and more responsive framework
- Mobile friendly pages
- Expandability. Custom pages that do not fit in a template system can be added as needed

# Installation

1. Clone the project:

```
git clone https://github.com/chrisneal72/LukeEvents.gitt
```

2. Navigate into the project folder and install the dependencies:

```
cd LukeEvents
npm install
```

3. Start the development server:

```
node server.js
```

4. In a new terminal window, navigate into the client folder and install the client dependencies:

```
cd this.Event/client
npm install
```

5. Start the client:

```
npm start
```

6. In your browser, navigate to:

```
http://localhost:3000/

# API

## Events

### Get all events (with optional parameters)

| Method | Route           | Description     |
| :----- | :-------------- | :-------------- |
| GET    | `/api/page/:id` | Gets all events |

This route will send a JSON response in the following format:

```

{
"template": "",
"title": "",
"topImage": "",
"mainImage": "",
"mapImage": "",
"facebook": "",
"bodyCopy": "",
"facInfo": [
{
"title": "",
"lines": [{ "line": "" }]
},
{
"title": "",
"lines": [{ "line": "" }]
}
],
"addInfo": {
"title": "",
"button": {
"title": "",
"path": ""
},
"info": [
{
"type": "ulList",
"title": "",
"path": "",
"lines": [{ "line": "" }]
}
]
},
"addImages": [
{
"smPath": "",
"lgPath": "",
"altText": ""
}
]
}

```
# Technologies

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [ReactJS](https://reactjs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [MongooseJs](https://mongoosejs.com/)
- [Axios](https://github.com/axios/axios)

# Developers

- [Chris Neal](https://github.com/chrisneal72)

# License

[MIT](https://opensource.org/licenses/MIT)
```
