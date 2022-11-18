import React, { useState, useEffect} from "react";

const ImgsGalery = _ => {
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        fetch('../../../instagram.json')
            .then(res => res.json())
            .then(res => setImagens(res))
    }, [])

    return <ImgsGalery>{imagens}</ImgsGalery>
}

export default ImgsGalery