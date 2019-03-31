import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './component/NavigationBar';
import Blog from './component/blog';
import Sidebar from "./component/sidebar";


ReactDOM.render(
        <container className="col-md-12">
            <div className="col-md-3 float-right">
            <Sidebar/>
            </div>
            <div className="col-md-9">
            <Blog/>
            </div>
        </container>,


document.getElementById('body')
);

ReactDOM.render(
        <div>
            <NavBar/>
        </div>,

        document.getElementById('head')
);

