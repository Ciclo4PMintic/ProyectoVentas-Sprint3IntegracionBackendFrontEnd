import { useState, useEffect } from "react";
import axios from "axios";
import "../css/main.css";
import "../css/formatoHome.css";
import "../plugins/fontawesome-free/css/all.min.css";
import "../dist/css/adminlte.min.css";
import HeaderAdmin from "../Header/HeaderAdmin";
import Footer from "../Footer/Footer";
import Home from "../pages/Home";

export default function Admin() {
  return (
    <div>
      <HeaderAdmin />
    </div>
  );
}
