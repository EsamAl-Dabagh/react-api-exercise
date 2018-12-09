import React, { Component } from "react";
import Select from "react-select";

class SourceForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sources: []
    }
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/sources?language=en&apiKey=${process.env.REACT_APP_API_NEWSAPI_KEY}`

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          sources: data.sources
        })
      })
      .catch((error) => console.log(error))
  }

  formOptions() {
    let options = []
    
    this.state.sources.forEach((source) => {
      options.push({ value: source.id, label: source.name });
    });

    return options
  }



  render() {
    return (
      <Select options={this.formOptions()} />
    )
  }
}

export default SourceForm;