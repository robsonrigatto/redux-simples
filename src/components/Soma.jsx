import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props => {
    const { min, max } = props
    return (
        <Card blue title="Soma de Números">
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{min+max}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma)