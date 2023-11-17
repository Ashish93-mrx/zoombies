import React, {Component} from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import { robots } from "../robots";
import Scroll from "../components/Scroll";
import Errorboundry from "../components/Errorboundaries";


class App extends Component {
    constructor() {
        super();
        this.state={
            robots: [],
            searchfield: ''
        }

        //this.onSearchChange=this.onSearchChange.bind(this);
        console.log(1);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
        //this.setState({robots: robots});
       // console.log(2);
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
    }


    render(){
        const { robots, searchfield } = this.state;
        console.log(3);
        const zoombie= robots.filter(robot => {  
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })

    return robots.length ? (
        <div className="tc">
        <h1>Zoombies</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll >
        <Errorboundry>
        <Cardlist robots={zoombie} />
        </Errorboundry>
        </Scroll>
        </div>
    )
    :( <h1>LOADING</h1>)
}
}

export default App;