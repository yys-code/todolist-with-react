import logo from './logo.svg'
import './App.css'
import ContactCard from "./ContactCard"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="contact-List">
          <ContactCard
            contact ={{name: "Yeahyea Sarker (Navil)",imgurl:"https://loremflickr.com/300/200",phone: "(880) 1234567891", email:"yeahyeasarker@gamil.com"}}
          /> 
          <ContactCard
            contact ={{name : "Navil Sarker",imgurl : "https://loremflickr.com/340/200",phone : "Phome: (880) 1234567892",email : "Email: navilsarker@gamil.com"}}
          /> 
          <ContactCard
            contact = {{name : "Yeahyea Khan (Navil)",imgurl : "https://loremflickr.com/320/200",phone : "(880) 1234567893",email : "yeahyeakhan@gamil.com"}}
            
          /> 
          <ContactCard
            contact = {{name : "Navil Sarker",imgurl : "https://loremflickr.com/350/200",phone : "(880) 1234567894",email : "navilkhan@gamil.com"}}
          />

        </div>
      </header>
    </div>
  );
}

export default App;
