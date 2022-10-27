import React from 'react';

// Kanye class component

class Kanye extends React.Component {
  constructor(props) {
    super(props);

    this.state = { quote : '' , images: [] };
  };

  async fetchQuote() {
    console.log('fetchQuote');
    try {
      const res = await fetch("https://api.kanye.rest");
      const data = await res.json();
      console.log(data);
      this.setState( { quote: data.quote });
    } catch (error) {
      console.error(`error ${error} fetching quote`);
    }
  }

  componentDidMount() {
    const URL = `https://picsum.photos/${this.props.picSize}`;
    this.fetchQuote();
    this.setState( { images: [URL, URL, URL]});
  }

  render() {
    return (
      <div className='container p-5 d-flex flex-column align-items-center'>
        <h4 className='mx-auto'>{this.state.quote}</h4>
        {
          this.state.images.map((imgURL, idx) => <img key={idx} src={imgURL} />)
        }
      </div>

    )
  };
}

export { Kanye };