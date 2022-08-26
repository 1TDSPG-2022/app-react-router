import React,{useState, useEffect} from "react";

export default function Pagina1(){
    const [repositorios, setRepositorios] = useState([])

    useEffect(()=>{
        CarregarRepo()
        {repositorios.map((repo)=>
            alert(repo.api))}
    }, [])

    async function CarregarRepo() {

        const response = await fetch("https://api.publicapis.org/entries");
        const data = await response.json();

        setRepositorios(data);

    }

    return(
        <div>
            <h1>Pag1</h1>
            {/* <ul>
                {repositorios.map((repo, i) =>
                    <li key={i}>{repo.code}</li>
                    )}
            </ul> */}
        </div>
    )
}