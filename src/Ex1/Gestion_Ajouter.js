import React ,{useState} from 'react';


export default function AjouterLivre(){

    const [Titere,setTitere] =useState('');
    const [Nombre,setNombre] = useState('');
    const [Auteur,setAuteur] = useState('');
    const [Imge,setImge] = useState('');
    const [Ajouter,setAjouter] = useState([]);

const Ajout = (e)=>{
    e.preventDefalt();
    setAjouter([...Ajouter,{Titere,Nombre,Auteur,Imge}])
};

    return(
    <>
        <form onSubmit={Ajout} >
            <fieldset>
                <legend style={{textAlign:"center",backgroundColor:"green"}}>
                    <u><h2>Ajouter un Livre</h2></u>
                </legend>
                <div style={{backgroundColor:"#d8e2e4", width:"50%", padding:"10px"}}>
                    <label>Titere   :   </label>
                    <input type="text" onChange={(e)=>setTitere(e.target.value)} style={{width:"200px", marginLeft:"30px"}}/>
                </div>
                <div  style={{backgroundColor:"#d8e2e4", width:"50%", padding:"10px"}}>
                    <label>Nombre Pages   :   </label>
                    <input type="text" onChange={(e)=>setNombre(e.target.value)}style={{width:"200px", marginLeft:"30px"}}/>
                </div>
                <div style={{backgroundColor:"#d8e2e4", width:"50%", padding:"10px"}}>
                    <label>Auteur   :   </label>
                    <input type="text" onChange={(e)=>setAuteur(e.target.value)} style={{width:"200px", marginLeft:"30px"}}/>
                </div>
                <div style={{backgroundColor:"#d8e2e4", width:"50%", padding:"10px"}}>
                    <label>Imge   :   </label><br/>
                    <input type="file" onChange={(e)=>setImge(e.target.value)} />
                </div>
                <div>
                <button type='submit'>Ajouter Livre</button>
                </div>

            </fieldset>
        </form>

        <lu>
            <li>
                {Titere}
            </li>
            <li>
                {Nombre}
            </li>
            <li>
                {Auteur}
            </li>
            <li>
                {Imge}
            </li>
        </lu>
    </>

       
    )
}