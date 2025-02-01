// 1-npx creat-react-app my-aa

import React, { useState } from 'react';


export default function Afficher() {
    const [t,sett] = useState([])

    function supprimer(A){
        sett(t.filter((i)=>i !== A))
    }



    const listLivres
        = [{ Titre: "Robotique", nbpages: "196", Auteur: "SABBAI", photo: "photo1.jpg" }, {
            Titre: "Réseaux", nbpages: "59", Auteur: "Tanger", photo: "photo2.jpg"
        }, {
            Titre: "Dév Informatique", nbpages: "88", Auteur: "MEKOUAR", photo: "photo3.jpg"
        }, {
            Titre: "Informatique", nbpages: "125", Auteur: "HASSOUNI", photo: "photo4.jpg"
        }];

     return(
   <div>
    <u><h2 style={{textAlign:"center"}}>Liste des Livres</h2></u>
         {listLivres.map((list,i)=>(
      
           <div key={i} className='row'>
             <img src={list.photo} style={{width:"50px",height:"50px"}}/>
             <p><strong>Titre:</strong>{list.Titre}</p>
             <p><strong>Auteur:</strong>{list.Auteur}</p>
             <p><strong>Nombre Pages:</strong>{list.nbpages}</p>
             <bottun onClick={()=>supprimer(list)} type='button' style={{backgroundColor:"green"} } >supprimer</bottun>
           </div>
        
        ))}
   </div>
     )

}