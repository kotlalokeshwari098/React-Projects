import React, { useEffect ,useCallback,useRef} from 'react'

function App() {
   const [length,setLength]=React.useState(0)
   const [numberAllowed,setNumberAllowed]=React.useState(false);
   const [characterAllowed,setCharacterAllowed]=React.useState(false);
  const [data,setData]=React.useState('')
  const [password,setPassword]=React.useState('')
  
  // useRef
  const passwordRef=useRef(null);


  const generatePassword = useCallback(()=>{
        let str='';
       let alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
       let numbers='0123456789'

       if(numberAllowed) str+=numbers
       if(characterAllowed) str+='!@#$%^&*()~.,/'
        let datas='';
       for(let i=0;i<length;i++){
        let random=Math.floor(Math.random() * str.length)
         datas+=str.charAt(random);
        console.log(datas)
        
      }
      setPassword(datas);


  },[length,numberAllowed,characterAllowed,setPassword])


  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
          window.navigator.clipboard.writeText(password)
  },[password])

  function changeLength(e){
    setLength(e.target.value)
   }

   useEffect(()=>{
        generatePassword()
   },[length,numberAllowed,characterAllowed,generatePassword])

  /*
   let character='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' 
   let number='0123456789';

   function changeLength(e){
    setLength(e.target.value)
   }
      
   useEffect(()=>{
    if(characterAllowed && numberAllowed){
      setData(()=>character+number)
   }
   else if(characterAllowed){
    setData(()=>character)
   }
   else if(numberAllowed){
    setData(()=>number)
   }
    let datas='';
    for(let i=0;i<length;i++){
      let random=Math.floor(Math.random() * data.length)
      datas+=data.charAt(random);
      console.log(datas)
      
    }
    setPassword(datas);
   },[numberAllowed,characterAllowed,length])
*/
   
// console.log(data)
  return (
    <div className=''>
       <h1 className='text-4xl text-center text-pink-400'>Password Generator</h1>
       <div className="">
         <div className="">
          <input 
            type="text"  
            className='bg-white rounded-md relative text-black' 
            placeholder='Password' 
            value={password} 
            readOnly
            ref={passwordRef}
            />
          <button 
          onClick={copyPasswordToClipboard}
          className='text-white-700 absolute  left-32 bg-blue-500 rounded-r-xs w-15'
          >copy
          </button>

         </div>
         <div className="components flex gap-5">
          <div className="input-range">
            <input 
            type="range" 
            min={4} 
            max={30} 
            value={length} 
            onChange={changeLength} className='cursor-pointer'/>
          </div>
          <div 
          className="length">
            length {length}
          </div>
          <div className="numbers">
            <input 
            type="checkBox" 
            onClick={()=>
                 setNumberAllowed(prev=>!prev)} 
            />
            <label htmlFor="Numbers">Numbers</label>
          </div>
          <div className="Characters">
             <input 
             type="checkBox" 
             onClick={()=>
             setCharacterAllowed(prev=>!prev)}
             />
             <label htmlFor="Characters">Characters</label>
          </div>
         </div>
       </div>
    </div>
  )
}

export default App
