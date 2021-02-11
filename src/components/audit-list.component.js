import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Audit = props => (
    <tr>
        <td>{props.audit.username}</td>
        <td>{props.audit.image}</td>
        <td>{props.audit.notes}</td>
        <td>{props.audit.tags}</td>
        <td>{props.audit.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.audit._id}>edit</Link> |
            <a href="#" onClick={() => { props.deleteAudit(props.audit._id) }}>delete</a>
        </td>
    </tr>
)

export default class AuditList extends Component {
    constructor(props) {
        super(props);

        this.deleteAudit = this.deleteAudit.bind(this);

        this.state = { audits: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/audits')
            .then(response => {
                this.setState({ audits: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAudit(id) {
        axios.delete("http://localhost:5000/audits/" + id)
            .then(res => console.log(res.data));
        this.setState({
            audits: this.state.audits.filter(el => el._id !== id)
        })
    }

    auditList() {
        return this.state.audits.map(currentaudit => {
            return <Audit audit={currentaudit} deleteAudit={this.deleteAudit} key={currentaudit._id}/>;
        })
    }
    render() {
        return (
            <div>
                <h3>Audits</h3>
                <table className='table'>
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Image</th>
                            <th>Notes</th>
                            <th>Tags</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.auditList() }
                    </tbody>
                </table>
            </div>
        )
    }
}