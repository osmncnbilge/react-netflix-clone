import React from "react";
import jumboData from "./fixtures/jumbo.json";
import Jumbtron from "./components/jumbtron";

function App() {
  return (
    <Jumbtron.Container>
      {jumboData.map((item) => (
        <Jumbtron key={item.id} direction={item.direction}>
          <Jumbtron.Pane>
            <Jumbtron.Title> {item.title} </Jumbtron.Title>
            <Jumbtron.SubTitle> {item.subTitle} </Jumbtron.SubTitle>
          </Jumbtron.Pane>
          <Jumbtron.Pane>
            <Jumbtron.Image src={item.image} alt={item.alt} />
          </Jumbtron.Pane>
        </Jumbtron>
      ))}
    </Jumbtron.Container>
  );
}

export default App;
