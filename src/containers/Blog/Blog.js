import React, { Component } from 'react';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                    to="/posts"  
                                    activeClassName="main-active"
                                    activeStyle={{
                                        fontWeight: 'bold'
                                    }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/posts" component={Posts} />
                    {this.state.auth && <Route path="/new-post" exact component={NewPost} />}
                    <Route render={() => <h1>404 Error</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;