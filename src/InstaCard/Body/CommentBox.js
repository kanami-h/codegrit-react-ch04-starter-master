import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  state = {
    comment: "実はコメントを書いているところです。"
  }
  componentDidUpdate(prevProps) {
    // chosenIdが変わったらコメントを空にしましょう。
    console.log(prevProps);
    console.log(this.props);
    if(this.props.chosenId !== prevProps.choosenId) {
      this.setState({
        comment: " "
      })
    }
  }

  render() {
    const { comment } = this.state;
    return (
      <section className="comment-box">
        <div className="comment-area">{comment === '' ? "コメントする" : comment}</div>
      </section>
    );
  }
}

Component.propTypes = {
  comment: PropTypes.string.isRequired,
  chosenId: PropTypes.number.isRequired,
}

Component.defaultProps = {
  comment: "実はコメントを書いているところです"
}