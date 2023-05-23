import Leftbox from  './inscomponents/leftbox'
import Table from './inscomponents/downtab'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  return (
    <div>
      <div class="p-2 mb-2 text-dark bg-gradient text-center fs-4 fw-bold custom-font" style={{ backgroundColor: '#ED7D31' }}><h1>Bending Inspection Form - Operator</h1></div>
      <Leftbox />
      <br></br>
      <Table />
    </div>
);

}
export default App;
