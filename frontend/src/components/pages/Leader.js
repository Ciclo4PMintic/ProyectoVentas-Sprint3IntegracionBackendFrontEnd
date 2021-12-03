import { useState, useEffect } from "react";
import axios from "axios";
import "../css/main.css";
import "../css/formatoHome.css";
import "../plugins/fontawesome-free/css/all.min.css";
import "../dist/css/adminlte.min.css";
import Footer from "../Footer/Footer";
import HeaderLeader from "../Header/HeaderLeader";

export default function Admin() {
  return (
    <div>
      <HeaderLeader />
      <div>
        <h1>Esta es la pagina de administración</h1>
      </div>
    </div>
  );
}
