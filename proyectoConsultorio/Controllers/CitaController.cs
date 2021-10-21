using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace proyectoConsultorio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class CitaController : ControllerBase
    {
        private readonly CitaService citaservice;
        public IConfiguration configuration { get;}
        public CitaController(ConsultorioContext _context)
        {
            citaservice = new CitaService(_context);
        }
        [HttpGet]
        public IEnumerable<CitaViewModel> Gets()
        {
            var cita = citaservice.ConsultarTodos().Select(p=> new CitaViewModel(p));
            return cita;
        }
        // POST: api/Cita
        [HttpPost]
        public ActionResult<CitaViewModel> Post(CitaInputModel citaInput)
        {
            cita cita = MapearCita(citaInput);
            var response = citaservice.Guardar(cita);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Cita);
        }
        private cita MapearCita(CitaInputModel citaInput)
        {
            var cita = new cita{
                idCita=citaInput.idCita,
                fechaCita=citaInput.fechaCita,
                idPersona=citaInput.idPersona,
                persona=citaInput.persona,
            };
            return cita;
        }
        // PUT: api/Cita/5
        [HttpPut("{identificacion}")]
        public ActionResult<string> Put(string identificacion, cita cita)
        {
            throw new NotImplementedException();
        }
    }
}