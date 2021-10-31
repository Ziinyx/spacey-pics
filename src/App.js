import AstroPic from './components/Astropic'
import HeroHeader from './components/HeroHeader'
import GithubUser from './components/GithubUser'
import './App.css';

function App() {
  return (
	<>
		<HeroHeader />
		<AstroPic />
		<GithubUser />
		<footer>
			<h4>Credits</h4>
			<a href='https://www.freepik.com/vectors/background'>Background vector created by tartila - www.freepik.com</a>
		</footer>
	</>
  );
}

export default App;
