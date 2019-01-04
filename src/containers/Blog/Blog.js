import React, { Component } from 'react';
import Posts from './Posts/Posts';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

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
                    {this.state.auth && <Route path="/new-post" exact component={AsyncNewPost} />}
                    <Route render={() => <h1>404 Error</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;