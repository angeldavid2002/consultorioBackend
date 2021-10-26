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
            _context=context;
        }
        public GuardarCitaResponse Guardar(cita cita)
        {
            try
            {
                var persona =_context.personas.Find(cita.idPersona) ;
                if (persona!=null)
                {
                    cita.persona=_context.personas.Find(cita.idPersona);
                    _context.citas.Add(cita);
                    _context.SaveChanges();
                    return new GuardarCitaResponse(cita);
                }
                return new GuardarCitaResponse("la persona no se encuentra registrada");
                
            }
            catch (Exception e)
            {
                return new GuardarCitaResponse("error de la aplicacion:"+e.Message );
            }
        }
        public List<cita> ConsultarTodos()
        {
            List<cita> citas =_context.citas.ToList();
            foreach (var cita in citas)
            {
                cita.persona=_context.personas.Find(cita.idPersona);
            }
            return citas;
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
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public cita Cita { get; set; }
    }
}