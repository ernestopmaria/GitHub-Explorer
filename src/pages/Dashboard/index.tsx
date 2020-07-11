import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);

    function handleAddRepository(event: FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        console.log(newRepo);
    }



    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositorios no Github</Title>

            <Form onSubmit ={handleAddRepository}>
                <input
                value = {newRepo}
                onChange ={(e) =>setNewRepo(e.target.value)}
                    type="text"
                    placeholder="Digite o nome do Repositorio"
                    id=""
                />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4"
                        alt="Ernesto Maria"
                    />
                    <div>
                        <strong>Gostack 12</strong>
                        <p>Aprendendo React JS de ima forma Imersiva</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};
export default Dashboard;
