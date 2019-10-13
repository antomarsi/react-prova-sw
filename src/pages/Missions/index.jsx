import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  ListGroupItem,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItemText,
  FormGroup,
  Input,
  Label,
  CustomInput,
  Button,
  UncontrolledCollapse
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  requestActivity,
  removeActivity,
  resetProfile
} from "../../store/actions";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { push } from "connected-react-router";
import { FaFemale, FaMale, FaJedi, FaSith } from "react-icons/fa";
// import { Container } from './styles';
import JediFemaleSVG from "../../assets/imgs/jedi_female.svg";
import JediMaleSVG from "../../assets/imgs/jedi_male.svg";
import SithFemaleSVG from "../../assets/imgs/sith_female.svg";
import SithMaleSVG from "../../assets/imgs/sith_male.svg";

const activityType = {
  education: "Education",
  recreational: "Recreational",
  social: "Social",
  diy: "Do It Yourself",
  charity: "Charity",
  cooking: "Cooking",
  relaxation: "Relaxation",
  music: "Music",
  busywork: "Busywork"
};

const GetAvatar = (genre, order) => {
  if (genre === "male") {
    return order === "jedi" ? JediMaleSVG : SithMaleSVG;
  } else {
    return order === "jedi" ? JediFemaleSVG : SithFemaleSVG;
  }
};

const initialFilter = {
  accessibility: 0,
  type: 0,
  participants: 1
};

const Missions = () => {
  const { profile, data, loading } = useSelector(state => state.sw);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!profile.name || !profile.genre) {
      dispatch(push("/"));
    } else if (!profile.order) {
      dispatch(push("/order"));
    }
  }, [push, profile]);
  const submitHandler = e => {
    e.preventDefault();
    dispatch(requestActivity(Filter));
  };
  const [Filter, setFilter] = useState(initialFilter);

  const HandleChange = e => {
    let newFilter = Filter;
    newFilter[e.target.name] = e.target.value;
    setFilter(newFilter);
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} md={4}>
          <Card body>
            <img
              src={GetAvatar(profile.genre, profile.order)}
              className="img-fluid rounded-circle mb-2"
            />
            <h6>
              Bem vindo, <strong>{profile.name}</strong>!
            </h6>
            <p>
              Sexo:{" "}
              {profile.genre === "male" ? (
                <span>
                  <FaMale style={{ color: "cyan" }} /> Masculino
                </span>
              ) : (
                <span>
                  <FaFemale style={{ color: "red" }} />
                  Feminino
                </span>
              )}
            </p>
            <p>
              Ordem:{" "}
              {profile.order === "jedi" ? (
                <span>
                  <FaJedi style={{ color: "blue" }} />
                  Jedi
                </span>
              ) : (
                <span>
                  <FaSith style={{ color: "red" }} />
                  Sith
                </span>
              )}
            </p>
            <p>Numero de atividades: {data.length}</p>
            <Button onClick={() => dispatch(resetProfile())}>
              Editar Personagem
            </Button>
          </Card>
        </Col>
        <Col xs={12} md={8}>
          <Card body>
            <Form onSubmit={submitHandler}>
              <FormGroup>
                <Label for="accessibility">Accessibility:</Label>
                <CustomInput
                  type="range"
                  id="accessibility"
                  name="accessibility"
                  defaultValue={Filter.accessibility}
                  onChange={HandleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="type">Type:</Label>
                <Input
                  id="type"
                  name="type"
                  type="select"
                  defaultValue={Filter.type}
                  onChange={HandleChange}
                >
                  {Object.keys(activityType).map(k => (
                    <option value={k} key={k}>
                      {activityType[k]}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="participants">Participants:</Label>
                <Input
                  name="participants"
                  id="participants"
                  type="number"
                  min={0}
                  defaultValue={Filter.participants}
                  onChange={HandleChange}
                />
              </FormGroup>
              <Button type="submit" color="primary" disabled={loading}>
                {loading ? <FaSpinner className="icon-spin" /> : "Add Activity"}
              </Button>
            </Form>
          </Card>
          <Card body>
            <ListGroup>
              {data.map(a => (
                <ListGroupItem key={a.key}>
                  <ListGroupItemHeading id={`toggler-${a.key}`}>
                    <Button
                      color="danger"
                      onClick={() => dispatch(removeActivity(a.key))}
                    >
                      <FaTrash />
                    </Button>
                    <Button color="link">{a.activity}</Button>
                  </ListGroupItemHeading>
                  <UncontrolledCollapse toggler={`#toggler-${a.key}`}>
                    <ListGroupItemText>
                      <p>
                        Accessibility: {(a.accessibility * 100).toFixed(1)}%
                      </p>
                      <p>Participants: {a.participants}</p>
                      <p>Type: {activityType[a.type]}</p>
                    </ListGroupItemText>
                  </UncontrolledCollapse>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
/*
activity

Description of the queried activity


accessibility

A factor describing how possible an event is to do with zero being the most accessible

[0.0, 1.0]

type

Type of the activity

[]

participants

The number of people that this activity could involve

[0, n]

price

A factor describing the cost of the event with zero being free

[0, 1]

key

A unique numeric id

[1000000, 9999999]
*/
export default Missions;
