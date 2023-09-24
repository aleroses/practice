import React from "react";
import "./stylesheets/App.css";
import { Testimony } from "./components/Testimony";

function App() {
  return (
    <React.Fragment>
      <h1>
        Esto es lo que dicen nuestros alumnos sobre
        FreeCodeCamp:
      </h1>
      <main className="main">
        <Testimony
          name="Shawn Wang"
          country="Singapur"
          image="shawn"
          jobtitle="Ingeniero de Software"
          company="Amazon"
          comment="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />
        <Testimony
          name="Sarah Chima"
          country="Nigeria"
          image="sarah"
          jobtitle="Ingeniero de Software"
          company="ChatDesk"
          comment="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
        <Testimony
          name="Emma Bostian"
          country="Suecia"
          image="emma"
          jobtitle="Ingeniero de Software"
          company="Spotify"
          comment="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </main>
    </React.Fragment>
  );
}

export default App;
