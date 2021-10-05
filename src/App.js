import React, { Component } from 'react';
import Car from './Car/Car'
import './App.css';

class App extends Component {
  state = {
    cars: [
      {name: 'Audi', year: '2016'},
      {name: 'Ford', year: '2019'},
      {name: 'Mazda', year: '2015'}
    ],
    pageTitle: 'This is CARS!',
    showCars: false
  }

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({cars});
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({cars});
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars : !this.state.showCars
    })
  }

  render() {
    const divStyle = {
      textAlign : 'center'
    }

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
            <Car
                key={index}
                name={car.name}
                year={car.year}
                onDelete={this.deleteHandler.bind(this, index)}
                onChangeName={(event) => this.onChangeName(event.target.value, index)}
            />
        )
      })
    }

    return (
      <div style={divStyle} >
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        <div style={{
          width: '400px',
          margin: 'auto',
          paddingTop: 20
        }}>

          { cars }
        </div>

      </div>
    );
  }
}

export default App;
