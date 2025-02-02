import Link from "next/link";
import { useResponsivePageContext } from "../ResponsivePage/context";
import { Button, Dropdown, Accordion } from "react-bootstrap";
import Image from 'next/image';
import { useSidebarContext } from '../SideBar/SidebarContext';

export const SideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  const { user } = useResponsivePageContext();
  return (
    <div className={`sidebar--admin ${isSidebarOpen ? 'active' : ''}`}>
      <div>
      <button onClick={toggleSidebar} className="close-sidebar"><img src="\menu.svg" alt="Logo" /></button>
        <img src="\logo-urp.png" alt="" className="logo-urp" />
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
        {
          // ROLE 4 ADMINISTRADOR
          user?.role.id === 1 && (
            <>
              <li className="nav-item">
                <Link className="nav-link" href="/administracion-salones">
                  Administración de salones
                </Link>
              </li>
            </>
          )
        }
        {
          // ROLE 3 DOCENTE
          user?.role.id === 7 && (
            <>
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
          </>
          )
        }
        {
          // ROLE 6 CENTRO DE EXTENSION
          user?.role.id === 6 && (
            <li className="nav-item">
              <Link className="nav-link" href="/administrar-solicitudes">
                Administrar solicitudes de conferencias
              </Link>
            </li>
          )
        }
        {
          // ROLE 5 SECRETARIA
          user?.role.id === 5 && (
            <>
              <li className="nav-item">
                <Link className="nav-link" href="/administrar-solicitudes">
                  Administrar solicitudes de conferencias
                </Link>
                <Link className="nav-link" href="/relacion-conferencias">
                  VER RELACIÓN DE CONFERENCIAS
                </Link>
              </li>
            </>
          )
        }
        {
          // ROLE 3 ALUMNO
          user?.role.id === 3 && (
            <>
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
            </>
          )
        }
      </ul>
    </div>
  );
};
