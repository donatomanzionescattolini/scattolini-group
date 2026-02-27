import { useState } from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../i18n";
import { useAuth } from "../../contexts/AuthContext";
import AreaEditor from "./AreaEditor";
import DesarrolloEditor from "./DesarrolloEditor";
import "./Editor.scss";
export default function Editor() {
  const { t } = useTranslation();
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'desarrollos' | 'areas'>('desarrollos');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="editor-page">
      <div className="editor-header">
        <Container>
          <Row className="align-items-center py-3">
            <Col md="6">
              <h1 className="mb-0">{t('pages.editor.title', 'Admin Panel')}</h1>
              <p className="text-muted mb-0">
                {t('pages.editor.signedInAs', 'Signed in as')}: {currentUser?.email || '-'}
              </p>
            </Col>
            <Col md="6" className="text-end">
              <Button variant="secondary" onClick={handleLogout}>
                {t('pages.editor.logout', 'Sign out')}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-4">
        <Card>
          <Card.Body>
            <Nav variant="tabs" className="mb-4">
              <Nav.Item>
                <Nav.Link
                  onClick={() => setActiveTab('desarrollos')}
                  active={activeTab === 'desarrollos'}
                >
                  {t('pages.editor.tabs.desarrollos', 'Developments')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => setActiveTab('areas')}
                  active={activeTab === 'areas'}
                >
                  {t('pages.editor.tabs.areas', 'Areas')}
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {activeTab === 'desarrollos' && <DesarrolloEditor />}
            {activeTab === 'areas' && <AreaEditor />}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
