import gitLogo from '../assets/img/github_logo.png';
import { Input } from '../components/Input';
import { ItemRepo } from '../components/ItemRepo';
import { Container } from './styles';

const App = () => {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do GitHub' />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;