import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {
    return (
        <Card green title="Média de Números">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{5}</strong>
                </span>
            </div>
        </Card>
    )
}