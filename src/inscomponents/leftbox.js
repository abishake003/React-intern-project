import React from "react";
import './cssfile.css'
function Leftcolumn(){
    return(
        <div class="container">
        <div class="card">
            <div class="card-body custom-lbox">
                <form class="needs-validation"noValidate>
                    <div class="row">

                        <div class="col">
                        <label for="exampleInputEmail1">Date</label>
                        <input type="date" class="form-control"required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="dd:mm:yyyy"/>
                        </div>

                        <div class="col">
                        <label for="exampleInputPassword1">Machine Number</label>
                        <input type="number" class="form-control"required id="exampleInputPassword1" placeholder="0"/>
                        </div>

                        <div class="col">
                        <label class="form-input-label" for="exampleCheck1">Machine Operator</label><br></br>
                        <select name="operator" id="shift form-control" required>
                        <option value="morning">operator 1</option>
                        <option value="evening">operator 2</option>
                        <option value="night">operator 3</option>
                        </select>
                        </div>

                    </div><br></br>

                    <div class="row">

                        <div class="col">
                        <label class="form-input-label" for="exampleCheck1">Shift</label><br></br>
                        <select name="Shift" id="shift form-control" required>
                        <option value="morning">Morning</option>
                        <option value="evening">Afternoon</option>
                        <option value="night">Night</option>
                        </select>
                        </div>

                        <div class="col">
                        <label class="form-input-label" for="exampleCheck1">Batch Control Number</label><br></br>
                        <select name="Batch control Number" id="shift form-control" required>
                        <option value="morning">Batch 1</option>
                        <option value="evening">Batch 2</option>
                        <option value="night">Batch 3</option>
                        </select> 
                        </div> 

                        <div class="col">
                        <label class="form-input-label" for="exampleCheck1">Customer</label><br></br>
                        <select name="Customer" id="shift form-control" required>
                        <option value="morning">Customer 1</option>
                        <option value="evening">Customer 2</option>
                        <option value="night">Customer 3</option>
                        </select>
                        </div>
                        
                    </div><br></br>

                    <div class="row">
                        
                        <div class="col">
                        <label class="form-input-label" for="exampleCheck1">Part Number</label><br></br>
                        <select name="Part number" id="shift form-control" required>
                        <option value="morning">Part 1</option>
                        <option value="evening">Part 2</option>
                        <option value="night">Part 3</option>
                        </select> 
                        </div>

                        <div class="col">
                        <label for="exampleInputPassword1">Tool Setting Start time</label><br></br>
                        <input type="time" class="form-control" id="exampleInputPassword1" placeholder="00:00"/>
                        </div>

                        <div class="col">
                        <label for="exampleInputPassword1"> End time</label>
                        <input type="time" class="form-control" id="exampleInputPassword1" placeholder="00:00"/>
                        </div>

                    </div><br></br>

                    

                        <center>
                            <button type="submit" class="btn btn-primary btn-sm customcol ">ADD</button>
                            <button type="clear"class="btn btn-primary btn-sm customcol">clear</button>
                        </center>
    

                        
                    
                </form>
            </div>
        </div>
           
        </div>

            
     
    );
}
export default Leftcolumn;