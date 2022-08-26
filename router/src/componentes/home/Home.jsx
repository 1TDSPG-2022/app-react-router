import React,{useEffect,useState} from "react";

export default function Home(){

    const [repositorios, setRepositorios] = useState([])

    useEffect(()=>{
        CarregarRepo()
    }, [])


    const CarregarRepo= async () => {

        const response = await fetch("")
        const data = await response.json()

        setRepositorios(data)
    }

    return(
        <div>
            <h1>Home</h1>
            <ul>
                {repositorios.map((repo, i) =>
                    <li key={i}>{repo.count}</li>
                )}
            </ul>
        </div>
    )
}