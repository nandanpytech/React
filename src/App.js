import Greet from './components/Greet';
import Welcome from './components/Welcome'
import State  from './components/State';
import Setstate from './components/Setstate';
import Destruction from './components/Destructing'
import Event from './components/Event';
import Parentprop from './components/Parentprop';
import Ifapproach from './components/Ifapproach';
import ListRender from './components/ListRender';
import Style from './components/Style';
import Form from './components/Form';
import Fragmentdemo from './components/Fragmentdemo';
import Parentmemo from './components/Parentmemo';
import Portaldemo from './components/Portaldemo';
import Hero from './components/Error/Hero';
import Errorboundary from './components/Error/Errorboundary';
import Counter from './components/Renderprop.js/Counter';
import ClickCounter from './components/Renderprop.js/ClickCounter';
function App() {
  return (
    <div className="App">
      <Counter render={(count,incrementCount)=>(
        <ClickCounter count={count} incrementCount={incrementCount}></ClickCounter>
      )}></Counter>


      {/* <Errorboundary>
      <Hero heroname="Batman"></Hero>
      </Errorboundary>
      <Errorboundary>
      <Hero heroname="Joker"></Hero>
      </Errorboundary> */}
     
      {/* <Hero heroname="Joker"></Hero> */}
      {/* <Portaldemo></Portaldemo> */}
      {/* <Parentmemo></Parentmemo> */}
      {/* <Fragmentdemo></Fragmentdemo> */}
      {/* <Form></Form> */}
      {/* <Greet></Greet> */}
      {/* <Style></Style> */}
      {/* <ListRender></ListRender> */}
      {/* <Ifapproach></Ifapproach> */}
      {/* <Parentprop></Parentprop> */}
      {/* <Event/> */}
      {/* <Destruction name="rajesh"></Destruction> */}
      {/* <Setstate></Setstate> */}
      {/* <State></State> */}
      {/* <Greet name="Nandan">
        <button>clickme</button>
      </Greet>
      <Greet name="Amith"></Greet>
      <Greet name="Naveen"></Greet>
      <Welcome name="Amithsulakhe"></Welcome> */}
    </div>
  );
}

export default App;
