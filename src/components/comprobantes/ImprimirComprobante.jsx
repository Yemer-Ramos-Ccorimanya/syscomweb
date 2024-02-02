import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Pagination } from 'react-bootstrap';  // Asegúrate de importar el componente Card
import { MainContainer } from '../../common/MainContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const BuscarSku = () => {
  return (
    
  <MainContainer>

    <div className='d-flex justify-content-end mb-3'>
          <Button variant="primary" className="btn-custom mx-2">
            <FontAwesomeIcon icon={faTrash} className="mx-2" />
            ANUALAR
          </Button>

          <Button variant="secondary" className="btn-custom">
            <FontAwesomeIcon icon={faCircleMinus} className="mx-2" />
            DESCARGAR PDF
          </Button>
   </div>
        


    
      
        <Card className='text-center  ml-3 mr-3'>

            <div className='row'>

                <div className='col-6 d-flex align-items-center align-items-center justify-content-end'>
                    <h5 className='m-0'>EMPRESA DE VENTA DE ROPAS</h5>
                </div>

                <div className='col-6 d-flex align-items-center mb-3 mt-3 ml-auto mr-3'>

                  <ul className="list-group w-50">
                    <li className="list-group-item">RUC: 20256428541</li>
                    <li className="list-group-item bg-dark text-white">NOTA DE VENTA</li>
                    <li className="list-group-item">NW01-00000001</li>
                  </ul>
                                    
                </div>
            </div>
      
        </Card>
      
   
    
    <div className='row mb-3 mt-3'>
    <div className='col-6'>
  <Card>
    <Card.Body>
      <div className="row">
        <div className="col">
          <h5 className='font-weight-bold text-dark'>SOBRE EL DOCUMENTO</h5>
          <p>Fecha de emisión: 20-01-2024</p>
          <p>Nombre del remitente: EMPRESA DE VENTA DE ROPA</p>
          <p>Correo electrónico: ventaderopas@gmail.com</p>
        </div>
      </div>
    </Card.Body>
  </Card>
</div>

<div className='col-6'>
     <Card>
          <Card.Body>
          <div className="row">
          <div className="col">
          <h5 className='font-weight-bold text-dark'>DATOS DE CLIENTE</h5>
          <p>MARCOS TURBUNCIA LOPEZ</p>
          <p>DNI: 70584255</p>
          
        </div>
          </div>
          </Card.Body>
        </Card>
      </div>
    </div>
     

    <Card>  
      <Card.Body>

          <table className='table'>
              <thead>
                <tr>
                  <th scope="col">Items</th>
                  <th scope="col">producto</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Valor Unitario</th>
                  <th scope="col">Descuento</th>
                  <th scope="col">Importe de venta</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Casacas de talla s</td>
                  <td>01</td>
                  <td> S/35</td>
                  <td>S/0.0</td>
                  <td>S/35</td>
                </tr>
              </tbody>
          </table>
              
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

      




    <div className='d-flex align-items-center mb-3 mt-3 ml-3 justify-content-end'>

    <ul className="list-group w-50">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Sub total
    <span className="text-dark">s/35</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Descuento global (100%)
    <span className="text-dark">s/0.0</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Importe total
    <span className="text-dark">s/35</span>
  </li>
</ul>
                        
    </div>



    </MainContainer>
  );
};