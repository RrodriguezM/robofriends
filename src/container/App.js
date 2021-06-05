import React, { Component } from 'react'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state
        const filterRobots = robots.filter(robo => {
            return robo.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            (<h1>Loading</h1>)
            :
            (
                <div className="tc">
                    <h1 className="f-5">RoboFriends</h1>
                    <SearchBox onChangeEvent={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;
