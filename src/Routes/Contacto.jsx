import { useState, useReducer } from "react"

const formInitialValue = {
    valorEnviado: null,
    error: null,
}

const actionTypes = {
    ERROR: "ERROR",
    SUCESS: "SUCESS",
}

function formReducer(state, action) {
    const newState = {...state}
    switch(action.type) {
        case actionTypes.ERROR: {
            newState.error = action.payload
            newState.valorEnviado = null
        }
        break
        case actionTypes.SUCESS: {
            newState.error = null
            newState.valorEnviado = action.payload
        }
        break
        default:
            throw new Error("Action type not fund")
    }
    return newState
}

function Contacto () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [formData, dispatchFormData] = useReducer(formReducer, formInitialValue)

    function manejoNombre(e) {
        const cleanName = e.target.value.trim()
        setName(cleanName)
    }

    function manejoEmail(e) {
        const email = e.target.value
        setEmail(email)
    }

    function validaciones(name) {

        const esCorrectoName = name.length >= 6;

        if(!esCorrectoName) { 
            const actionMockedError = {
                type: actionTypes.ERROR,
                paload: "El campo debe tener al menos 6 caracteres"
            }
        }
        return esCorrectoName 
    }
    
    function controlEnviar (e) {
        e.preventDefault()
        if(!validaciones(name)) {
            dispatchFormData({
                type: actionTypes.ERROR,
                payload: "El campo debe tener al menos 6 caracteres"
            })
            return
        }

        //Reset
        setName("")
        setEmail("")
        dispatchFormData({
        type: actionTypes.SUCESS,
        payload: {name, email}
    })
    console.log("envío exitoso", name, email)
}

    return (
        <>
        <form onSubmit={controlEnviar}>
            <h2>Déjanos tus datos</h2>
            <input type="email" placeholder="Tu email" value={email} onChange={manejoEmail}></input>
            <input type="text" placeholder="Escribe tu nombre" value={name} onChange={manejoNombre}></input>
            {formData.error ? <div>{formData.error}</div>: null}
            <button type="submit">Enviar</button>
        </form>
        <hr/>
        {formData.valorEnviado ? <div>Hola {formData.valorEnviado.name} te escribiremos a tu correo {formData.valorEnviado.email}</div> : null}
        </>
    )
}

export default Contacto