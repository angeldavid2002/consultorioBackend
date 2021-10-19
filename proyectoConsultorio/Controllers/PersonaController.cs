using Datos;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace proyectoConsultorio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonaController:ControllerBase
    {
        private PersonaService personaservice;
        public IConfiguration configuration { get;}
        public PersonaController(ConsultorioContext _context)
        {
            personaservice = new PersonaService(_context);
        }
        
    }
}