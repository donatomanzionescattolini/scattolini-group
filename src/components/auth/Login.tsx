import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';
import './Login.scss';
import {useTranslation} from '../../i18n.tsx';

export default function Login() {
    const {t} = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {login} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = (location.state as any)?.from?.pathname || '/editor';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError(String(t('pages.auth.login.errors.missingFields', 'Please enter email and password')));
            return;
        }

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate(from, {replace: true});
        } catch (err: any) {
            console.error('Login error:', err);
            setError(
                err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password'
                    ? String(t('pages.auth.login.errors.invalidCredentials', 'Incorrect email or password'))
                    : String(t('pages.auth.login.errors.generic', 'Error signing in. Please try again.'))
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="login-container py-5">
            <Row className="justify-content-center align-items-center">
                <Col md={6} lg={5} xl={4}>
                    <Card className="shadow">
                        <Card.Body className="p-5">
                            <h2 className="text-center mb-4">{t('pages.auth.login.title', 'Sign in')}</h2>
                            <p className="text-center text-muted mb-4">
                                {t('pages.auth.login.subtitle', 'Admin panel')}
                            </p>

                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label>{t('pages.auth.login.emailLabel', 'Email')}</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>{t('pages.auth.login.passwordLabel', 'Password')}</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-100 mb-3"
                                    disabled={loading}
                                >
                                    {loading
                                        ? t('pages.auth.login.loading', 'Signing in...')
                                        : t('pages.auth.login.submit', 'Sign in')}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
