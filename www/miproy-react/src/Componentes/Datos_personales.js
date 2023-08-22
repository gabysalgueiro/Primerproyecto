import React from 'react'

export const Datos_personales = () => {

    let nombre_completo="Gabriela Victoria Salgueiro Vargas";
    let correo_personal="gabriela.salgueiro@gmail.com";
    let telefono="+591-75665315"
    let profesion="Ingeniería de Sistemas";
    let objetivo="Diseñar y crear nuevos software y hardware para agilizar el proceso y resultados de una empresa u organización. Diseñar, mantener y proteger sitios web. Investigar y sintetizar información específica para diseñar y desarrollar sistemas informáticos. Investigar y analizar las diferentes necesidades de los usuarios."
  return (
    <div>
      <h1> <b> Datos Personales </b> </h1>
      <h3> <b> Nombre Completo: </b> {nombre_completo}</h3>
      <h3> <b>Correo Personal :</b>{correo_personal}</h3>
      <h3> <b> Celular: </b> {telefono}</h3>
      <h3> <b> Profesion: </b> {profesion}</h3>
      <p> <b> Objetivo: </b>
        <hr/> {objetivo}</p>
    </div>
  )
}
