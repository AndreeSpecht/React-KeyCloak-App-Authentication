import React, { useState } from 'react';
import axios from 'axios';
import keycloak from './keycloak';

const API_URL = 'http://localhost:8081/api/clientes';

function App() {
    const [form, setForm] = useState({ id: '', nome: '', email: '' });
    const [resultado, setResultado] = useState('');

    const getAuthHeader = () => ({
        headers: { Authorization: `Bearer ${keycloak.token}` }
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // ... (Cole as funções handleGet, handlePost, handlePut, handleDelete aqui)

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Gerenciamento de Clientes (macOS)</h1>
            <div style={{ background: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                <p>Usuário: <b>{keycloak.tokenParsed.preferred_username}</b></p>
                <p>Roles: <b>{keycloak.realmAccess.roles.join(', ')}</b></p>
                <button onClick={() => keycloak.logout()}>Logout</button>
            </div>
            <hr />

            <div>
                <input name="id" value={form.id} onChange={handleChange} placeholder="ID (para buscar, editar, deletar)" /><br/>
                <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" /><br/>
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" /><br/>
            </div>

            {/* --- AUTORIZAÇÃO VISUAL NO FRONT-END --- */}
            {keycloak.hasRealmRole("ROLE_VISUALIZAR") && <button>Buscar (GET)</button>}
            {keycloak.hasRealmRole("ROLE_CADASTRAR") && <button>Cadastrar (POST)</button>}
            {keycloak.hasRealmRole("ROLE_EDITAR") && <button>Atualizar (PUT)</button>}
            {keycloak.hasRealmRole("ROLE_DELETAR") && <button>Deletar (DELETE)</button>}

            <h3>Resultado:</h3>
            <pre style={{ background: '#eee', padding: '10px' }}>{resultado}</pre>
        </div>
    );
}

export default App;