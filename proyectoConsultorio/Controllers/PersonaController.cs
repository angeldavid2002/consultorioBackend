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
    public class PersonaController:ControllerBase
    {
        private readonly PersonaService personaservice;
        public IConfiguration configuration { get;}
        public PersonaController(ConsultorioContext _context)
        {
            personaservice = new PersonaService(_context);
        }
        [HttpGet]
        public IEnumerable<PersonaViewModel> Gets()
        {
            var personas = personaservice.ConsultarTodos().Select(p=> new PersonaViewModel(p));

            return personas;
        }
        // POST: api/Persona
        [HttpPost]
        public ActionResult<PersonaViewModel> Post(PersonaInputModel personaInput)
        {
            persona persona = MapearPersona(personaInput);
            var response = personaservice.Guardar(persona);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        } 
        private persona MapearPersona(PersonaInputModel personaInput)
        {
            var persona = new persona
            {
                identificacion = personaInput.identificacion,
                nombre = personaInput.nombre,
                apellido = personaInput.apellido,
                direccion= personaInput.direccion,
                añoNacimiento = personaInput.anoNacimiento,
                correo = personaInput.correo,
                telefono= personaInput.telefono
            };
            return persona;
        }
        // PUT: api/Persona/5
        [HttpPut("{identificacion}")]
        public ActionResult<string> Put(string identificacion, persona persona)
        {
            throw new NotImplementedException();
        }
    }
}