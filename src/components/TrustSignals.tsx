import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from '../i18n.tsx';
import './TrustSignals.scss';

export default function TrustSignals() {
  const { t } = useTranslation();

  const stats = [
    {
      number: '20+',
      label: t('trust.yearsExperience', 'Years of Experience'),
      icon: 'fas fa-award'
    },
    {
      number: '$500M+',
      label: t('trust.salesVolume', 'in Sales Volume'),
      icon: 'fas fa-chart-line'
    },
    {
      number: '100%',
      label: t('trust.clientFocus', 'Client Focused'),
      icon: 'fas fa-handshake'
    },
    {
      number: '24/7',
      label: t('trust.availability', 'Availability'),
      icon: 'fas fa-clock'
    }
  ];

  return (
    <div className="trust-signals-section">
      <Container>
        <Row className="justify-content-center text-center">
          {stats.map((stat, index) => (
            <Col xs={6} md={3} key={index} className="trust-stat">
              <div className="trust-stat-inner">
                <i className={`${stat.icon} trust-icon`}></i>
                <div className="trust-number">{stat.number}</div>
                <div className="trust-label">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
