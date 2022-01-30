import './App.css';
import { Router } from './routes/Router';
import { AuthProvider } from './store/authState';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
