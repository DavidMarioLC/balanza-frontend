import React, { useState, useEffect } from 'react'
import './css/styles.css'
//sockets
import io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000";


const ViewBalanza = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {

        const socket = io(ENDPOINT, {
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd"
            }
        });


        socket.on("datos", data => {

            setResponse(data)
        });

        socket.emit("peso", { data: 'soy el emit' });

    }, []);



    return (
        <div className="balance">
            <div className="wrapper">
                <div className="balance__weight">
                    <h1 className="balance__weight-text">la hora es </h1>
                    <time dateTime={Date(response)}>{Date(response)}</time>
                </div>
                <div className="balance__button">
                    <button className="balance__button--send">Enviar</button>
                </div>
            </div>

        </div>
    )
}

export default ViewBalanza
