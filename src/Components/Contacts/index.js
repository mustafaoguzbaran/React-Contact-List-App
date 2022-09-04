import React, {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import "./styles.css"


function Contacts() {
  const [contacts, setContacts] = useState([
    {fullname: "Mustafa",
    phone_number: "123123"},
    {
      fullname: "Yaren",
      phone_number: "321321"
    },
    {
      fullname: "Zeynep",
      phone_number: "987654"
    }
  ])
  useEffect(
    () => {console.log(contacts)}, [contacts]
  )
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact = {setContacts} contacts = {contacts}/>
    </div>
  )
}

export default Contacts