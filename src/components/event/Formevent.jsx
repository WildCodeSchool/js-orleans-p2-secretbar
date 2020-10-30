import React, { Component } from 'react';
import Popevent from './Popevent';

class Formevent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopevent: false,
            message:'Indiquez-nous vos souhaits pour cette soirée: ',

        };
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    }

   handleChangeMessage(e){
       this.setState({
           message: e.target.message,
       });
   }

    togglePopevent() {
        this.setState({
            showPopevent: !this.state.showPopevent
        });
    }



    render() {
        return (
            <section className="eventSection">
                            

                <div className="eventEvent">

                   
                        <img className="image" src="https://zupimages.net/up/20/44/emj7.png" alt="imgEvent" />
                    
                    
                    <div className="presentationEvent">

                        <h3 className="titleEvent">White Party</h3>
                        <p>26-11-2020</p>
                        <p className="descriptionEvent">Venez profiter de nos soirée à ambiance idyllique, à défaut de trop avoir consommé...   </p>
                        
                        <textarea type="text" id="message" cols="60" rows="6" placeholder={this.state.message} onChange={this.handleChangeMessage}/>
                        
                        <button type="buttonEvent" value="Réserver" className="buttonEvent" 
                            onClick={this.togglePopevent.bind(this)} > Réserver </button>

                        {this.state.showPopevent ? <Popevent
                            text='Votre réservation pour la "Soirée Blanche" est confirmée. Notre chauffeur viendra vous récupérer le 26/11/2020 à 19h30.'
                            closePopevent={this.togglePopevent.bind(this)}
                        /> : null}


                    </div>
                </div>
            </section>
        )
    }
}

export default Formevent;