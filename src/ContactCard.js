

function ContactCard(props){
  console.log(props)
  return(
    <div className="contact-item">
      <img src={props.contact.imgurl}/>
      <h3>{props.contact.name}</h3>
      <p>Phome: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard