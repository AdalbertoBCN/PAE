import './style.css'
import BD from './BD.js'
import React from 'react';
function GuideNotas() {

    function createTable() {
        const disciplinas = BD;

        return (
            <>
                {disciplinas.map((disciplina) => (
                        <table key={disciplina.title}>
                            <thead>
                                <th colSpan={3}>{disciplina.title}</th>
                                <tr>
                                    <th>Atividade</th>
                                    <th>Nota</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(disciplina.atividades).map(([atividade, [nota, data]]) => (
                                    <tr key={atividade}>
                                        <td>{atividade}</td>
                                        <td>{nota}</td>
                                        <td>{data}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                ))}
            </>
        );
    }

    return (
        <div className='GuideNotas'>
            {createTable()} {/* renderiza o array de elementos JSX */}
        </div>
    )
}

export default GuideNotas
