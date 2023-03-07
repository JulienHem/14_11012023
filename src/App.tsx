import './App.css'
import RoutesC from "./routes/routes";
import FormProvider from "./providers/formProvider";

function App() {

  return (
    <>
      <div className="App">
          <FormProvider>
              <RoutesC />
          </FormProvider>
      </div>
    </>
  )
}

export default App
