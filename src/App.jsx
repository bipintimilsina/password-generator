import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "@$(^$^)@*";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, characterAllowed, numberAllowed, passwordGenerator]);

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
                placeholder="Password"
                id=""
                className="rounded-md rounded-r-none p-2 outline-none text-black w-10/12  "
                readOnly
                ref={passwordRef}
              />
              <button
                className="bg-blue-600 p-2 rounded-md outline-none rounded-l-none"
                onClick={copyPasswordToClipboard}
              >
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
                name="range"
                id=""
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="range">Length: {length}</label>
              <label htmlFor="numberAllow">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                Numbers
              </label>
              <label htmlFor="characterAllow">
                <input
                  type="checkbox"
                  defaultChecked={characterAllowed}
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
