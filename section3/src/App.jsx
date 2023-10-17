import Section3 from "./Section3"
import { Router } from 'react-router-dom';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Section3 />
    </Router>
  )
}

export default App