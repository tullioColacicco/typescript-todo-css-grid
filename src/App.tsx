import React, {ChangeEvent, FC,useState} from 'react';

import './App.css';

const App: FC=()=> {
  const [task,setask] = useState<string>('')
  const [location,setLoaction] = useState<string>('')
  const [date,setDate] = useState<number>()

  const handleChange= (event: ChangeEvent<HTMLInputElement>) =>{
    setask(event.target.value)
  }
  

  return (
<div className='container'>
  <header id="pageHeader">Header</header>
  <div id="mainArticle">
 <div className='nestedGrid'>
    <div className="input-container">
      
      <input className="memory-input"type="text" placeholder="memory" onChange={handleChange}/>
    </div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
   
    </div>
  </div>
  <nav id="mainNav">Nav</nav>
  <div id="siteAds">Ads</div>
  <footer id="pageFooter">Footer</footer>
</div>
  );
}

export default App;
