import React, {useState} from 'react'

function Form({addContact, contacts}) {
  const [form, setForm] = useState({fullname: "", phone_number: ""})
  const onChangeInput = (e) => (setForm({...form, [e.target.name]: e.target.value}))
  const onSubmit = () => {
   if(form.fullname === "" || form.phone_number === ""){ return false; }
   addContact([...contacts, form])
    console.log(form)
    setForm({fullname: "", phone_number: ""})
  }

  return (
    <div>
        <input name="fullname" placeholder='Fullname' onChange={onChangeInput} value={form.fullname}/> <br />
        <input name="phone_number" placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number}/> <br />
        <button className='btn' onClick={onSubmit}>Add</button>
    </div>
  )
}

export default Form