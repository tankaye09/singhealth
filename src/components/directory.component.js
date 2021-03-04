import React, { Component, View } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Table, Tag, Space } from 'antd';
import { getData } from '../data/StoreData.ts';


export default class Directory extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() { //code runs before the page loads
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username //set username as the first username in the database
                    })
                }
            })
    }

    render() {
        return (

            <div class='table'>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => 'CGH'}
                    size="middle"
                    pagination={{ position: 'bottomLeft' }}
                />
            </div>
        )
    }

}

const columns = [
    {
        title: 'Store Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Terms',
        dataIndex: 'terms',
        key: 'terms',
    },
    {
        title: 'Expiry',
        dataIndex: 'expiry',
        key: 'expiry',
    },
];

const data = getData("");



