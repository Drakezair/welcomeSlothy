import React, { Component} from 'react';


class Form extends Component {

   

    state={
        codeisvalid:false
    }

    render(){
        return(
        <form 
            onSubmit={(e)=>{
                this.props.submit(e);
                
            }}
        >
                <div className='left'>
                    <input type='text' required placeholder='Nombres' onChange={(e)=>this.props.change('nombres',e.target.value)}  />
                    <input type='email' required placeholder='Email' onChange={(e)=>this.props.change('email',e.target.value)} />
                    <input type='text' required className='small'  placeholder='País' onChange={(e)=>this.props.change('pais',e.target.value)} />
                </div>
                <div className='right'>
                    <input type='text' required placeholder='Apellidos' onChange={(e)=>this.props.change('apellidos',e.target.value)} />
                    <input type='number' required placeholder='Celular' onChange={(e)=>this.props.change('celular',e.target.value)} />
                    <input type='text' required className='small' placeholder='Ciudad' onChange={(e)=>this.props.change('ciudad',e.target.value)} />
                </div>
                <input type='submit' value='Enviar' className='enviar' />
            </form>
        )
    }
}

export default Form;