import React from "react";
import BigBlock from "../Components/PreviewPage/BigBlock";
import CardBlock from "../Components/PreviewPage/CardBlock";
import sqrt from '../Assets/PreviewPageSqrt.png';
import circleOk from '../Assets/CircleOk.png';
import school from '../Assets/School.png';

export default class TestPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let firstBlockHeading = "Стань другом с Математикой";
    let secondBlockHeading = "Для преподaвателей";
    let BlockText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
      "Nullam efficitur diam et urna venenatis, ac rutrum justo egestas.";

    let cardBlockHeading1 = "Закрой свои слабые места";
    let cardBlockText1 = "Lorem ipsum dolor sit amet. consectetur adipiscing elit.\n" +
      "Nullam efficitur diam et urna venenatis. ac rutrum justo egestas."

    return (
      <div>
        <BigBlock
          className="prev-page-big-block"
          heading={firstBlockHeading}
          text={BlockText}
          image={sqrt}
          imgAliginRight={true}
        />
        <div className="prev-page-card">
          <CardBlock
            className="prev-page-card-block"
            heading={cardBlockHeading1}
            text={cardBlockText1}
            image={circleOk}
          />
          <CardBlock
            className="prev-page-card-block"
            heading={cardBlockHeading1}
            text={cardBlockText1}
            image={circleOk}
          />
          <CardBlock
            className="prev-page-card-block"
            heading={cardBlockHeading1}
            text={cardBlockText1}
            image={circleOk}
          />
        </div>
        <BigBlock
          className="prev-page-big-block"
          heading={secondBlockHeading}
          text={BlockText}
          image={school}
          imgAliginRight={false}
        />
      </div>
    );
  }
}