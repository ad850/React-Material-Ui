import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';


const App = () => {


  const [state, setstate] = useState(0)

  const add = () => {


    setstate(state + 1);

  }
  const sub = () => {

    if (state <= 0) {
      alert('No-negetive value ');
    }
    else {

      setstate(state - 1);

    }


  }



  return (<>



    <div className="main_div">

      <div className="center_div">


        <div className="result"> {state}</div>

        <Tooltip title="Add">

          <Button className="butt_1" onClick={add} > <AddIcon /></ Button>

        </Tooltip >


        <Tooltip title="Delete">
          <Button className="butt_2" onClick={sub} > <DeleteIcon /></Button>
        </Tooltip >

      </div>

    </div>
  </>
  )

}

export default App;