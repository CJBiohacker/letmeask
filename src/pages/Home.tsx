import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';  // Importação do componente Button (Botão Customizado pelo ReactJS).

import illustration from '../assets/images/illustration.svg';
import logo from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import '../style/auth.scss';  // Importação da Estilização SASS CSS.
import { database } from '../services/firebase';


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      signInWithGoogle()
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === ' ') {
      return;
    }

    const roomRef = await database.ref(`/rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIcon} alt="Ícone do Google" />
            <p>Crie sua sala com o Google</p>
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Clique para entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )

}