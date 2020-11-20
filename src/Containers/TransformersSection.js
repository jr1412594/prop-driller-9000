import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {
displayTransformers = () => {
  return this.props.proptimusii.map(proptimus => {
    return <Transformer 
    key={proptimus.id} 
    url={proptimus.url} 
    name={proptimus.name}
    />
    }
  )
}

  render() {
    return (
      <section className = "transformers-section">
        {this.displayTransformers()}
      </section>
    );
  }
}

export default TransformersSection;
