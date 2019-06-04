class FruitBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: this.props.fruits };
    this.filterFruits = this.filterFruits.bind(this);
  }

  filterFruits(event) {
    let filterResult = this.props.fruits.filter(fruit => {
      return fruit.includes(event.target.value);
    });

    this.setState({ result: filterResult });
  }

  render() {
    return (
      <React.Fragment>
        <FruitFilter onChange={this.filterFruits} />
        <Basket fruits={this.state.result} />;
      </React.Fragment>
    );
  }
}

function Basket(props) {
  const fruitItems = props.fruits.map((fruit, index) => {
    return <li key={index.toString()}>{fruit}</li>;
  });
  return <ul>{fruitItems}</ul>;
}

function FruitFilter(props) {
  return <input type="text" onChange={props.onChange} />;
}

function App1() {
  const initialFruits = [
    "apple",
    "orange",
    "banana",
    "pear",
    "pineapple",
    "durian"
  ];
  return (
    <React.Fragment>
      <FruitBasket fruits={initialFruits} />>
    </React.Fragment>
  );
}

const container = document.getElementById("app");
const element = <App1 />;
ReactDOM.render(element, container);
