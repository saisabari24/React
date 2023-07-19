import "./App.css";
import { Footer } from "./learning/Footer";
import Heading from "./learning/Heading";
// import Button from "./learning/hooks/Button";
// import DataLoader from "./learning/hooks/DataLoader";
// import RefDemo from "./learning/hooks/RefDemo";
// import TestUseFetch from "./learning/hooks/TestUseFetch";
// import Dataflow from "./learning/intercomp/Dataflow";
// import CompLifeCycle from "./learning/lifecycle/CompLifeCycle";
// import Weather from "./learning/lifecycle/Weather";
// import StatefulApp from "./learning/statemngt/StatefulApp";
// import TextInput from "./learning/statemngt/TextInput";
import SpaApp from "./spa/SpaApp";
//stateless functional component - SFC  - No state
function App() {
  return (
    <div className="App">
      <Heading company="Bank of America" city="Mumbai" />

      <section className="container">
        {/* <StatefulApp />
        <TextInput /> */}
        {/* <Dataflow /> */}
        {/* <CompLifeCycle /> */}
        {/* <Weather /> */}
        {/* <Button />
        <DataLoader /> */}
        {/* <RefDemo /> */}
        {/* <TestUseFetch /> */}
        <SpaApp />
      </section>

      <Footer />
    </div>
  );
}

export default App;

//props={company:'Bank of America',city:'Mumbai'}    //props   json
