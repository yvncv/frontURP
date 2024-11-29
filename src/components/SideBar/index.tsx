import Link from "next/link";
import { Accordion } from "react-bootstrap";

export const SideBar = () => {
  return (
    <div className="sidebar--admin"> {/* Siempre visible */}
      <div>
        <img src="\logo-urp.png" alt="Logo URP" className="logo-urp" />
        <hr />
      </div>
      <ul>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            INFORMACIÓN PERSONAL
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            ACÁDEMICO
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            SERVICIOS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            GUIAS Y REGLAMENTOS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            CATÁLOGO ABSYNET
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            BASES DE DATOS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/administracion-salones">
            Administración de salones
          </Link>
        </li>
        <Accordion defaultActiveKey="0" className="acordeon-confes">
          <Accordion.Item eventKey="0">
            <Accordion.Header>CONFERENCIAS</Accordion.Header>
            <Accordion.Body>
              <Link className="nav-link" href="/solicitudes/">
                Solicitudes enviadas
              </Link>
              <Link className="nav-link" href="/solicitudes/solicitar-conferencia">
                Nueva solicitud
              </Link>
              <Link className="nav-link" href="/registro-asistencias">
                Registro de asistencias
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <li className="nav-item">
          <Link className="nav-link" href="/administrar-solicitudes">
            Administrar solicitudes de conferencias
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/relacion-conferencias">
            VER RELACIÓN DE CONFERENCIAS
          </Link>
        </li>
        <Accordion defaultActiveKey="0" className="acordeon-confes">
          <Accordion.Item eventKey="0">
            <Accordion.Header>CONFERENCIAS</Accordion.Header>
            <Accordion.Body>
              <Link className="nav-link" href="/proximas-conferencias">
                Próximas conferencias
              </Link>
              <Link className="nav-link" href="/repositorio">
                Repositorio de Conferencias
              </Link>
              <Link className="nav-link" href="/mis-conferencias">
                Mis conferencias
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </ul>
    </div>
  );
};
