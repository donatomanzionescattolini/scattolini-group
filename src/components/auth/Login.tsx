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
import { useTranslation } from "../../i18n.tsx";

export default function Login() {
  const { t } = useTranslation();
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
      setError(t("pages.admin.login.missingCredentials"));
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
          ? t("pages.admin.login.invalidCredentials")
          : t("pages.admin.login.genericError")
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
              <h2 className="text-center mb-4">{t("pages.admin.login.title")}</h2>
              <p className="text-center text-muted mb-4">
                {t("pages.admin.login.subtitle")}
              </p>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label={t("pages.admin.login.emailLabel")}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label={t("pages.admin.login.passwordLabel")}
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
                  {loading ? t("pages.admin.login.submitting") : t("pages.admin.login.submit")}
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
