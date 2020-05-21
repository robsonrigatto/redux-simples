import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max-min)) + min

    return (
        <Card purple title="Sorteio de um Número">
            <div>
                <span>
                    <span>Sorteio: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}