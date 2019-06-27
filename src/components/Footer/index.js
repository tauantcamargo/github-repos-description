import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Footer = ({ favoritesCount }) => <p>you have {favoritesCount} favorites!</p>;

Footer.propTypes = {
  favoritesCount: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
})

export default connect(mapStateToProps)(Footer);
