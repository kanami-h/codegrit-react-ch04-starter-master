import React from 'react';
import PropTypes from 'prop-types';
import BodyMain from './Main';
import cardDataOne from '../../CardDataUtils';
import cardDataTwo from '../../CardDataUtils';

const Body = ({ theme, chosenId, data }) => {
  console.log(chosenId)
  const { imageUrl } = data;
  return(
  // ↑ chosenId と dataが抜けてます。const Body = ({ props }) => {return(JSX);}; の形式になっているかも見直しましょう
  // 画像データも、今は上記の画像１を手動で読み込ませていますので、「その時取得された画像データ」を当てはめてあげる必要があります
  // returnでJSXを書く前の範囲で、console.log(chosenId); と検証してみてください。選択されたカードのidがコンソールに出ると思います
  <section className="card-body">
    <div className="card-image">
      <img alt="メイン画像" src={data} />
    </div>
    <BodyMain 
      theme={theme}
      chosenId={chosenId}
      data={data}
      />
  </section>
)}

Comment.propTypes = {// ここも以下のdefaultPropsに応じて追加が必要そうですね
  theme: PropTypes.string.isRequired,
  chosenId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.isRequired,
  loadedOnce: PropTypes.array.isRequired
}

Comment.defaultProps = {// デフォルトの画像指定もしておいた方が良さそうですね
  theme: "light",
  chosenId: 1,
  isLoading: true,
  data: null,
  loadedOnce: false
}

export default Body;