import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props
    return (
        <Card green title="Média de Números">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min+max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}