import React from 'react'; 
import './Time.css';

class Time extends React.Component {
    state = {time: new Date().toLocaleTimeString()}
    
    componentDidMount(){
            setInterval(() => {
                this.updateTime()
            }, 1000);
        }
    updateTime() {
        this.setState({time: new Date().toLocaleTimeString()})
    }    
    render() {
    return(
        <div className="color">
            {this.state.time}
        </div>);
    }
}

export default Time;