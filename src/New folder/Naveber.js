import React from "react";
import { Link } from "react-router-dom";


export default function Naveber(){

    return(
        <ul>
            <li>
                <Link to="Preje">Preje</Link>
            </li>
            <li>
                <Link to="Preje1">Preje1</Link>
            </li>
            <li>
                <Link to="Parte2">Preje2</Link>
            </li>
            <li>
                <Link to="Headre">Header</Link>
            </li>
            <li>
                <Link to="Api" >API</Link>
            </li>
            <li>
                <Link to="*">Gestion_BIBLIO</Link>
            </li>
            <li>
                <Link to="AjouterLivre">Gestion_Ajouter</Link>
            </li>
        </ul>
    )
}