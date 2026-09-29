import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ComponentLibrariesList from '@/components/ComponentLibrariesList';

export default function Home() {
  return (
    <>

      <main>
        <h1>
          REACT BOOTSTRAP
        </h1>
        <Button>TEST</Button>
        <Container>
          <Row>
            <Col>
              <h4>Available component libraries</h4>
              <ComponentLibrariesList />
            </Col>
          </Row>
        </Container>
      </main>

    </>
  );
}
