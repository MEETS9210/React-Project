import React from 'react'
import { useParams } from 'react-router-dom';

const Withroute = (Recive) => {

  const Data = ()=>{
      let params = useParams();
        return <Recive params={params} />
    }

  return Data;
}

export default Withroute;
