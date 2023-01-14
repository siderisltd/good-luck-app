import React from 'react';
import { withRouter } from "react-router";
import axios from 'axios';



class GoodLuckComponent extends React.Component {
  componentDidMount() {
    this.defaultLanguage = 'en';

    this.backgroundId = this.props.match.params.backgroundId || 1;
    this.language = this.props.match.params.language || this.defaultLanguage;
    this.quote = this.getDailyQuote(this.language, this.backgroundId, this.props.match.params.qr);

    this.setState({
      quote: this.quote
    });
  }

  constructor() {
    super();
    this.state = {
      quote: ''
    }
  }

  getDailyQuote(language, backgroundId, qr) {
    let quote = '';

    if (language && qr) {
      quote = this.getQuote(language, qr);
      if (!quote) {
        quote = this.getRandomQuote(language);
      }
    } else {
      if (!language) {
        axios.get('https://ipapi.co/json/').then((response) => {
          let data = response.data;
          language = data?.country_code;
        }).catch((error) => {
          console.log(error);
          language = this.defaultLanguage;
        }).finally(() => {
          quote = this.getRandomQuote(language);
        });
      } else {
        quote = this.getRandomQuote(language);
      }
    }

    return quote;
  }

  getRandomQuote(language) {
    let localQuotes = QuotesCache[`${language.toLowerCase()}`];
    let quote = '';

    if (!localQuotes || localQuotes.length <= 0) {
      console.log(`Unsupported language. Falling back to: ${this.defaultLanguage}`);
      localQuotes = QuotesCache[`${this.defaultLanguage.toLowerCase()}`];
    }

    quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    if (!quote) {
      throw "The random quote is empty";
    }

    return quote;
  }

  getQuote(language, qr) {
    let quote = QuotesCache[`${language.toLowerCase()}`].find(i => i.id == qr)

    if (!quote) {
      console.log('Falling to random quote');
      quote = this.getRandomQuote(language);
    }

    return quote;
  }

  render() {
    if (!this.state.quote) {
      return null;
    }

    return <div>
      <h1>Quote: {this.quote.text} | Background: {this.backgroundId}</h1>
    </div>
  }
}

export default GoodLuckComponent;

var QuotesCache = {
  "bg": [{
    id: 'eeb3bb971d7c41e08684c358b93b0a32',
    text: `Пропускаш 100% от възможностите, които не предприемаш
    - Уейн Грецки`
  },
  {
    id: '9b45a7d2655d408bbe2ec65b8ddee51f',
    text: `Ако не правиш грешки, значи не се опитваш истински`
  },
  {
    id: '4d14241d423e43d3a3a3249323374981',
    text: `Силата не идва от физическия капацитет. Тя идва от неукротимата воля
    - Махамата Ганди`
  }],
  "en": [
    {
      id: 'bc24118dd31348eea8f9628a2ba8972e',
      text: `If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles. – Wayne Dyer`
    },
    {
      id: 'df388df97f5a4b4281cfc9743decb91a',
      text: `Keep your eyes on the stars, and your feet on the ground. – Theodore Roosevelt`
    }
  ],
  "gr": [

  ]
}