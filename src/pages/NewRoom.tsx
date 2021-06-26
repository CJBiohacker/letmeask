import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import illustration from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'

import '../style/auth.scss';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === ' ') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorID: user?.id,

    });

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustração de Perguntas e Respostas" />
        <strong>Crie salas de P&amp;R ao vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Logotipo do App" />
          <h2>Crie uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
            <p>Quer entrar em uma sala existente?<Link to="/">Clique aqui</Link></p>
          </form>
        </div>
      </main>
    </div>
  )
}




