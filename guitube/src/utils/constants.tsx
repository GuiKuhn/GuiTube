import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import TheatersIcon from "@mui/icons-material/Theaters";
import InternacionalIcon from "../assets/Escudo_do_Sport_Club_Internacional.png";

interface SideBarDisplay {
  name: string;
  icon: JSX.Element;
}

export const sideBarDisplay: SideBarDisplay[] = [
  { name: "Novos vídeos", icon: <HomeIcon /> },
  {
    name: "S.C. Internacional",
    icon: <img src={InternacionalIcon} style={{ height: "2.75vh" }} />,
  },
  { name: "Programação", icon: <CodeIcon /> },
  { name: "Videogame", icon: <SportsEsportsIcon /> },
  { name: "Tênis", icon: <SportsTennisIcon /> },
  { name: "Filmes", icon: <TheatersIcon /> },
  { name: "Futebol", icon: <SportsSoccerIcon /> },
];

export const logo =
  "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png";
