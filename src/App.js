import './App.css';
import Feed from './conponent/feed/Feed';
import Sidebar from './conponent/sidebar/Sidebar';
import Widgets from './conponent/widgets/Widgets';

function App() {
  return (
    <div className='app'>
      {/* Sidebar  */}
      <Sidebar />

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
