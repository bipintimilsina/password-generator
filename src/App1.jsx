import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() =>
    {

      let char=""
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let symbols="!#@$(^%)#)&"
      let numbers="1234567890"
      if(numberAllowed)
      {
        str+=numbers
      }
      if(characterAllowed)
      {
        str+=symbols
      }

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * str.length);
        pass+=str.charAt(randomIndex)

        
      }
      console.log(pass)

      setPassword(pass)




    }, [
    length,
    numberAllowed,
    characterAllowed,
  ]);

const copyPasswordToClipboard=()=>{
// console.log('hi')
passwordRef.current?.select()

window.navigator.clipboard.writeText(password)

// console.log("here is"+password)
}



  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <>
      <div className="main w-full h-screen flex items-start ">
        <div className="w-5/12 mx-auto shadow-md rounded-lg px-4 m-10   text-white bg-blue-950 flex justify-center items-center">
          <div className="w-full flex text-center flex-col p-2 py-5">
            <h1 className="text-xl font-bold">Password Generator</h1>

            <div
              className="input-holder w-full mt-4
"
            >
              <input
                type="text"
                name=""
                value={password}
                ref={passwordRef}
                placeholder="Password"
                id=""
                className="rounded-md rounded-r-none p-2 outline-none text-black w-10/12  "
                readOnly
              />
              <button className="bg-blue-600 p-2 rounded-md outline-none rounded-l-none"
              onClick={copyPasswordToClipboard}>
                copy
              </button>
            </div>

            <div className="selection p-5 flex gap-2 flex-wrap">
              <input
                className="w-3/12"
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                name="range"
                id=""
              />
              <label htmlFor="range">Length: {length}</label>
              <label htmlFor="numberAllow">
                <input
                  type="checkbox"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                Numbers
              </label>
              <label htmlFor="characterAllow">
                <input
                  type="checkbox"
                  onChange={() => {
                    setcharacterAllowed((prev) => !prev);
                  }}
                />
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
