import React, { Component } from 'react'
import Mio from '../Prop/MioStage/Mio'
import './MioStage.css'

export class MioStage extends Component {
    render() {
        return (
            <div className="mio-stage">
                <Mio />
                Le* Banner
            </div>
        )
    }
}

export default MioStage
