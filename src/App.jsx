import './App.css';
import Album from './components/Album';

const App = () => {

  return (
    <div className="App">
      <img id='topImg' src='src/assets/dj.jpg'></img>
      <h1>Friends' Favorite Albums</h1>
      <div className="Albums">
        <Album albumCover='flaws_and_all.webp' albumTitle='Flaws and All' albumLink='https://open.spotify.com/album/0kT2Dn4QknHk92h76ZcMk0'/>
        <Album albumCover='never_enough.webp' albumTitle='Never Enough' albumLink='https://open.spotify.com/album/7ivbFszr1TbVadj89BIy1y'/>
        <Album albumCover='cosmic.jpg' albumTitle='Cosmic' albumLink='https://open.spotify.com/album/5EEkfRgfYHiFu0lGur6Z6M'/>
        <Album albumCover='crumbs_in_my_bed.jpg' albumTitle='Crumbs in My Bed' albumLink='https://open.spotify.com/album/4zw4swEirlhHxLrjm1gTGh'/>
        <Album albumCover='damn.png' albumTitle='Damn' albumLink='https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY'/>
        <Album albumCover='freudian.jpg' albumTitle='Freudian' albumLink='https://open.spotify.com/track/4nESnAOALHmxg8UFCCtXhO'/>
        <Album albumCover='making_steak.jpg' albumTitle='Making Steak' albumLink='https://open.spotify.com/album/2KR8a0U0f286MuzLaEJhL6'/>
        <Album albumCover='to_let_a_good_thing_die.jpg' albumTitle='To Let a Good Thing Die' albumLink='https://open.spotify.com/album/4NWvFq8Cst2Y5iHOouXtMz'/>
        <Album albumCover='alone_at_prom.jpg' albumTitle='Alone at Prom' albumLink='https://open.spotify.com/album/5Gm2XKBgnlzd6qTi7LE1z2'/>
        <Album albumCover='vultures_1.png' albumTitle='Vultures 1' albumLink='https://open.spotify.com/album/30zwjSQEodaUXCn11nmiVF'/>
      </div>
    </div>
  )
}

export default App