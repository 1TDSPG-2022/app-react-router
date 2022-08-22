import React,{useEffect,useState} from "react";

export default function Home(){

    const [repositorios, setRepositorios] = useState([])

    useEffect(async () => {

        const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=blush")
        const data = await response.json()

        setRepositorios(data)

    }, [])

    return(
        <div>
            <h1>Home</h1>
            <ul>
                {repositorios.map((repo, i) =>
                    <li key={i}>{repo.name}</li>
                )}
            </ul>
        </div>
    )
}