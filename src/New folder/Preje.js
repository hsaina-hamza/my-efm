import React from 'react'
import { useState } from 'react';
// import Ajouter from './Ajouter'
// import './App.css'



export default function Preje(){
    const [Reference,setReference] = useState('')
    const [Nom,setNom] = useState('')
    const [Categorie,setCategorie] = useState('')
    const [Description,setDescription] = useState('')
    const [Imag,setImage] = useState(null)
    const [Prix,setPri] = useState('')

    const [Ajouter,setAjouter]=useState(null);

    const button =()=>{
        
        setAjouter({Reference,Nom,Categorie,Description,Imag,Prix})}
    return(
        <>
    
        <div >
        <form classNem=""  id='form'>
        <h6>Gestion des produits:</h6>
          Reference : <input type="text" value={Reference} onChange={(e)=>setReference(e.target.value)}/><br /><br />
          Nom Produit: <input type="text" value={Nom} onChange={(e)=>setNom(e.target.value)}/><br /><br />
          Categorie Produit: <select value={Categorie} onChange={(e)=>setCategorie(e.target.value)}>
            <option value="Petit dejeuner" >Petit dejeuner</option>
            <option value=" dejeuner" > dejeuner</option>
            <option value="Petit " >Petit </option>
          </select><br /><br />
          Description:<textarea value={Description} onChange={(e) => setDescription(e.target.value)} placeholder="Search for the keywords to learn more about each warning" Style={{ width: "100px" }}></textarea><br /><br />
          Prix: <input type="number" value={Prix} onChange={(e)=>setPri(e.target.value)}/>
          <br /><br />
          Image Produit:<input type="file" value={Imag} onChange={(e)=>setImage(e.target.value)}></input>
          <br /><br />
          <button type="button" onClick={button}>valider</button>
  
  
        </form>
        {/* {Ajouter &&( */}
        <tabel >
            <tr>
                <th>Reference</th>
                <th>Nom Produit</th>
                <th>description</th>
                <th>Prix</th>
                <th>Categorie</th>
                <th>Image</th>
            </tr>
            
            {Ajouter &&(
          <tr>
            <td>{Ajouter.Reference}</td>
            <td>{Ajouter.Nom}</td>
            <td>{Ajouter.Categorie}</td>
            <td>{Ajouter.Description}</td>
            <td>{Ajouter.Imag}</td>
            <td>{Ajouter.Prix}</td>
          </tr>
        )}
         </tabel>
      </div>

      </>
    )
}