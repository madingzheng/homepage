import React from 'react';
import { Menu, Row, Col } from 'antd';
import Layout from '../index.js'
import "../styles/style.css"

export default class extends React.Component{
    render() {

        return (
            <Layout lassName="layout">
                <Row>
                    <Col>
                        <Col span={6}>
                            <a href="#">
                                <img className= src="../static/0033neo-01.svg" alt="NEO"/>
                            </a>
                        </Col>
                        <Col span={18} >
                            <Menu
                                theme="light "
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="one">
                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                                </Menu.Item>
                                <Menu.Item key="two">
                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                                </Menu.Item>
                                <Menu.Item key="three">
                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                                </Menu.Item>
                                <Menu.Item key="four">
                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                                </Menu.Item>
                                <Menu.Item key="five">
                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Col>
                </Row>
            </Layout>
        );
    }
}