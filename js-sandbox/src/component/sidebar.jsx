import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const Sidebar = () => (
    <div>
        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
            Sidebar
        </Button>
        <UncontrolledCollapse toggler="#toggler">
            <div>
            <Button outline color="primary">lorem1</Button>{' '}
            <Button outline color="secondary">lorem2</Button>{' '}
            <Button outline color="success">lorem3</Button>{' '}
            <Button outline color="info">lorem4</Button>{' '}
            </div>
        </UncontrolledCollapse>
    </div>
);

export default Sidebar;
