


// export default function Headre() {

//     const specialités = ["generaliste", "cardiologue", "gastrologue"];


//     return(
//         <ul>
//             {specialités.map((loca,i)=>(
//                 <li key={1}>{loca}</li>
//             ))}
//         </ul>
//     )

// }



import React, { useState } from 'react';



export default function Headre() {
    const [Nome, setNome] = useState('');
    const [Select, setSelect] = useState('')
    const [Sex, setSex] = useState('')
    const [checkbox, setcheckbox] = useState([])
    const [range, setrange] = useState('')
    const [Color, setColor] = useState('')
    const [Img, setImg] = useState('')
    const [t, sett] = useState([])


    function ch(e) {
        e.preventDefault();
        sett([...t, { Nome, Select, Sex, checkbox, range, Color, Img }]);

    };
    function se(e) {
        if (checkbox.includes(e.target.value)) {
            setcheckbox([...checkbox.filter((a) => {
                return (
                    a !== e.target.value
                )
            })])
        } else {
            setcheckbox([...checkbox, e.target.value])
        }
    };
    function suppremi(Sup){
        sett(t.filter((S,i)=>i !== Sup ));
    }


    return (
        <>
            <form onSubmit={ch} >
                <fieldset>
                    <legend>Test Form</legend>

                    <label>Nome:</label>
                    <input type='text' onChange={(e) => setNome(e.target.value)} /><br /><br></br>

                    <label>Select:</label><br />
                    <select onChange={(e) => setSelect(e.target.value)}>
                        <option value={"Test"}>Test select</option>
                        <option value={"select"}> select</option>
                    </select><br /><br />

                    <label>Sex:</label><br />
                    <label>Homme</label>
                    <input type='radio' name='dif' onChange={(e) => setSex(e.target.value)} value="Homme" />
                    <label>man</label>
                    <input type='radio' name='dif' onChange={(e) => setSex(e.target.value)} value="man" /><br />

                    <label>big difference:</label><br />
                    <input type='checkbox' onChange={se} value={"html"} />
                    <label>Furmation en HTML</label><br />
                    <input type='checkbox' onChange={se} value={"css"} />
                    <label>Furmation en Css</label><br />

                    <input type='range' onChange={(e) => setrange(e.target.value)} /><br></br>

                    <label>Color:  </label>
                    <input type='color' onChange={(e) => setColor(e.target.value)} /><br></br><br></br>

                    <label>Image:  </label>
                    <input type='file' onChange={(e) => setImg(e.target.files[0])} /><br />

                    <button type='submit' >ok</button>
                </fieldset>
            </form>

            <table border={1}>
                <tr>
                    <th>Nome</th>
                    <th>Select</th>
                    <th>Sex</th>
                    <th>checkbox</th>
                    <th>range</th>
                    <th>Color</th>
                    <th>Img</th>
                    <th>Action</th>
                </tr>
                {t.map((M, i) => (

                    <tr key={i}>
                        <td>{M.Nome}</td>
                        <td>{M.Select}</td>
                        <td>{M.Sex}</td>
                        <td>{M.checkbox.join(',')}</td>
                        <td>{M.range}</td>
                        <td><div style={{backgroundColor:M.Color,width:"20px" , height:"30px"}}>
                            </div></td>
                        <td>{M.Img.name}</td>
                        <td>
                            <bottun onClick={()=> suppremi(i)} style={{backgroundColor:"red"} } type="submit">Delete</bottun>
                        </td>
                    </tr>

                ))}
            </table>
        </>
    )

}