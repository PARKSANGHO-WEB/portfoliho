import styles from './App.module.scss';
import Smooth from './Components/Smooth/Smooth';
import Mousecursor from './Components/Mousecursor/Mousecursor';
import Header from './Components/Header/Header';
import Section01 from './Pages/Section01/Section01';
import Section02 from './Pages/Section02/Section02';
import Section03 from './Pages/Section03/Section03';
import Section04 from './Pages/Section04/Section04';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    
    <div className={styles.App}>
      <Mousecursor/>
      <Smooth/>
      <Header></Header>
      <Section01></Section01>
      <Section02></Section02>
      <Section03></Section03>
      <Section04></Section04>
      <Footer></Footer>
    </div>
  );
}

export default App;
