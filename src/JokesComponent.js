import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './jokes';
import styled from 'styled-components';
import Filters from './Filters';

const Content=styled.div`
  display: flex;
  flex-direction: row;
`;

const JokeList = styled.div`
  padding: 2rem;
  background-color: lightgray;
  width: 50%;
  height: 100%;
`;

const Joke = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 2rem 1rem;
  background-color: white;
  border: 1px solid darkgray;

  &:hover {
    background-color:forestgreen;
    color: white;
  }
`;

export class JokesComponent extends Component {
  componentDidMount(){
    const { limit, page, search, filters: { term } } = this.props;
    search(term, page, limit);
  }

  componentWillReceiveProps(nextProps){
    const { limit, page, search, filters: { term } } = nextProps;
    if(page !== this.props.page || term !== this.props.filters.term){
      search(term, page, limit);
    }
  }

  render(){
    const { results } = this.props;

    return (
      <Content>
        <JokeList>
          {results.map(j => (
            <Joke key={j.id}>
              {j.joke}
            </Joke>
          ))}
        </JokeList>
        <Filters />
      </Content>
    );
  }
}


// passing actions which will ensure the search function is injected as a component props
export default connect( state => state.jokes , actions )(JokesComponent);
