import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateAudit extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            image: '',
            notes: '',
            tags: '',
            date: new Date(),
            users: []
        }
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

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }
    onChangeNotes(e) {
        this.setState({
            notes: e.target.value
        });
    }
    onChangeTags(e) {
        this.setState({
            tags: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const audit = {
            username: this.state.username,
            image: this.state.image,
            notes: this.state.notes,
            tags: this.state.tags,
            date: this.state.date
        }

        console.log(audit);

        //link backend and frontend
        axios.post('http://localhost:5000/audits/add', audit)
            .then(res => console.log(res.data));
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Audit</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Image: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notes: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.notes}
                            onChange={this.onChangeNotes}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tags: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.tags}
                            onChange={this.onChangeTags}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Audit" className="btn btn-primary" />
                    </div>
                </form>
            </div> 
        )
    }
}