using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace proyectoConsultorio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonaController : ControllerBase
    {
        private readonly PersonaService personaservice;
        public IConfiguration configuration { get; }
        public PersonaController(ConsultorioContext _context)
        {
            personaservice = new PersonaService(_context);
        }
        [HttpGet]
        public IEnumerable<PersonaViewModel> Gets()
        {
            var personas = personaservice.ConsultarTodos().Select(p => new PersonaViewModel(p));
            return personas;
        }
        [HttpGet("{identificacion}")]
        public GuardarPersonaViewResponse Get([FromRoute] string identificacion)
        {
            var persona = personaservice.ConsultarUno(identificacion);
            if(persona.Error){
                return new GuardarPersonaViewResponse(persona.Mensaje);
            }else{
                return new GuardarPersonaViewResponse(persona.Persona);
            }
        }
        public class GuardarPersonaViewResponse
        {
            public GuardarPersonaViewResponse(persona persona)
            {
                Error = false;
                Persona = new PersonaViewModel(persona);
            }
            public GuardarPersonaViewResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public PersonaViewModel Persona { get; set; }
        }
        // POST: api/Persona
        [HttpPost]
        public ActionResult<PersonaViewModel> Post(PersonaInputModel persona)
        {
            var personaMapeada = MapearPersona(persona);
            var response = personaservice.Guardar(personaMapeada);
            if (response.Error)
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        }
        [HttpDelete("{identificacion}")]
        public ActionResult<String> Delete([FromRoute] String identificacion)
        {
            String mensaje = personaservice.Eliminar(identificacion);
            return mensaje;
        }
        private persona MapearPersona(PersonaInputModel personaInput)
        {
            var persona = new persona
            {
                identificacion = personaInput.identificacion,
                nombre = personaInput.nombre,
                apellido = personaInput.apellido,
                direccion = personaInput.direccion,
                añoNacimiento = personaInput.anoNacimiento,
                correo = personaInput.correo,
                telefono = personaInput.telefono,
                estado = personaInput.estado
            };
            return persona;
        }
        // PUT: api/Persona/5
        [HttpPut]
        public ActionResult<Response> Put(PersonaInputModel personaInputModel)
        {
            persona persona = MapearPersona(personaInputModel);
            var respuesta = personaservice.actualizar(persona);
            return respuesta;

        }
        [HttpPut("{identificacion}/{confirmacion}")]
        public ActionResult<Response> Put([FromRoute] String identificacion, [FromRoute] String confirmacion)
        {
            var respuesta = personaservice.actualizarEstado(identificacion, confirmacion);
            return respuesta;
        }

    }

}