import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Topbar from './components/topbar/Topbar';
import BlindTest from './components/BlindTest/BlindTest';

function App() {
  return (
    <MainLayout>
      <Topbar></Topbar>
      <BlindTest>
      </BlindTest>
    </MainLayout>
  );
}

export default App;
