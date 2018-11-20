import React, { Component} from 'react';

class Code extends Component {

    componentWillMount() {
        if(this.props.code === '') {
            this.props.his.push('gracias');
        }
    }

    render(){
        return(
            <div>
                <h2 className='gracias'>Gracias por Registrate</h2>
                <div className='box' >
                    <h2 className='gracias' >{this.props.code}</h2>
                </div>
                <p className='piecode' >Este es el codigo que podrás registrar al momento de realizar tu suscripción</p>
            </div>
        )
    }
}

export default Code;