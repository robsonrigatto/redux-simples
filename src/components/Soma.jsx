import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props
    return (
        <Card blue title="Soma de Números">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{max+min}</strong>
                </span>
            </div>
        </Card>
    )
}