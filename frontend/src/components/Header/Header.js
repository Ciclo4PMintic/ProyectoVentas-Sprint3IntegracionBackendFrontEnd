import '../css/main.css'
import '../css/formatoHome.css'
import '../plugins/fontawesome-free/css/all.min.css'
import'../dist/css/adminlte.min.css'

import {Link} from 'react-router-dom'

const Header = () => {

  const logoutHandler=()=>{
    localStorage.removeItem("authToken");

};
    return(


      

       
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark gradient">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            <li className="nav-item">
                <Link to="/home">    <a id="axis"className="nav-link" >AXIS <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                <Link to="/home">    <a className="nav-link" >Home <span className="sr-only">(current)</span></a></Link>
                </li>
              

              
                <li className="nav-item">
                <a className="nav-link" >Admin</a>
               <ul className='dropdown'>
               <Link to="/user"><a className="nav-link" >Gestion Usuarios</a></Link>
               <Link to="/project"><a className="nav-link" >Gestionar Proyectos</a></Link>
               </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" >Estudiante</a>
               <ul className='dropdown'>
               <Link to="/userUpdate"><a className="nav-link" >Actualizar Datos</a></Link>
               <Link to="/projectList"><a className="nav-link" >Inscripcion Proyectos</a></Link>
               <Link to="/studentProjects"><a className="nav-link" >Mis Proyectos</a></Link>

               </ul>
                </li>

                

                <li className="nav-item">
                <a className="nav-link" >Lider</a>
               <ul className='dropdown'>
               <Link to="/projectUpdate"><a className="nav-link" >Mis Proyectos</a></Link>
               <Link to="/userUpdate"><a className="nav-link" >Actualizar Datos</a></Link>
               <Link to="/studentList"><a className="nav-link" >Ingreso Estudiantes</a></Link>
               <Link to="/inscriptionProject"><a className="nav-link" >Gestionar Inscripciones</a></Link>
               </ul>
                </li>
                
               
                </ul>
                <ul class="navbar-nav navbar-right ">

                <li className="nav">
                <Link to="/login"><a id="logout" className="nav-link" onClick={logoutHandler}>Logout</a></Link>
                </li>
               
            

            </ul>
            </div>
    </nav>
    </header>


      )

};

export default Header;