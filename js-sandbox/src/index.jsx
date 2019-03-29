import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './component/NavigationBar';
import Blog from './component/blog';
import SideBar from "./component/sidebar";


ReactDOM.render(
    <div>
        <Blog/>
        <SideBar/>
    </div>,

    document.getElementById('body')
);

    ReactDOM.render(
        <div>
            <NavBar/>
        </div>,

        document.getElementById('head')
    );

