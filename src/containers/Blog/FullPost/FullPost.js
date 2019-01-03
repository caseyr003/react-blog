import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        selectedPost: null
    }
    
    componentDidMount() {
        if (this.props.match.params.id) {
            if (!this.state.selectedPost || (this.state.selectedPost.id !== this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    this.setState({selectedPost: response.data});
                });
            }
        }
    }

    deletePostHandler = () => {
        axios.get('/posts/' + this.props.match.params.id)
        .then(response => {
            console.log(response);
        });
    }

    render () {
        let post = <p className="Center">Loading...</p>;
        
        if (this.state.selectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;