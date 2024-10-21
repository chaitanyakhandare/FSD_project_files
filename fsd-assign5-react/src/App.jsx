
import Calculator from "./pages/Calculator";
import Form from "./pages/Form";
import Resume from "./pages/Resume";

function App() {

    return (
        <div className='w-full min-h-screen bg-zinc-900'>
            <nav className="w-full flex justify-between items-center py-8 px-16">
                <div className="font-semibold tracking-wider text-xl">
                    Calcu<span className="text-violet-500">lator</span>
                </div>
            </nav>
            
                 <Calculator/>
                 <Form />
                 <Resume />
        </div>
    
    )
}

export default App
