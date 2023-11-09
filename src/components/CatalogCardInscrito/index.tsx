import { Card } from "react-bootstrap";
import { Catalog } from "../../types/Catalog";
import { User } from "../../types/User";
import ModalInscribir from "../BotonModal";
import ModalMaterial from "../BotonMaterial";

export const CatalogCardInscrito = ({ catalog }: { catalog: Catalog }) => {
  // const { addProductToCart, cart } = useCart();
  // const { inventories } = useResponsivePageContext();
  
  return (
    <Card key={`catalog-${catalog.id}`}>
      <div className="cont-img">
        <Card.Img
          variant="top"
          src="http://localhost:1338/uploads/SERVICIO_DIGITAL_MARKETING_CONSULTING_127a33d433.jpg"
        />
      </div>

      <Card.Body className="card-body-inscrito">
        <Card.Title>{catalog.tema_conferencia}</Card.Title>
        <p className="nombre-expositor">Dirigido por: {catalog.expositor}</p>
        <div className="card-inscrito">
          <div className="card-inscrito-seccion-texto">
            <p className="card-inscrito-texto">
              <img src="\calendario-icon-black.svg" alt="fecha" />
              {catalog.fecha} -{" "}
              {catalog.hora === null ? "" : catalog.hora.slice(0, 5)}
            </p>

            <p className="card-inscrito-texto">
              <img src="\salon-icon-black.svg" alt="salon" />
              {catalog.salon}
            </p>
          </div>
          <div className="card-inscrito-seccion-boton">
            {catalog.repositorio ? (
              <a href={catalog.repositorio} target="_blank">VER MATERIAL</a>
            ) : (
              <span>MATERIAL NO DISPONIBLE</span>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
