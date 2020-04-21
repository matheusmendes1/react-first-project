import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GithubExplorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/31704767?s=460&u=699d7fb1cfebc7d913a8f646060a938e0a613581&v=4"
            alt="Matheus Santos"
          />

          <div>
            <strong>matheusmendes1/react-first-app</strong>
            <p>Rocketseat: Primeiro Projeto com React</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/31704767?s=460&u=699d7fb1cfebc7d913a8f646060a938e0a613581&v=4"
            alt="Matheus Santos"
          />

          <div>
            <strong>matheusmendes1/react-first-app</strong>
            <p>Rocketseat: Primeiro Projeto com React</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/31704767?s=460&u=699d7fb1cfebc7d913a8f646060a938e0a613581&v=4"
            alt="Matheus Santos"
          />

          <div>
            <strong>matheusmendes1/react-first-app</strong>
            <p>Rocketseat: Primeiro Projeto com React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
