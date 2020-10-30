import React from 'react';
import SectionTitle from '../section-title/SectionTitle';
import Popevent from './Popevent';
import './Popevent.css';

class Formevent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopevent: false,
      message: 'Indiquez-nous vos souhaits (cocktail, prestation,...)',
    };
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeMessage(e) {
    this.setState({
      message: e.target.message,
    });
  }

  togglePopevent() {
    this.setState({
      showPopevent: !this.state.showPopevent,
    });
  }

  render() {
    return (
      <section className="eventSection">
        <SectionTitle title="Evenement" color="white" />
        <div className="eventEvent">
          <img
            className="image"
            src="https://zupimages.net/up/20/44/emj7.png"
            alt="imgEvent"
          />

          <div className="presentationEvent">
            <h3 className="titleEvent">White Party</h3>
            <p className="descriptionEvent">
              Tenue chic et blanche exigée, de nombreuses surprises et des
              cocktails exclusifs vous attendent le DATE{' '}
            </p>

            <textarea
              type="text"
              id="message"
              cols="56"
              rows="8"
              placeholder={this.state.message}
              onChange={this.handleChangeMessage}
            />

            <button
              type="buttonEvent"
              value="Réserver"
              className="buttonEvent"
              onClick={this.togglePopevent.bind(this)}
            >
              {' '}
              Réserver{' '}
            </button>

            {this.state.showPopevent ? (
              <Popevent
                text='Votre réservation pour la "Soirée Blanche" est confirmée. Notre chauffeur viendra vous récupérer le 26/11/2020 à 19h30.'
                closePopevent={this.togglePopevent.bind(this)}
              />
            ) : null}
          </div>
        </div>
      </section>
    );
  }
}

export default Formevent;
