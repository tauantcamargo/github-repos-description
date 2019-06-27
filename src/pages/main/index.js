import React, { Component } from 'react';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      error: PropTypes.string,
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      })),
    }).isRequired,
  }

  state = {
    repositoryInput: '',
  }

  handleAddRepository = async (e) => {
    const { repositoryInput } = this.state;

    e.preventDefault();

    this.props.addFavoriteRequest(repositoryInput);
    this.setState({ repositoryInput: '' })
  };

  handleRepositoryInput = (e) => {
    this.setState({ repositoryInput: e.target.value});
  }

  render() {
    const {
      props: {
        favorites,
      },
      state: {
        repositoryInput
      }
    } = this;

    console.log(favorites)
    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="user/repo"
            value={repositoryInput}
            onChange={this.handleRepositoryInput}
          />
          <button type="submit">Add</button>

          {favorites.loading && <span>Loading...</span>}

          {!!favorites.error && <span>{favorites.error}</span>}
        </form>

        <ul>
          {favorites.data.map(({
            id,
            name,
            description,
            url
          }) => (
            <li key={id}>
              <p>
                <strong>{name}</strong> ({description})
              </p>
              <a href={url} target="_blank" rel="noopener noreferrer">Acessar</a>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
