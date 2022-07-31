import { useState, useEffect } from 'react';
import InputFeild from './components/InputField';
import TodoList from './components/TodoList';
import './App.css'
import { Propss } from './components/TodoList';
import { Clustering } from './models/models';
import {Audio} from 'react-loader-spinner'
import axios from 'axios';
import { useSelectionState } from '@mantine/core/lib/components/TransferList/use-selection-state/use-selection-state';



export const ENDPOINT = 'http://localhost:4000'

const data ={results: [
   {Result :[
    {ID: 0, X: 0, Y: 0, Color: ''},
    {ID: 1, X: 6, Y: 8, Color: '#F375A1'},
    {ID: 2, X: 7, Y: 4, Color: '#73223D'},
    {ID: 3, X: 8, Y: 3, Color: '#73223D'},
    {ID: 4, X: 2, Y: 1, Color: '#68C452'},
    {ID: 5, X: 1, Y: 2, Color: '#68C452'}
   ]},
   {Result :[
    {ID: 0, X: 0, Y: 0, Color: ''},
    {ID: 1, X: 6, Y: 8, Color: '#F375A1'},
    {ID: 2, X: 7, Y: 4, Color: '#73223D'},
    {ID: 3, X: 8, Y: 3, Color: '#73223D'},
    {ID: 4, X: 2, Y: 1, Color: '#68C452'},
    {ID: 5, X: 1, Y: 2, Color: '#68C452'}
   ]},
   {Result :[
    {ID: 0, X: 0, Y: 0, Color: ''},
    {ID: 1, X: 6, Y: 8, Color: '#F375A1'},
    {ID: 2, X: 7, Y: 4, Color: '#73223D'},
    {ID: 3, X: 8, Y: 3, Color: '#73223D'},
    {ID: 4, X: 2, Y: 1, Color: '#68C452'},
    {ID: 5, X: 1, Y: 2, Color: '#68C452'}
   ]}
]}


function App() {

  const [clusterResult, setClusterResult] = useState<any>({results: []})
  const [isLoading, setLoading] = useState<boolean>(true)

  const GetClusters = async () => {
    await axios.request({
      method: "get",
      url: `${ENDPOINT}/api/get/data`,
    })
    .then(res => {
      // Dimasukkan ke dalam array dari frontendnya. Ngga usah manggil dari database.
      // Pertama kali launch aplikasinya, ambil ari database.
      console.log(res)
      setClusterResult({results: res.data})
      setLoading(false)
    })
    .catch(error => {
      console.log(error.response.data)
      alert("either file wrong input or amount of cluster")
    })
  }


  useEffect (() => {
    console.log("Greetings everybody")
    GetClusters()
    console.log("greetings lewat ngga ya?")
  }, [])

  if(isLoading) {
    return (
      <div  className="loadingContainer">
      <Audio
      color="#00b22d"
      height={100}
      width={100}
       //3 secs
    />
    </div>
    )
  } else {
    return (
      <div className="App">
      <span className="heading">Let's Cluster</span>
      <InputFeild />
      <TodoList results = {clusterResult.results}/>
    </div>
  );}
}
export default App
