import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Form,
  Col,
  FormGroup,
  Button,
  Container,
  Input,
  CardTitle
} from "reactstrap";
import { setOrderAction, setMainAction } from "../../store/actions";
import { push } from "connected-react-router";
import ReactSVG from "react-svg";
import JediFemaleSVG from "../../assets/imgs/jedi_female.svg";
import JediMaleSVG from "../../assets/imgs/jedi_male.svg";

import SithFemaleSVG from "../../assets/imgs/sith_female.svg";
import SithMaleSVG from "../../assets/imgs/sith_male.svg";

const Order = () => {
  const profile = useSelector(state => state.sw.profile);

  const [Order, setOrder] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("teste");
    console.log(profile);

    if (!profile.name || !profile.genre) {
      dispatch(push("/"));
    } else if (profile.order) {
      console.log("Vai");
      dispatch(push("/missions"));
    }
  }, [profile]);

  const HandleSubmit = e => {
    e.preventDefault();
    if (Order) {
      dispatch(setOrderAction(Order));
    }
  };

  return (
    <Container className="step-1">
      <Card body>
        <CardTitle className="text-center" tag="h2">
          Selecione seu gênero:
        </CardTitle>
        <Form className="form" onSubmit={HandleSubmit}>
          <FormGroup row>
            <Col xs={6} className="text-center">
              <label>
                <Input
                  id="jedi-order"
                  type="radio"
                  name="order"
                  label="Jedi"
                  className="radio-svg"
                  onChange={() => setOrder("jedi")}
                  checked={Order === "jedi"}
                />
                <ReactSVG
                  src={profile.genre === "male" ? JediMaleSVG : JediFemaleSVG}
                />
              </label>
            </Col>
            <Col xs={6} className="text-center">
              <label>
                <Input
                  id="sith-genre"
                  type="radio"
                  name="genre"
                  label="Sith"
                  className="radio-svg"
                  onChange={() => setOrder("sith")}
                  checked={Order === "sith"}
                />
                <ReactSVG
                  src={profile.genre === "male" ? SithMaleSVG : SithFemaleSVG}
                />
              </label>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col className={"text-center"} xs={6}>
              <Button
                color="danger"
                onClick={() => dispatch(setMainAction(undefined, undefined))}
              >
                Voltar
              </Button>
            </Col>
            <Col className={"text-center"} xs={6}>
              <Button type="submit" color="primary">
                Próximo
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Card>
    </Container>
  );
};

export default Order;
