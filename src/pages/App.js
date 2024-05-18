import { useState } from 'react';
import gitLogo from '../assets/img/github_logo.png';
import { Input } from '../components/Input';
import { ItemRepo } from '../components/ItemRepo';
import { Container } from './styles';
import { Button } from '../components/Button';
import { api } from '../services/api';

const App = () => {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      } else {
        alert('Repositório já pesquisado!')
      }
    }
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do GitHub' />
      <Input value={currentRepo} onChange={evento => setCurrentRepo(evento.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} />)}
    </Container>
  );
}

export default App;