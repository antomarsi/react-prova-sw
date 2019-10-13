import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Form,
  Col,
  FormGroup,
  Input,
  Button,
  Container,
  CardTitle
} from "reactstrap";
import { setMainAction } from "../../store/actions";
import { push } from "connected-react-router";
import ReactSVG from "react-svg";
import FemaleSVG from "../../assets/imgs/jedi_female.svg";
import MaleSVG from "../../assets/imgs/jedi_male.svg";

const Main = () => {
  const [Genre, setGenre] = useState(null);
  const [Name, setName] = useState("");

  const profile = useSelector(state => state.sw.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (profile.name && profile.genre) {
      dispatch(push("/order"));
    }
  }, [profile]);

  const HandleSubmit = e => {
    e.preventDefault();
    dispatch(setMainAction(Name, Genre));
  };

  return (
    <Container className="step-1">
      <Card body>
        <CardTitle className="text-center" tag="h2">Selecione seu gênero:</CardTitle>
        <Form className="form" onSubmit={HandleSubmit}>
          <Col>
            <FormGroup row>
              <Col xs={6} className="text-center">
                <label>
                  <Input
                    id="female-genre"
                    type="radio"
                    name="genre"
                    label="Feminino"
                    className="radio-svg"
                    onChange={() => setGenre("female")}
                    checked={Genre === "female"}
                    required
                  />
                  <ReactSVG src={FemaleSVG} />
                </label>
              </Col>
              <Col xs={6} className="text-center">
                <label>
                  <Input
                    id="male-genre"
                    type="radio"
                    name="genre"
                    label="Masculino"
                    className="radio-svg"
                    onChange={() => setGenre("male")}
                    checked={Genre === "male"}
                    required
                  />
                  <ReactSVG src={MaleSVG} />
                </label>
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="nome"
                required
                placeholder="Seu nome"
                onChange={e => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col className={"text-center"}>
            <Button type="submit" color="primary">
              Próximo
            </Button>
          </Col>
        </Form>
      </Card>
    </Container>
  );
};

export default Main;
