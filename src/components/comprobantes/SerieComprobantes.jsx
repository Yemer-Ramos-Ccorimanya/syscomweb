import { Button, Card, Form, InputGroup, Pagination } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { MainContainer } from "../common/MainContainer"


export const CrearComprobante = () => {


    return (
        <MainContainer>
            <h5> Serie Comprobante</h5>
            <div className="row m-2">
                <div className="col-10 p-2">
                    <Card>
                        <Card.Body>
                            <Form className="row row-cols-auto g-2">
                                <div className="col-8">
                                    <InputGroup className="mb-2">
                                        <Form.Control
                                            placeholder="BUSQUEDA"
                                        />
                                    </InputGroup>
                                </div>
                                <div className="col-auto">
                                    <Button className="btn btn-success ">Nueva Serie</Button>
                                </div>

                                <table className='table w-100'>

                                    <thead>
                                        <tr>
                                            <th scope="col">Serie</th>
                                            <th scope="col">Tipo de comprobante</th>
                                            <th scope="col">Correlativo</th>
                                            <th scope="col">Estados</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th className="text-primary" scope="row">F001</th>
                                            <td>Factura</td>
                                            <td>100</td>
                                            <td> S/35</td>
                                            <td>
                                                <div className="d-flex justify-content-end">
                                                    <Button variant={"secondary"}

                                                        size={"sm"} className="me-2">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </Button>
                                                    <Button variant={"danger"} size={"sm"}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </Button>
                                                </div>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>


                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex justify-content-end">
                                <div className="m-2">
                                    <span>Filas por página: </span>
                                    <select className="rounded">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>
                                <div className="m-2">
                                    <span>1-10 de 1</span>
                                </div>
                                <nav aria-label="...">
                                    <Pagination>
                                        <Pagination.Prev disabled>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                            <span className="visually-hidden">Anterior</span>
                                        </Pagination.Prev>
                                        <Pagination.Item active>{1}</Pagination.Item>
                                        <Pagination.Next>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                            <span className="visually-hidden">Siguiente</span>
                                        </Pagination.Next>
                                    </Pagination>
                                </nav>
                            </div>

                        </Card.Footer>
                    </Card>

                </div>
            </div>

        </MainContainer>
    );
};
