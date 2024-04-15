import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import "./ColectionMenuFilter.css";
const ColectionMenuFilter = () => {
  return (
    <div  className="ContainnerMenuFilter ">
      <p className="MenuFilter">Filtrar por</p>
      <Accordion defaultActiveKey="-1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Gênero</Accordion.Header>
          <Accordion.Body>Masculino</Accordion.Body>
          <Accordion.Body>Feminino</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Tamanhos </Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Check className="FormMenuFilter">
                <div>
                  <Form.Check.Input />
                  <Form.Check.Label> 0 - 1</Form.Check.Label>
                </div>
                <div>
                  <Form.Check.Input />
                  <Form.Check.Label>2 - 3 </Form.Check.Label>
                </div>
                <div>
                  <Form.Check.Input />
                  <Form.Check.Label>4</Form.Check.Label>
                </div>
                <div>
                  <Form.Check.Input />
                  <Form.Check.Label>6</Form.Check.Label>
                </div>
                <div>
                  <Form.Check.Input />
                  <Form.Check.Label>8</Form.Check.Label>
                </div>
                <div>
                  <Form.Check.Input />
                  <Form.Check.Label>10</Form.Check.Label>
                </div>
                <div>
                  <Form.Check.Input />
                  <Form.Check.Label>12</Form.Check.Label>
                </div>
                <div>
                  <Form.Check.Input />
                  <Form.Check.Label>14</Form.Check.Label>
                </div>
              </Form.Check>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ColectionMenuFilter;
