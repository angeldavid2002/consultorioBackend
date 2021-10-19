using System.Reflection.Metadata.Ecma335;
using System.IO.Pipes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;
using Datos;
namespace Logica
{
    public class PersonaService
    {
        private readonly ConsultorioContext _context;
        public PersonaService(ConsultorioContext context)
        {
            _context=context;
        }
        public GuardarPersonaResponse Guardar(persona persona)
        {
            try
            {
                var personaBuscada =_context.personas.Find(persona.identificacion);
                if (personaBuscada!=null)
                {
                    return new GuardarPersonaResponse("la persona ya esta registrada");
                }
                _context.personas.Add(persona);
                _context.SaveChanges();
                return new GuardarPersonaResponse(persona);
            }
            catch (Exception e)
            {
                return new GuardarPersonaResponse("error de la aplicacion:"+e.Message );
            }
        }
        public List<persona> ConsultarTodos()
        {
            List<persona> personas =_context.personas.ToList();
            return personas;
        }
    }
    public class GuardarPersonaResponse 
    {
        public GuardarPersonaResponse(persona persona)
        {
            Error = false;
            Persona = persona;
        }
        public GuardarPersonaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public persona Persona { get; set; }
    }
}