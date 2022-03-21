import { useContext } from 'react';
import { UserContext } from '../../store/user-context';
import Card from '../UI/Card';

const MainUser = () => {
  const userCtx = useContext(UserContext);
  console.log(userCtx);
  return <div>
    {userCtx.users.map(user => <Card key={user.id}>{user.nome}</Card>)}
  </div>
}

export default MainUser;