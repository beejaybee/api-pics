import React, {Component} from 'react';

class SearchBar extends Component {
    
    state = {term: ''};

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    handleInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className ="ui segment">
                <form onSubmit={this.handleFormSubmit} className = "ui form">
                    <label>Image Search</label>
                    <input type = "text" 
                        value={this.state.term} 
                        onChange = {this.handleInputChange} 
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar