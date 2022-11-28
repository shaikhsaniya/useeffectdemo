import "./App.css";
import { useEffect, useState } from "react";

// That's with no harm to your application in a case like below where you don't mutate a state inside the callback, it will just log "Hello Word" every time there is a render.
// function App() {
//   const [state, setState] = useState(true);
//   useEffect(() => {
//     console.log("Hello");
//   });

//   return( <div>
//     <button onClick={()=>setState(!state)}>Toggle state</button>
//   </div>);
// }

// export default App;

// It will cause an infinite loop of renders in cases like below where you mutate a state inside the callback. That's because a state change triggers a render, and the callback gets executed on every render.
// function App() {
//   const [state, setState] = useState(true);
//   useEffect(() => {
//    setState(!state);
//   });

//   return( <div>
//     <button onClick={()=>setState(!state)}>Toggle state</button>
//   </div>);
// }

// export default App;

// And to cover all the use cases, there is the one with an empty dependencies array as the second argument, where the callback gets executed only on the first render:

// function App() {
//   const [state, setState] = useState(true);
//   useEffect(() => {
//    setState(!state);
//   },[]);

//   return( <div>
//     <button onClick={()=>setState(!state)}>Toggle state</button>
//   </div>);
// }

// export default App;

// And finally, the one that calls the callback on the first render and every time some state in the dependencies array changes:
function App() {
  const [state, setState] = useState(true);
  useEffect(() => {
    console.log("Hello");
    //  setState(!state);  if you mutate state here, it will cause an infinite loop of renders
  }, [state]);

  return (
    <div>
      <button onClick={() => setState(!state)}>Toggle state</button>
    </div>
  );
}

export default App;
