using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;

namespace Logica
{
    public class CitaService
    {
        private readonly ConsultorioContext _context;
        public CitaService(ConsultorioContext context)
        {
            _context = context;
        }
        public GuardarCitaResponse Guardar(cita cita)
        {
            try
            {
                var persona = _context.personas.Find(cita.idPersona);
                if (persona != null)
                {
                    cita.persona = _context.personas.Find(cita.idPersona);
                    _context.citas.Add(cita);
                    _context.SaveChanges();
                    return new GuardarCitaResponse(cita);
                }
                return new GuardarCitaResponse("la persona no se encuentra registrada");

            }
            catch (Exception e)
            {
                return new GuardarCitaResponse("error de la aplicacion:" + e.Message);
            }
        }
        public List<cita> ConsultarTodos()
        {
            List<cita> citas = _context.citas.ToList();
            foreach (var cita in citas)
            {
                cita.persona = _context.personas.Find(cita.idPersona);
            }
            return citas;
        }
        public String EliminarReferencias(String identificacion)
        {
            String mensaje="no paso";
            try
            {
                var citas = this.ConsultarTodos();
                if (citas != null)
                {
                    foreach (var cita in citas)
                    {
                        if (cita.idPersona.Equals(identificacion))
                        {
                            mensaje=Eliminar(cita.idCita);
                        }
                    }
                    return "Se borraron las citas asociadas con exito";
                }
                return "no hay citas por borrar";
            }
            catch (Exception ex)
            {
                return "Error de la aplicacion: " + ex.Message+" "+mensaje;
            }

        }
        public String Eliminar(int id)
        {
            try
            {
                var cita = _context.citas.Find(id);
                if (cita != null)
                {
                    _context.citas.Remove(cita);
                    _context.SaveChanges();
                    return "Se borro la cita con exito";
                }
                return "Lo sentimos la cita " + cita.idCita + " no se encuentra registrada";
            }
            catch (Exception ex)
            {
                return "Error de la aplicacion: " + ex.Message + "";
            }
        }
        public GuardarCitaResponse actualizar(cita citaNueva)
        {
            try
            {
                var citaVieja = _context.citas.Find(citaNueva.idCita);
                if(citaVieja!=null){
                    citaVieja.fechaCita = citaNueva.fechaCita;
                    citaVieja.idPersona = citaNueva.idPersona;
                    citaVieja.persona= _context.personas.Find(citaVieja.idPersona);
                    _context.Update(citaVieja);
                    _context.SaveChanges();
                    return new GuardarCitaResponse( "se actualizaron los datos de la persona con identificacion: "+citaVieja.idCita+" exitosamente",false);
                }
                return new GuardarCitaResponse("Lo sentimos la identificacion "+citaVieja.idCita+" no se encuentra registrada"); 
            }
            catch (Exception ex)
            {
                return new GuardarCitaResponse("Error de la aplicacion: "+ex.Message+"");
            }
        }
    }
    public class GuardarCitaResponse
    {
        public GuardarCitaResponse(cita cita)
        {
            Error = false;
            Cita = cita;
        }
        public GuardarCitaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public GuardarCitaResponse(string mensaje,bool error)
        {
            Error = error;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public cita Cita { get; set; }
    }
}