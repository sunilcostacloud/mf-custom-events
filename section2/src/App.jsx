import Section2 from "./Section2"
import { Router } from 'react-router-dom';

const App = ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Section2 />
      </Router>
    </div>
  )
}

export default App