import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        selectedPost: null
    }
    
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.selectedPost || (this.state.selectedPost.id !== this.props.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    this.setState({selectedPost: response.data});
                });
            }
        }
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if (this.props.id) {
            post = <p>Loading...</p>;
        }
        if (this.state.selectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;