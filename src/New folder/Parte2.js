import { useState } from "react";

export default function F() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState("");
    const [ville, setVille] = useState("");
    const [sex, setSex] = useState("");
    const [file, setFile] = useState(null);
    const [color, setColor] = useState("");
    const [volume, setVolume] = useState("");
    const [description, setDescription] = useState("");
    const [laision, setLaision] = useState([]);
    const [t, setT] = useState([]);

    function Affiche(e) {
        e.preventDefault();
        setT([...t, { nom, prenom, age, ville, sex, laision,file, color, volume, description }]);
    }

    function ls(e) {
        if (laision.includes(e.target.value)) {
            setLaision(laision.filter((item) => item !== e.target.value));
        } else {
            setLaision([...laision, e.target.value]);
        }
    }

    return (
        <>
        <fieldset>
            <legend>
                <h1>Parte1</h1>
            </legend>
            <form onSubmit={Affiche}>
                <input onChange={(e) => setNom(e.target.value)} type="text" placeholder="Entrez votre nom" /><br />
                <input onChange={(e) => setPrenom(e.target.value)} type="text" placeholder="Entrez votre prénom" /><br />
                <input onChange={(e) => setAge(e.target.value)} type="number" placeholder="Entrez votre âge" /><br />
                <select onChange={(e) => setVille(e.target.value)}>
                    <option value="">Entrez votre ville</option>
                    <option value="laayouane">Laayouane</option>
                    <option value="agadir">Agadir</option>
                    <option value="rabat">Rabat</option>
                    <option value="fes">Fès</option>
                    <option value="tantan">Tantan</option>
                </select><br />
                f<input type="radio" name="sex" value="femme" onChange={(e) => setSex(e.target.value)} />
                m<input type="radio" name="sex" value="homme" onChange={(e) => setSex(e.target.value)} /><br />
                <label>Laision</label><br />
                sport <input value="sport" type="checkbox" onChange={ls} />
                natation <input value="natation" type="checkbox" onChange={ls} />
                music <input value="music" type="checkbox" onChange={ls} />
                <br />
                Description:<textarea onChange={(e) => setDescription(e.target.value)}></textarea><br />
                Volume:<input onChange={(e) => setVolume(e.target.value)} type="range" /><br />
                Color:<input onChange={(e) => setColor(e.target.value)} type="color" /><br /><br />
                File:<input onChange={(e) => setFile(e.target.files[0])} type="file" /><br /><br />
                <br />
                <button type="submit">Envoyer</button>
            </form>
            </fieldset>
            <h1>Les infos dans tableau</h1>
            <table border="1">
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Âge</th>
                        <th>Ville</th>
                        <th>Sex</th>
                        <th>Laision</th>
                        <th>Description</th>
                        <th>Volume</th>
                        <th>Color</th>
                        <th>File</th>
                    </tr>
                    {t.map((el, i) => (
                        <tr key={i}>
                            <td>{el.nom}</td>
                            <td>{el.prenom}</td>
                            <td>{el.age}</td>
                            <td>{el.ville}</td>
                            <td>{el.sex}</td>
                            <td>{el.laision.join(", ")}</td>
                            <td>{el.description}</td>
                            <td>{el.volume}</td>
                            <td><div style={{ backgroundColor: el.color, width: "20px", height: "20px" }}></div></td>
                            <td>{el.file ? el.file.name : "N/A"}</td>
                        </tr>
                    ))}
            </table>
        </>
    );
}