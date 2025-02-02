import React,{ useState } from "react"

function Preje1() {

    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [Date, setDate] = useState("");
    const [Mail, setMail] = useState("");
    const [votre, setvotre] = useState("");
    const [Homme, setHomme] = useState("");
    const [Select, setSelect] = useState("");
    const [checkbox, setcheckbox] = useState([]);
    const [t, sett] = useState("");
    const [text, settext] = useState("");
    const [file, setfile] = useState("")

    const Affichage = (e) => {
        e.preventDefault()
        sett(...t, { Nom, Prenom, Date, Mail, votre, Homme, Select, checkbox, text, file })
    };
    function ls(e) {
        if (checkbox.includes(e.target.value)) {
            setcheckbox(checkbox.filter((a) => a !== e.target.value));
        } else (
            setcheckbox([...checkbox, e.target.value])
        )
    }
    return (
        <>

            <div>
                <form border={2} onSubmit={Affichage}>
                    <fieldset>
                        <legend>
                            <h3>Vos coordonnees</h3>
                        </legend>
                        <babel>Nom:</babel>
                        <input type="text" onChange={(e) => setNom(e.target.value)} placeholder="Nom" /><br />

                        <babele>Prenom:</babele>
                        <input type="text" onChange={(e) => setPrenom(e.target.value)} placeholder="Prenom" /><br />

                        <babel>Date de naissance:</babel>
                        <input type="date" onChange={(e) => setDate(e.target.value)} /><br />

                        <babele>Mail:</babele>
                        <input type="email" onChange={(e) => setMail(e.target.value)} placeholder="email" /><br />

                        <babele>votre site:</babele>
                        <input type="text" onChange={(e) => setvotre(e.target.value)} placeholder="votre" /><br />

                        <babel>code: </babel>
                        <input type="radio" value="Homme" onChange={(e) => setHomme(e.target.value)} name="A" /><babele>Homme</babele><input type="radio" value="Femme" onChange={(e) => setHomme(e.target.value)} name="A" /><babele>Femme</babele><br />

                        <babel>Pays:</babel>
                        <select onChange={(e) => setSelect(e.target.value)}>
                            <option value="">Votre pays</option>
                            <optgroup label="Afrique">
                                <option value="tunisie">Tunisie</option>
                                <option value="algerie">Algérie</option>
                                <option value="maroc">Maroc</option>
                                <option value="mauritanie">Mauritanie</option>
                            </optgroup>
                            <optgroup label="Europe">
                                <option value="france">France</option>
                                <option value="belgique">Belgique</option>
                                <option value="italie">Italie</option>
                                <option value="allemagne">Allemagne</option>
                            </optgroup>
                            <optgroup label="Amérique">
                                <option value="usa">États-Unis</option>
                                <option value="canada">Canada</option>
                                <option value="argentine">Argentine</option>
                            </optgroup>
                            <optgroup label="Autres">
                                <option value="europe">Europe</option>
                                <option value="asie">Asie</option>
                                <option value="ameriques">Amériques</option>
                                <option value="oceanie">Océanie</option>
                            </optgroup>

                        </select>
                        <br />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Vos formations
                        </legend>
                        <input type="checkbox" value={"Formation en HTML"} onChange={ls} />
                        <label>Formation en HTML</label><br />
                        <input type="checkbox" value={"Formation en CSS"} onChange={ls} />
                        <label>Formation en CSS</label><br />
                        <input type="checkbox" value={"Formation en JS"} onChange={ls} />
                        <label>Formation en  JS</label><br />
                        <textarea style={{ width: "50%", height: "100px" }} onChange={(e) => settext(e.target.value)}></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Envoyez nous votre photo
                        </legend>
                        <input type="file" onChange={(e) => setfile(e.target.value)} /><br /><br />
                        <button type="button" style={{ margin: "10px" }}>Effacer</button>
                        {/* <button type="button">Envoyer</button> */}
                    </fieldset>
                </form>
            </div>
            <ul>
                <li><i>Nom: </i>{Nom}</li>
                <li><i>Prenom: </i>{Prenom}</li>
                <li><i>Date de naissance: </i>{Date}</li>
                <li><i>Mail: </i>{Mail}</li>
                <li><i>Votre site: </i>{votre}</li>
                <li><i>Code: </i>{Homme}</li>
                <li><i>Pays: </i>{Select}</li>
                <li><i>Formation en: </i>{checkbox}</li>
                <li><i>textarea: </i>{text}</li>
                <li><i>text Imge: </i>{file}</li>

            </ul>


        </>


    )
}
export default Preje1;
