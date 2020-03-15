import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';
import CardSwitcher from './CardSwitcher';
import { fetchData } from '../CardDataUtils';

// EmptyBoxコンポーネントを実装してローディングイメージを中心に表示しましょう。
const EmptyBox = () => {
  
}

export default class extends Component {
  state = {
    theme: 'light',
    chosenId: 1,
    isLoading: true,
    data: null
  }

  componentDidMount() {
    // データを取得してstateに反映します。
    fetchData().then((data) => {
      this.setState({
        isLoading: false,
        data
      })
    })
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  onSwitchCard = (id, e = null) => {
    if (e) e.preventDefault();
    // 与えられたidをもとに必要ならデータを再取得します。
    this.setState({ id })
  }

  render() {
    const { 
      theme, 
      chosenId,
      isLoading,
      data
    } = this.state;
    let instaCardClass = "insta-card";
    if (theme === 'dark') {
      instaCardClass = "insta-card insta-card-dark"
    }
    let articlePart = (
      <article className={instaCardClass}>
        <Header 
          theme={theme}
          data={data}
        />
        <Body 
          theme={theme}
          isLoading={isLoading}
          data={data}
          />
      </article>
    );
    return (
      <div className="card-wrapper">
        <div style={{ marginBottom: 7 }}>
          <p>- テーマを選択してください。</p>
          <ThemeSwitcher 
            theme={theme}
            data={data}
            switchTheme={this.onSwitchTheme} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <p>- 表示するカードを選択してください。</p>
          <CardSwitcher 
            chosenId={chosenId}
            data={data}
            switchCard={this.onSwitchCard} 
            />
        </div>
        {articlePart}
      </div>
    );
  }
}

