import Hero from "./components/Hero"
import Demo from "./components/Demo"
import './App.css'
function App() {
  return (
    <>
    <main>
      <div>
        <div className="gradient"></div>

        <div className="app"> 
          <Hero></Hero>
          <Demo></Demo>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
