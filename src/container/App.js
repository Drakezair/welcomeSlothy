import React,{ Component} from 'react';
import '../css/index.css';
import { Router,Route, Switch, Link} from 'react-router-dom';
import * as firebase from 'firebase';
import 'firebase/database';
import { createBrowserHistory } from "history";


import Form from '../component/Form';
import Code from '../component/Code';
import NoCode from '../component/noCode';


class App extends Component {
    history = createBrowserHistory();

    state={
        nombres: '',
        apellidos: '',
        email: '',
        celular: '',
        pais:'',
        ciudad:'',
        code: '',
        day: false,
        refData: null,
    }

    componentDidMount(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;



        this.setState({
            day: `${dd}-${mm}-${yyyy}`,
        })

        
    }
    
    handleForm(e){
        e.preventDefault();
        firebase.database().ref(`codigos/${this.state.day}`).once('value',(snapshot)=>{
            snapshot.forEach(code=>{
                if(!code.val()){
                    firebase.database().ref(`codigos/${this.state.day}/${code.key}`).set(true);
                    this.setState({code: code.key});
                    return true;
                }
            })
            this.history.push('/felicidades')
        })
        firebase.database().ref(`usuarios/${this.state.nombres}`).set({
            email: this.state.email,
            celular: this.state.celular,
            pais: this.state.pais,
            ciudad: this.state.ciudad,
        })
    }

    handleChange =(st, t) =>{
       this.setState({[st]: t})
       
    }


    render(){
        return(
            <div>
                <header>
                    <a href='#' ><h2>#SorpresaSlothy</h2></a>
                </header>
                <div className='contain' >
                    <img  src={require('../assets/Isotipo.png')} alt='Logo' className='Logo' />
                    <h1 className='slothy' >SLOTHY</h1>
                    <p className='digitalMarketing'>Digital Marketing </p>
                    <div className='description'>
                        <h2>Te queremos Regalar un 15% de Descuento en tu Plan de Marketing</h2>
                        <p>Inscribete y recibe un codigo promocional que te permitirá recibir un descuento del 15% en tu primera suscripción</p>
                    </div>
                    
                    <Router history={this.history} >
                        <Switch>
                            <Route exact path='/' ><Form submit={(e)=>{this.handleForm(e)}} change={(st,e)=>this.handleChange(st,e)} /></Route>
                            <Route path='/felicidades' ><Code code={this.state.code} his={this.history} /></Route>
                            <Route exact path='/gracias' component={NoCode} />
                        </Switch>
                    </Router>
                    
                    <p className='pie' >Recuerda, Son 50 Codigos Diarios</p>
                </div>
            </div>
        )
    }
}

export default App;