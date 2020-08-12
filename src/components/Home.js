import React from 'react';
import Photos from './Photos';
import './Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            search: '',
            tag: undefined
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            search: '',
            tag: this.state.search
        })
    }

    searchChange = (e) => this.setState({search: e.target.value})

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Pesquisar' value={this.state.search} onChange={this.searchChange} />
                    <input type='submit' value='Ok' />
                </form>

                {this.state.tag && <Photos tag={this.state.tag}/>}
            </>
        );
    }
}

export default Home;