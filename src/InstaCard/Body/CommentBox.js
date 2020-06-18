import React, { Component } from 'react';

export default class extends Component {
  state = {
    comment: "実はコメントを書いているところです。"
  }
  componentDidUpdate(prevProps) {
    // chosenIdが変わったらコメントを空にしましょう。
    if(this.props.chosenId !== prevProps.choosenId) {
      this.fetchData(this.props.choosenId)
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