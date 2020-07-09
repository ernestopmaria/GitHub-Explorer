import React from 'react';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositorios no Github</Title>

            <Form action="">
                <input
                    type="text"
                    placeholder="Digite o nome do Repositorio"
                    id=""
                />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste" />
            </Repositories>
        </>
    );
};
export default Dashboard;
