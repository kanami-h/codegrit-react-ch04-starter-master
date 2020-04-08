import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';
import CardSwitcher from './CardSwitcher';
import { fetchData } from '../CardDataUtils';
import { ReactComponent as LoadingImage } from '../images/loading.svg';

// EmptyBoxコンポーネントを実装してローディングイメージを中心に表示しましょう。
const EmptyBox = () => {
  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "614px",
    height: "614px",
    border: "1px solid #e6e6e6",
    borderRadius: "5px"
  }
  return (
    <article className="insta-card">
      <div style={loadingStyle}>
        <LoadingImage />
      </div>
    </article>
  );
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
    let articlePart;
    if(isLoading === false){
      articlePart = (
        <article className={instaCardClass}>
          <Header 
            theme={theme}
            data={data}
            chosenId={chosenId}
          />
          <Body 
            theme={theme}
            data={data}
            chosenId={chosenId}
            />
        </article>
        );
    } else {
      articlePart = <EmptyBox />
    }
    return (
      <div className="card-wrapper">
        <div style={{ marginBottom: 7 }}>
          <p>- テーマを選択してください。</p>
          <ThemeSwitcher 
            theme={theme}
            switchTheme={this.onSwitchTheme} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <p>- 表示するカードを選択してください。</p>
          <CardSwitcher 
            chosenId={chosenId}
            switchCard={this.onSwitchCard} 
            />
        </div>
        {articlePart}
      </div>
    );
  }
}