import { useState } from 'react'

const View = () => {
    const [fname, setFname] = useState<string>('')
    const [lname, setLname] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [gender, setGender] = useState<string>('')
    const [skills, setSkills] = useState<string[]>([])
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [address, setAddress] = useState<string>('')
  return (
    <div>
      <h1>My First React App</h1>
        <h2>
        <input value={fname} type='text' placeholder='Enter your name' onChange={(e) => setFname(e.target.value)} />
        <br />
        <input value={lname} type='text' placeholder='Enter your last name' onChange={(e) => setLname(e.target.value)} />
        <br />
        <input value={age} type='number' placeholder='Enter your age' onChange={(e) => setAge(Number(e.target.value))} />
        <br />
        <input value={gender} type='radio' placeholder='Enter your gender' name='gender' onChange={() => setGender("Male")} />Male
        <input value={gender} type='radio' placeholder='Enter your gender' name='gender' onChange={() => setGender("Female")} />Female
        <br />
        <input value={skills} type='checkbox' placeholder='Enter your skills' onChange={(e) => setSkills(e.target.value.split(','))} />
        <input value={skills} type='checkbox' placeholder='Enter your skills' onChange={(e) => setSkills(e.target.value.split(','))} />
        <input value={skills} type='checkbox' placeholder='Enter your skills' onChange={(e) => setSkills(e.target.value.split(','))} />
        <input value={skills} type='checkbox' placeholder='Enter your skills' onChange={(e) => setSkills(e.target.value.split(','))} />
        <input value={skills} type='checkbox' placeholder='Enter your skills' onChange={(e) => setSkills(e.target.value.split(','))} />
        <br />
        <input value={email} type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input value={phoneNumber} type='tel' placeholder='Enter your phone number' onChange={(e) => setPhoneNumber(e.target.value)} />
        <br />
        <input value={address} type='text' placeholder='Enter your address' onChange={(e) => setAddress(e.target.value)} />
        </h2>
        <p>
          Your name is: {fname} {lname}
          <br />
          Your age is: {age}
          <br />
          Your gender is: {gender}
          <br />
          Your skills are: {skills}
          <br />
          Your email is: {email}
          <br />
          Your phone number is: {phoneNumber}
          <br />
          Your address is: {address}
        </p>
    </div>
  )
}

export default View
