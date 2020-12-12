import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import '../css/styles.css'

const Balance = ({ cerrarSession }) => {

    const ENDPOINT = "http://127.0.0.1:4000";
    const [response, setResponse] = useState("");





    useEffect(() => {

        const socket = io(ENDPOINT, {
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd"
            }
        });


        socket.on("datos", data => {
            console.log(data)
            setResponse(data)
        });

        socket.emit("peso", { data: 'soy el emit' });

    }, []);

    return (
        <div className="balance-container">
            <div className="wrapper">
                <div className="balance__navbar">
                    <div className="profile">
                        <h2 className="profile-name">David Mario Licla</h2>
                        <p className="profile-sap">442379</p>
                    </div>
                    <div className="balance__options">
                        <button onClick={cerrarSession} className="button__logout">
                            <ion-icon size="large" name="exit-outline"></ion-icon>
                            Salir
                        </button>
                    </div>
                </div>
                <div className="balance__wrapper">
                    <div className="balance">
                        <h1 className="balance__weight">120.00 KG</h1>
                        <time dateTime={response}>{response}</time>
                    </div>
                </div>
                <div className="balance__wrapper">
                    <button className="button__send">


                        Enviar
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Balance
