import React, { useState } from 'react'

import styles from './FormWithReact.module.css'

const FormWithReact = ({user}) => {

    const [name, setName] = useState(user ? user.name : ''); 
    const [email, setEmail] = useState(user ? user.email : ''); 
    const [areaJob, setAreaJob] = useState(user ? user.areaJob : '');
    const [textBio, setTextBio] = useState(user ? user.textBio : ''); 

    const bankData = []; 

    const hundleGetDataForm = (e) => {
        e.preventDefault(); 

        if (name == '' || email == '' || textBio == '') {
           alert('[[Error]] -> Complete o formulário por completo!!!')
        } else {
            bankData.push(name, email, areaJob, textBio);
            console.log(bankData);
            setName(''); 
            setEmail(''); 
            setTextBio(''); 
            setAreaJob('escolha')
        }
    }
    return (
        <div className={styles['form-user-programmer']}>
            <h2>Preencha o seu cadastro e vamos evoluir juntos. </h2>
            <form onSubmit={hundleGetDataForm}>
                {/* Name user */}
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder='Digite o seu nome'
                        autoComplete='off' />
                </label>
                {/* Email */}
                <label>
                    <span>Email: </span>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Digite o seu email'
                        autoComplete='off' />
                </label>
                {/* Select options  */}
               <label>
                   <span>Qual a sua área ?</span>
                   <select onChange={(e) => setAreaJob(e.target.value)} name="areaJob">
                    <option value="escolha">Escolha...</option>
                    <option value="Developer Front-End">Desenvolvedor Front-End</option>
                    <option value="Developer Back-End">Desenvolvedor Back-End</option>
                    <option value="Developer Full-Stack">Desenvolvedor Full-Stack</option>
                    <option value="outra">Outra</option>
                   </select>
               </label>
                {/* TextÁrea */}
                <textarea onChange={(e) => setTextBio(e.target.value)}
                    placeholder='Fale mais sobre você'
                    value={textBio}
                    name="bio"
                    cols="30"
                    rows="10">
                </textarea>

                {/* Button submit */}
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default FormWithReact