import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import DesarrolloEditor from './DesarrolloEditor';
import AreaEditor from './AreaEditor';
import './Editor.scss';
import { useTranslation } from "../../i18n.tsx";

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
        <MDBContainer>
            <MDBRow className="align-items-center py-3">
              <MDBCol md="6">
              <h1 className="mb-0">{t("pages.admin.editor.title")}</h1>
              <p className="text-muted mb-0">
                {t("pages.admin.editor.signedInAs")} {currentUser?.email}
              </p>
            </MDBCol>
            <MDBCol md="6" className="text-end">
              <MDBBtn color="secondary" onClick={handleLogout}>
                {t("pages.admin.editor.logout")}
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <MDBContainer className="py-4">
        <MDBCard>
          <MDBCardBody>
            <MDBTabs className="mb-4">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => setActiveTab('desarrollos')}
                  active={activeTab === 'desarrollos'}
                >
                  {t("pages.admin.editor.tabs.desarrollos")}
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => setActiveTab('areas')}
                  active={activeTab === 'areas'}
                >
                  {t("pages.admin.editor.tabs.areas")}
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane open={activeTab === 'desarrollos'}>
                <DesarrolloEditor />
              </MDBTabsPane>
              <MDBTabsPane open={activeTab === 'areas'}>
                <AreaEditor />
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
