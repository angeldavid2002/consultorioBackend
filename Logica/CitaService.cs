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
                var citaBuscada =_context.citas.Find(cita.idCita);
                if (citaBuscada!=null)
                {
                    return new GuardarCitaResponse("la cita ya esta registrada");
                }
                _context.citas.Add(cita);
                _context.SaveChanges();
                return new GuardarCitaResponse(cita);
            }
            catch (Exception e)
            {
                return new GuardarCitaResponse("error de la aplicacion:"+e.Message );
            }
        }
        public List<cita> ConsultarTodos()
        {
            List<cita> cita =_context.citas.ToList();
            return cita;
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