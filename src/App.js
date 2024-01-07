import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Detail from './pages/Detail';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Content />} />
				<Route path='/detail' element={<Detail />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
