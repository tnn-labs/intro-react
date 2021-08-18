# class-vs-function

## Componente de classe

### Estrutura inicial
```js
import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
	  return (
      <button
        style={{ backgroundColor: 'red' }}
      >
        likes | 0
      </button>
    );
  };
}

export default ClassComponent;
```

### Trabalhando com props
```js
render() {
  const { bg } = this.props;

  return (
    <button
      style={{ backgroundColor: bg }}
    >
      likes | 0
    </button>
  );
};
```
### Estado
```js
class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 50
    }
  }

  render() {
    const { likes } = this.state;

    return (
      <button>
        likes | {likes}
      </button>
    );
  };
}
```
### Manipulações com funções
```js
class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 50
    }

    this.addLike = this.addLike.bind(this);
  }

  addLike() {
    this.setState(state => ({
      likes: state.likes + 1
    }));
  };

  render() {
    const { bg } = this.props;
    const { likes } = this.state;

    return (
      <button
        style={{ backgroundColor: bg }}
        onClick={this.addLike}
      >
        likes | {likes}
      </button>
    );
  };
}
```
### Ciclo de vida
```js
componentDidMount() {
  document.title = `Eu tenho ${this.state.likes} likes`;
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.likes !== this.state.likes) {
    document.title = `Eu tenho ${this.state.likes} likes`;
  }
}
```

## Componente de função

### Estrutura inicial
```js
import React from 'react';

const FunctionComponent = () => {
  return (
    <button
      style={{ backgroundColor: 'red' }}
    >
      likes | 10
    </button>
  );
}

export default FunctionComponent;
```

### Trabalhando com props
```js
const FunctionComponent = ({ bg }) => {
  return (
    <button
      style={{ backgroundColor: bg }}
    >
      likes | 10
    </button>
  );
}
```

### Estado
```js
import React, { useState } from 'react';

const FunctionComponent = ({ bg }) => {
  const [likes, setLikes] = useState(15);

  return (
    <button
      style={{ backgroundColor: bg }}
    >
      likes | {likes}
    </button>
  );
}

export default FunctionComponent;
```

### Manipulações com funções
```js
import React, { useState } from 'react';

const FunctionComponent = ({ bg }) => {
  const [likes, setLikes] = useState(15);

  const addLike = () => setLikes(likes + 1);

  return (
    <button
      style={{ backgroundColor: bg }}
      onClick={addLike}
    >
      likes | {likes}
    </button>
  );
}

export default FunctionComponent;
```

### Ciclo de vida
```js
import { useEffect } from 'react';

  useEffect(() => {
    document.title = `Eu tenho ${likes} likes`;
  }, [likes]);
```

## Artigos
- [React sem ES6](https://pt-br.reactjs.org/docs/react-without-es6.html)
- [Componentes e Props](https://pt-br.reactjs.org/docs/components-and-props.html)
- [Como os componentes de função são diferentes de componentes de classe?](https://overreacted.io/pt-br/how-are-function-components-different-from-classes/)
- [React hoje e amanhã. O que muda com os Hooks?](https://www.devmedia.com.br/react-hoje-e-amanha-o-que-muda-com-os-hooks/40314)
- [Por Que Nós Escrevemos super(props)?](https://overreacted.io/pt-br/why-do-we-write-super-props/)
