import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="dfbc5b17-b3f9-44b7-a48e-b5fbe7505b89"
      userName="Abhishek"
      userSecret="1234567890"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
