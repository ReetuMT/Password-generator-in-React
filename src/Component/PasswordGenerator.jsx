import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function AutoLength() {
  const [length,setLenght]=useState(15);
  const [number,setNumber]=useState(false);
  const [character,setCharacter]=useState(false);
  const [password,setPassword]=useState("")
  const passwordgenetaor=useCallback(()=>{
    let num="";
    let pass=""
    let str="ABACDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str+="0123456789";
    if (character) str+= "@#$%^&*(){}@#$%^&";
    for (let index = 0; index < length; index++) {
      let char=Math.floor(Math.random()*str.length+1) 
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,number,character])

  useEffect(()=>{
    passwordgenetaor()
  },[length,number,character,passwordgenetaor])

  const passwrodref=useRef(null)
  const copypasswordClibboard= useCallback(()=>
    {
      passwrodref.current?.select();
      passwrodref.current?.setSelectionRange(0,20)
      window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div style={{backgroundColor:"black",padding:20,borderRadius:20}}>
    <h2 style={{color:"white",fontWeight:'bold',fontSize:20}}>Password Generator</h2>
     <div style={{margintop:5,padding:10}} >
      <input style={{height:40,width:300,padding:20}} type="text" defaultValue={password} placeholder='Password' ref={passwrodref}
      /><button style={{backgroundColor:"blue",color:"white",borderRadius:0}} onClick={copypasswordClibboard}>copy</button>
     </div>
    
    <input className="outline-none w-full py-2 px-3" type="range" min="1" max="100" value={length} onChange={(e)=>{setLenght(e.target.value)}}></input>
    <label htmlFor='lenghtInput' style={{color:"white"}}> Length : {length}   </label>
    <input type="checkbox" id="numberInput" onChange={(e)=>{setNumber((prev)=> !prev)}} defaultChecked={number}/>
    <label htmlFor='numberInput' style={{color:"white"}}> Number  {number}</label>
    <input type="checkbox" id="characterInput" onChange={()=>{setCharacter((prev)=> !prev)}} defaultChecked={character}/>
    <label htmlFor='characterInput' style={{color:"white"}}> Character {character}</label>
    </div>
  )
}
