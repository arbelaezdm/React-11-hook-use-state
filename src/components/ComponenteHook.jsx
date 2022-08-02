import { useState } from 'react'

export default function ComponenteHook () {

    const [listadoDeFrutas, setListadoDeFrutas] = useState(['Manzana', 'Pera', 'Banano'])//valor inicial del estado
    // console.log(listadoDeFrutas);

    const agregarFruta = (e) => {
        e.preventDefault()
        let nuevaFruta = e.target.nuevaFruta.value
        setListadoDeFrutas([
            ...listadoDeFrutas,
            nuevaFruta
        ])
        e.target.nuevaFruta.value = ""
    }

    return (
        <div>
            <h1>Soy el Componente Hook de Frutas</h1>
            <ul>
                {
                    listadoDeFrutas.map((fruta, i)=>{
                        return <li key={fruta + i}>{fruta}</li>
                    })
                }
            </ul>
            <form action="" onSubmit={agregarFruta}>
                <input type="text" name='nuevaFruta' /><br />
                <br />
                <button>Agregar nueva fruta</button>
            </form>
        </div>
    )
}