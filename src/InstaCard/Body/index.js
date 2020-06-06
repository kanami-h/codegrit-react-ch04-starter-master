import React from 'react';
import PropTypes from 'prop-types';
import BodyMain from './Main';
import imageOne from '../../images/image-one.jpg';
import imageTwo from '../../images/image-two.jpg';

const Body = ({ theme, chosenId, data }) => {
  console.log(chosenId)
  return(
  // ↑ chosenId と dataが抜けてます。const Body = ({ props }) => {return(JSX);}; の形式になっているかも見直しましょう
  // 画像データも、今は上記の画像１を手動で読み込ませていますので、「その時取得された画像データ」を当てはめてあげる必要があります
  // returnでJSXを書く前の範囲で、console.log(chosenId); と検証してみてください。選択されたカードのidがコンソールに出ると思います
  <section className="card-body">
    <div className="card-image">
      <img alt="メイン画像" src={imageOne || imageTwo} />
    </div>
    <BodyMain 
      theme={theme}
      chosenId={chosenId}
      data={data}
      />
  </section>
)}

Comment.propTypes = {
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default Body;