import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const { userProfile } = useUser();
  
  if (!currentUser || !userProfile) return <Navigate to="/login" />;
  return children;
};