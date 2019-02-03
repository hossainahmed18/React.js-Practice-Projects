import React from 'react';

import './App.css';

import Header from "./component/Header"
import MainContent from "./component/MainContent"
import Footer from "./component/Footer"
import ContactCard from "./component/contact/ContactCard"



function App(){

  

  return(
       <div className="App">
           <div>
              <Header/>
              <MainContent/>
              <Footer name="joynal" />

           </div>

           <ContactCard 
                name="Labiba"
                imgUrl="https://placekitten.com/400/300"
                email="labibaaftab21@gmail.com"
                phone="01754422299"

           />
           <ContactCard 
                name="Junayed"
                imgUrl="https://placekitten.com/200/100"
                email="junayedhossain77@gmail.com"
                phone="01781204461"

           />
           

        
      </div>
  );
}

export default App;
