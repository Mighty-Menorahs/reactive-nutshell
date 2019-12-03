import React, { Component } from 'react'
    //import the components we will need
    import EventCard from './EventCard'
    import EventsManager from '../../modules/EventsManager'
    import '../event/Event.css';

    class EventList extends Component {
        //define what this component needs to render
        state = {
            events: [],
        }

    componentDidMount(){
        console.log("Event LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animalsArray) => {
            this.setState({
                animals: animalsArray
            })
        })
    }
    
    deleteAnimal = id => {
      AnimalManager.delete(id)
      .then(() => {
        AnimalManager.getAll()
        .then((newAnimals) => {
          this.setState({
              animals: newAnimals
          })
        })
      })
    }

    render() {
        console.log("AnimalList: Render");
        console.log(this.state.animals)
        
        return(
          <React.Fragment>
            <section className="section-content">
              <button type="button" className="btn"
              onClick={() => {this.props.history.push("/animals/new")}}>
              Admit Animal
          </button>
            </section>
          <div className="container-cards">
            {this.state.animals.map((animal) =>
              <AnimalCard 
              key={animal.id} 
              animal={animal} 
              deleteAnimal={this.deleteAnimal}
              {...this.props}
              />
              )}
          </div>
        </React.Fragment>
        )
      }
    //   This is the old way of doing this from the first or second exercise use this as a reference for the now working code in how it needed to change.
    // render(){
    //     console.log("ANIMAL LIST: Render");

    //     return(
    //         <div className="container-cards">
    //             {this.state.animals.map(animal => <AnimalCard />)}
    //         </div>
    //     )
    // }
    }

export default AnimalList;