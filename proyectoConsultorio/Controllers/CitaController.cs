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
            var citas = citaservice.ConsultarTodos();
            if(citas!=null){
                return MapearConsultaCitas(citas);
            }
            return new List<CitaViewModel>();
        }
        private IEnumerable<CitaViewModel> MapearConsultaCitas(List<cita> citas)
        {
            List<CitaViewModel> citasConsultadas= new List<CitaViewModel>();
            foreach (var cita in citas)
            {
                CitaViewModel citaMap=new CitaViewModel();
                citaMap.idCita=cita.idCita;
                citaMap.idPersona=cita.persona.identificacion;
                citaMap.fechaCita=cita.fechaCita;
                citasConsultadas.Add(citaMap);
            }
            return citasConsultadas;
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
                fechaCita=citaInput.fechaCita,
                idPersona=citaInput.idPersona,
                persona=new persona{
                },
            };
            return cita;
        }
        // PUT: api/Cita/5
        [HttpPut("{citaId}")]
        public ActionResult<CitaViewModel> Put(CitaInputModel citaInput,[FromRoute]int citaId)
        {
            cita citaReq = MapearCita(citaInput);
            citaReq.idCita=citaId;
            var response = citaservice.actualizar(citaReq);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            var retorno = MapearConsultaCita(response.Cita);
            return Ok(retorno);
        }
        private CitaViewModel MapearConsultaCita(cita cita){
            CitaViewModel citaView = new CitaViewModel();
            citaView.idCita=cita.idCita;
            citaView.idPersona=cita.persona.identificacion;
            citaView.fechaCita=cita.fechaCita;
            return citaView;
        }
        [HttpDelete("{identificacion}")]
        public ActionResult<String> Delete([FromRoute]int identificacion)
        {
            String mensaje = citaservice.Eliminar(identificacion);
            return mensaje;
        }
    }
}