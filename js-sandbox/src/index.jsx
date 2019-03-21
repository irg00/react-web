import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './component/NavigationBar'
import Blog from './component/blog'

ReactDOM.render(
    <div>
        <NavBar/>
    </div>,

    <div>
        <Blog/>
    </div>,
    document.getElementById('root')
);
