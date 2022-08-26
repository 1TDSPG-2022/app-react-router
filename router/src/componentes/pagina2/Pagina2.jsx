import React, {useState,useEffect} from "react";

export default function Pagina2(){
    const [repositorios, setRepositorios] = useState([])

    useEffect(()=>{
        CarregarRepo()
        {repositorios.map((repo)=>
            alert(repo.name))}
    }, [])

    const CarregarRepo= async () => {

        const response = await fetch("https://api.github.com/users/alecarlosjesus/repos")
        const data = await response.json()

        setRepositorios(data)

    }

    return(
        <div>
            <h1>Pag2</h1>
            <ul>
                {repositorios.map((repo, i) =>
                    <li key={i}>{repo.name}</li>
                    )}
            </ul>
        </div>
    )
}