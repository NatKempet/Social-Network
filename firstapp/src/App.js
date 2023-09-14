import Button from './components/button';
import './ver1/homepage.css'; //  TODO Remove this line

const App = () => {
  return (
    <div className="containner">
      <ul>
        <li><a href="#gg">Foryou</a></li>
        <li><a href="#zz">Following</a></li>
      </ul>

      <div className="menu">
        <div id="menu">
          <Button topic={'Home'} src="https://cdn.lordicon.com/osuxyevn.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Search'}src="https://cdn.lordicon.com/xfftupfv.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Favorite'}src="https://cdn.lordicon.com/pnhskdva.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Communities'}src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Notifications'}src="https://cdn.lordicon.com/psnhyobz.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Messages'}src="https://cdn.lordicon.com/hpivxauj.json" trigger="hover" colors="primary:#f0f7ff"></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
