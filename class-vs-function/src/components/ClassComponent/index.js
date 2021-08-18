import { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    }

    this.addLike = this.addLike.bind(this);
  }

  componentDidMount() {
    document.title = `Eu tenho ${this.state.likes} likes`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.likes !== this.state.likes) {
      document.title = `Eu tenho ${this.state.likes} likes`;
    }
  }

  addLike() {
    this.setState(state => ({
      likes: state.likes + 1
    }));
  };

  render() {
    const { bg } = this.props; 
	  return <button style={{ backgroundColor: bg }} onClick={this.addLike}>likes | {this.state.likes}</button>
  };
}

export default ClassComponent;