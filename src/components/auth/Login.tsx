import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './Login.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/editor';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, ingrese email y contraseña');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err: any) {
      console.error('Login error:', err);
      setError(
        err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password'
          ? 'Email o contraseña incorrectos'
          : 'Error al iniciar sesión. Por favor, intente de nuevo.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MDBContainer className="login-container py-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6" lg="5">
          <MDBCard>
            <MDBCardBody className="p-5">
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              <p className="text-center text-muted mb-4">
                Panel de administración
              </p>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Correo electrónico"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <MDBBtn
                  type="submit"
                  className="w-100 mb-3"
                  disabled={loading}
                  color="primary"
                >
                  {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
