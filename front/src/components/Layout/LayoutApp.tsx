/** @format */

import React from 'react';
// Removed the import statement for withRouter
import { Row, Col } from 'antd';
import NavBar from '../NavBar/NavBar';


interface LayoutAppProps {
    children: React.ReactNode;
}

function LayoutApp(props: LayoutAppProps) {
    return (
        <Row justify="center" style={{ marginTop: '0' }}>
            <Col span={24}>
                <Row justify="center">
                    <Col span={5}>
                        <NavBar />
                    </Col>
                     <Col span={19}>{props.children}</Col>
                </Row>
            </Col>
        </Row>
    );
}
export default LayoutApp;
