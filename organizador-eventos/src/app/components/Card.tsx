import { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";

export const Card = () =>{
    const [response, setResponse] = useState();
    const getData = async () => {
      const dataEvents = await  getEvents();
      setResponse(dataEvents);
    }
  
    useEffect(()=>{
      getData();
    }, []);
  
    return (
      <>
        <div>
        {
      response && response.data.map((event => {
        return  <>
        <p>Titulo: {event.attributes.Titulo}</p>
        <p>descripcion: {event.attributes.Descripcion}</p>
        <p>Presupuesto: {event.attributes.Presupuesto}</p>
        <p>Fecha: {event.attributes.Fecha}</p>
        {
          event.attributes.invitados.data.map((invi=>{
            return <>
            <p>Nombre Invitado: {invi.attributes.Nombre}</p>
            <p>Telefono Invitado: {invi.attributes.Telefono}</p>
            </>
          }))
        }
        {
          event.attributes.actividads.data.map((acti=>{
            return <p>Actividad: {acti.attributes.Nombre}</p>
          }))
        }
        
        
        
        </>
      }))
    }
          
        </div>
      </>
    )
  }