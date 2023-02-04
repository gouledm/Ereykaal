import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Errey } from '../common/errey'

const Input = () =>{

    const [search, setSearch] = useState(true)
    const [word, setWord] = useState<Errey>();
    const [data, setData] = useState(null)

    async function handleSearch(){
        setSearch(!search)
        axios.get('https://localhost:7089/GetDetail/errey/' + data).then(response=> response.data).then((data) => {
            setWord(data)
        });
        console.log(word);
    }
    function getData(event){
        setData(event.target.value)
    }
    return(
        <div>
            <form>
                <div className="relative">
                    <input 
                        type="search"
                        onChange={getData}
                        id = "default-search"
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search for a word"
                    />
                    <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" onClick={handleSearch}>
                        Submit
                    </button>
                </div>
            </form>
            {!search &&
                <div className={"max-w-sm mx-auto p-8 bg-white border border-gray-200 rounded-lg my-60"}>
                    <h5 className="mb-3 font-semibold text-xl">{word?.errey}</h5>
                    <p className="indent-5">{word?.micne}</p>
                </div>           
            }
        </div>

        
        

    );
    
}

export default Input;