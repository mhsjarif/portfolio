import React, { Component } from 'react';
import './App.css';
import MyJumbotron from './Components/MyJumbotron/MyJumbotron';
import MyNavbar from './Components/MyNavbar/MyNavbar';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Slots 4 Tots',
          image: 'https://i.imgur.com/f11Xmwc.png?1',
          tech: ['HTML5', 'CSS3', 'JavaScript'],
          description: 'WDI-Project 1 Slots 4 Tots is a fun and light hearted Slot Machine web application built using vanilla JavaScript. Try your luck accompanied by a vibrant color scheme and entertaining sound effects!',
          github: 'https://github.com/mhsjarif/project1',
          deployed: 'https://mhsjarif.github.io/project1/'
        },
        {
          title: 'is it fun?',
          image: 'https://i.imgur.com/ut1GuHj.png?1',
          tech: ['Ruby on Rails',
            'Materialize',
            'HTML5',
            'CSS3'],
          description: 'WDI-Project 2 is it fun? is a Disneyland attraction rate and review application, conceptualized with the clueless amusement park goer in mind. Create an account and review your favorite rides for all users to see!',
          github: 'https://github.com/mhsjarif/project2',
          deployed: 'https://isitfun.herokuapp.com/'
        },
        {
          title: 'Movie Express',
          image: 'https://i.imgur.com/cpivnrS.png',
          tech: ['Node.js', 
            'JavaScript', 
            'MongoDB', 
            'Mongoose', 
            'Express', 
            'Bootstrap', 
            'Heroku', 
            'TMDB api'],
          description: 'WDI-Project 3 MovieExpress is a vast Movie database that consumes the TMDB third party API and enables users to easily search for a movie, leave a comment, favorite movies, view recommendations based on those favorites and purchase tickets.',
          github: 'https://github.com/mhsjarif/MovieExpressm',
          deployed: 'https://movie-express.herokuapp.com/movies'
        },
        {
          title: 'Fire Beauty',
          image: 'https://i.imgur.com/aJEAoKU.png',
          tech: ['React',
            'JavaScript',
            'Node.js',
            'YouTube Data API',
            'MongoDB',
            'Express',
            'JSON Web Tokens'],
          description: 'WDI-Project 4 Fire Beauty is a custom built beauty product database showcasing top beauty influencer “favorites”. Our data is a nice blend of channel information from YouTube’s data API and our own Fire Beauty database. Fire Beauty allows users to follow and discover top beauty influencers and their favorite products.',
          github: 'https://github.com/mhsjarif/Project-4_FireBeauty',
          deployed: 'https://fire-beauty.herokuapp.com/'
        }
      ],
      technologies: [
        'JavaScript',
        'HTML5',
        'CSS3',
        'React',
        'Node.js',
        'Express',
        'Ruby on Rails',
        'MongoDB',
        'PostgreSQL',
        'SQL',
        'Git',
        'jQuery',
        'Bootstrap',
        'Webpack',
        'NPM',
        'JSON',
        'REST',
        'AJAX',
        'Agile',
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <MyJumbotron />
        <MyNavbar />
        <AboutMe />
        <Skills 
          skills={this.state.technologies}
        />
        <Work
          projects={this.state.projects}
        />
        <Contact />
      </div>
    );
  }
}

export default App;
