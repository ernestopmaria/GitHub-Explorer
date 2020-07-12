import React, {useEffect} from 'react';

import { useRouteMatch, Link} from 'react-router-dom';
import {FiChevronsLeft, FiChevronRight} from 'react-icons/fi';
import {Header,RepositoryInfo, Issues} from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams{
    repository:string;
}

const Repository: React.FC = () => {

    const {params} = useRouteMatch<RepositoryParams>();

    return (
        <>
        <Header>
            <img src ={logoImg} alt = "Github Explorer"/>
            <Link to= "/">
                <FiChevronsLeft size ={16}/>
                Voltar
            </Link>
        </Header>

        <RepositoryInfo>
            <header>
                <img src="https://avatars3.githubusercontent.com/u/58423237?s=460&u=f39d1d5e73424473bc991b93bb36566ecb015b76&v=4" alt="Ernesto Maria"/>
                <div>
                    <strong>rocketseat/unform</strong>
                    <p> descrição do repositorio</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1080</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>48</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues abertas</span>
                </li>
            </ul>
        </RepositoryInfo>
        <Issues>
        <Link   to ="teste">

                    <div>
                        <strong>Gostack</strong>
                        <p>Curso Bootcamp</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
        </Issues>
        </>
    );
};
export default Repository;
