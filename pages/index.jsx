import {useState} from "react" 
export default () => {
    const [name, setName] = useState("Elja Suhonen")    
    const [email, setEmail] = useState("eljailari.suhonen@gmail.com")
    return <form onSubmit={()=>{alert(JSON.stringify({name, email}))}}>
        <h1>Nimi</h1>
        <h2>{name}</h2>
        <input type="text" onChange={(event)=>{
            setName(event.target.value)
        }}/>
        <h1>Sähköposti</h1>
        <h2>{email}</h2>
        <input type="text" onChange={(event)=>{
            setEmail(event.target.value)
        }}/>
        <button type="submit">Lähetä</button>
    </form>
}



