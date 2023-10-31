import logo from './logo.svg';
import '../src/style/style.css';
import Sidebar from './component/Sidebar';
import MainArea from './component/MainArea';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      < div className="home-top" style={{ backgroundColor: "#f9fafb" }}  >
        <Sidebar />
        <div>
          <Navbar />
          <MainArea />
        </div>
      </div>
    </div >
  );
}

export default App;
