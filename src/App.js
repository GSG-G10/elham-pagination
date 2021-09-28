
import React,{useState,useEffect} from 'react'
import { Pagination,Skeleton,Image} from 'antd';
import 'antd/dist/antd.css';
import "./App.css";
function App() {
  const [current,setCurrent] = useState(1)
  const [data,setData] = useState([])
 const  onChange = page => {
    setCurrent(page)
  };
  useEffect(()=>{
    fetch(`https://api.unsplash.com/search/collections?page=${current}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
    .then(res=>res.json())
    .then(data=>{
      setData(data.results)
    })
  },[current])
  return (
      <div className="container">
        <div className="row">
          <Image.PreviewGroup>
      {
        data.length&&
        data.map(item=>{
          return(
                <Image width={200} height={200} src={item.cover_photo?.urls?.regular} />
          )
      })}
      </Image.PreviewGroup>
      </div>
     <Pagination current={current} onChange={onChange} total={50} />;
    </div>
  )
}

export default App
