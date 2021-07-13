import './App.css';
import { Component } from 'react';
import CardLists from './components/card-list/card-list-components';
import './Styles/styles.css';
import SearchContact from './components/search/search-contact';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Customer: [],
      SearchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => (response.json()))
      .then(users => this.setState({ Customer: users }))
  }
  render() {
    const {Customer,SearchField}=this.state;
   const filteredCustomer=Customer.filter(Customer=>Customer.name.toLowerCase().includes(SearchField.toLowerCase()))
    return (
      <div /* className="App" */>
        <header className="App">
          <h1>Contacts</h1>
        </header>
          <SearchContact 
            placeHolder="Search Contact"
            handleChange={e => this.setState({SearchField:e.target.value})}/>
          <section>
            <CardLists customer={filteredCustomer}>

            </CardLists>

          </section>
      </div>
        );
  }
}

        export default App;

