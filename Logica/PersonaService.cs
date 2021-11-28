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
        private CitaService citaService;
        public PersonaService(ConsultorioContext context)
        {
            _context=context;
            citaService= new CitaService(_context);
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
                return new GuardarPersonaResponse("error de la aplicacion: "+e.Message);
            }
        }
        public List<persona> ConsultarTodos()
        {
            List<persona> personas =_context.personas.ToList();
            return personas;
        }
        public GuardarPersonaResponse ConsultarUno(string identificacion)
        {
            try
            {
                persona persona =_context.personas.Find(identificacion);
                if(persona!= null){
                    return new GuardarPersonaResponse(persona);
                }
                return new GuardarPersonaResponse("no se encontro la identificacion: "+identificacion);
            }
            catch (System.Exception ex)
            {
                return new GuardarPersonaResponse(ex.Message);
            }
            
        }

        public String Eliminar(String identificacion)
        {
            try
            {   
                String mensaje;
                var persona = _context.personas.Find(identificacion);
                if(persona!=null){
                    mensaje=citaService.EliminarReferencias(identificacion);
                    _context.personas.Remove(persona);
                    _context.SaveChanges();
                    return "Se borro la persona con exito,"+mensaje;
                }
                return "Lo sentimos la identificacion "+identificacion+" no se encuentra registrada";
            }
            catch (Exception ex)
            {
                return "Error de la aplicacion: "+ex.Message;
            }
        }
        public Response actualizar(persona personaNueva)
        {
            try
            {
                var personaVieja = _context.personas.Find(personaNueva.identificacion);
                if(personaVieja!=null){
                    personaVieja.nombre = personaNueva.nombre;
                    personaVieja.apellido = personaNueva.apellido;
                    personaVieja.añoNacimiento= personaNueva.añoNacimiento;
                    personaVieja.telefono = personaNueva.telefono;
                    personaVieja.correo = personaNueva.correo;
                    personaVieja.direccion = personaNueva.direccion;
                    personaVieja.estado=personaNueva.estado;
                    _context.personas.Update(personaVieja);
                    _context.SaveChanges();
                    return new Response("se actualizaron los datos de la persona con identificacion: "+personaVieja.identificacion+" exitosamente");
                }
                return new Response("Lo sentimos la identificacion "+personaNueva.identificacion+" no se encuentra registrada"); 
            }
            catch (Exception ex)
            {
                return new Response("Error de la aplicacion: "+ex.Message+"",true);
            }
        }
        public Response actualizarEstado(String identificacion,String confirmacion){
            try
            {
                var personaVieja = _context.personas.Find(identificacion);
                if(personaVieja!=null){
                if(personaVieja.estado=="activo"){
                        personaVieja.estado="inactivo";
                    }else{
                       personaVieja.estado="activo";
                    }
                    _context.personas.Update(personaVieja);
                    _context.SaveChanges();
                    return new Response("se actualizaron los datos de la persona con identificacion: "+personaVieja.identificacion+" exitosamente");
                }
                return new Response("Lo sentimos la identificacion "+identificacion+" no se encuentra registrada"); 
            }
            catch (System.Exception ex)
            {
                return new Response("Error de la aplicacion: "+ex.Message+"");
            }
        }
    }
    public class Response{
        public bool Error { get; set; }
        public string mensaje { get; set; }
        public Response(String error,bool verificacion)
        {
            Error=verificacion;
            mensaje= error;
        }
        public Response(String mensaje)
        {
            this.mensaje=mensaje;
            Error=false;
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