import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from "./jokes";
import { Form, Row, Input, Button } from './styles';

export class Search extends Component {

    state = {
        query: ''//this.props.filters.term
    };
    // this.props.filters.term

    onChange = e =>
    {
      this.setState({ query: e.target.value });
    };

    submit = e => {
        e.preventDefault();
        this.props.setFilter('term', this.state.query);
    };

    render(){
        return (
            <Form onSubmit={this.submit}>
                <Input value={this.state.query} onChange={this.onChange}/>
                <Row>
                    <Button type="submit">Search</Button>
                </Row>
            </Form>
        );
    }
}

// connect to the redux store and get the state that we need as well as the action creators
export default connect( state => state.jokes , actions )(Search);
