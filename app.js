class FruitBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fruitsToShow: [] };
    this.allFruits = [];
    this.filterFruits = this.filterFruits.bind(this);
  }

  componentDidMount() {
    const url =
      "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits";

    fetch(url)
      .then(response => response.json())
      .then(initialFruits => {
        initialFruits.map(fruit => this.allFruits.push(fruit));
        this.setState(state => ({
          fruitsToShow: (state.fruitsToShow = initialFruits)
        }));
      });
    // console.log("I'm mounted.");
    // console.log(this.state);
    // console.log(this.allFruits);
  }

  filterFruits(event) {
    let filteredFruits = this.allFruits.filter(fruit => {
      return fruit.type.includes(event.target.value);
    });

    this.setState({ fruitsToShow: filteredFruits });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onChange={this.filterFruits} />
        <FilteredFruitDisplay fruitsToShow={this.state.fruitsToShow} />
      </React.Fragment>
    );
  }
}

function SearchBar(props) {
  return <input type="text" onChange={props.onChange} />;
}

function FilteredFruitDisplay(props) {
  const fruitsToShow = props.fruitsToShow.map(fruit => {
    return (
      <li key={fruit.id.toString()}>
        {fruit.emoji} {fruit.type}
      </li>
    );
  });
  return <ul>{fruitsToShow}</ul>;
}

const App1 = () => {
  return (
    <React.Fragment>
      <FruitBasket />
    </React.Fragment>
  );
};

const container = document.querySelector("#app");
const element = <App1 />;
ReactDOM.render(element, container);
