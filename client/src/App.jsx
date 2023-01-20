import { useState } from "react";
import "./App.scss";

import JoinRoom from "./pages/Join-room/Join-room.component";

function App() {
  const [count, setCount] = useState(0);

  return <JoinRoom />;
}

export default App;
