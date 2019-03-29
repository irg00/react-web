import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class SideBar extends React.Component {
    render() {
        return (
            <div md="3" style={{align:"right"}}>
                <p>List</p>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">Article 1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Article 2</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Article 3</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Article 4</NavLink>
                    </NavItem>
                </Nav>
                <hr />
            </div>
        );
    }
}

export default SideBar;
