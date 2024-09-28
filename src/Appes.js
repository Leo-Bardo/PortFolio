import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<div class="logo">
					<a href="#">Julio Muñoz</a>
			</div>
				<nav id="nav" class="contenedor-header">
					<ul id="menu">
						<li><a href="#inicio">INICIO</a> </li>
						<li><a href="#sobremi">SOBRE MI</a> </li>
						<li><a href="#skills">SKILLS</a> </li>
						<li><a href="#curriculum">CURRICULUM</a> </li>
						<li><a href="#portfolio">PORTFOLIO</a> </li>
						<li><a href="#contacto">CONTACTO</a> </li>
					</ul>
				</nav>
				{/* <!-- Programar botón que destruya todos los frames de mi página y lance una alerta --> */}
				<div class="nav-responsive">
					<i class="fa-solid fa-bars"></i>
				</div> 
      </header>
    </div>
  );
}

export default App;
