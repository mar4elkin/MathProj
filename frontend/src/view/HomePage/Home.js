import { Test } from "../../components/TestView/Test";
import HtmlBlockWrapper from "../../components/HtmlBlockWrapper/HtmlBlockWrapper";

export default function Home() {

  let generatedTestWrapper = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]

  return (
    <HtmlBlockWrapper
      title="Ежедневные задания"
      description="Обновление каждый день"
      containerClass="generated-tests"
    >
      {
        generatedTestWrapper.map((i) => {
          return (
            <Test  
              key={i}
              title="Тригонометрия"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua."
              level="Pro"
              timeRequired={10}
              xp={1000}
              isSolved={false}
            />
          )
        })
      }
    </HtmlBlockWrapper>
  );
}