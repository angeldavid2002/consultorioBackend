using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using proyectoConsultorio.Models;

namespace proyectoConsultorio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HistoriaController : ControllerBase
    {
        private readonly HistoriaService historiaService;
        public IConfiguration configuration { get;}
        public HistoriaController(ConsultorioContext _context)
        {
            historiaService = new HistoriaService(_context);
        }
        [HttpGet]
        public IEnumerable<HistoriaViewModel> Gets()
        {
            var personas = historiaService.ConsultarTodos().Select(p=> new PersonaViewModel(p));

            return personas;
        }
        private IEnumerable<HistoriaViewModel> MapearConsultaHistorias(List<historia> historias)
        {
            List<CitaViewModel> citasConsultadas= new List<CitaViewModel>();
            foreach (var historia in historias)
            {
                HistoriaViewModel historiaMap=new HistoriaViewModel();
                citaMap.idCita=cita.idCita;
                citaMap.idPersona=cita.persona.identificacion;
                citaMap.fechaCita=cita.fechaCita;
                citasConsultadas.Add(citaMap);
            }
            return citasConsultadas;
        }
    }
}