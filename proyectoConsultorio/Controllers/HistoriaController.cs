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
            var historias = historiaService.ConsultarTodos();
            if(historias!=null){
                return MapearConsultaHistorias(historias);
            }
            return new List<HistoriaViewModel>();
        }
        private IEnumerable<HistoriaViewModel> MapearConsultaHistorias(List<historia> historias)
        {
            List<HistoriaViewModel> historiaConsultada= new List<HistoriaViewModel>();
            foreach (var historia in historias)
            {
                HistoriaViewModel historiaMap=new HistoriaViewModel();
                historiaMap.idHistoria=historia.idHistoria;
                historiaMap.idPaciente=historia.idPaciente;
                historiaMap.persona=historia.persona;
                historiaMap.motivoConsulta=historia.motivoConsulta;
                historiaMap.antecedentesPaciente=historia.antecedentesPaciente;
                historiaMap.diagnostico=historia.diagnostico;
                historiaMap.planOrientacion=historia.planOrientacion;
                historiaConsultada.Add(historiaMap);
            }
            return historiaConsultada;
        }
        [HttpPost]
        public ActionResult<HistoriaViewModel> Post(HistoriaInputModel historiaInput)
        {
            historia historia = MapearHistoria(historiaInput);
            var response = historiaService.Guardar(historia);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.historia);
        }
        private historia MapearHistoria(HistoriaInputModel historiaInput)
        {
            var historia = new historia{
                idPaciente=historiaInput.idPaciente,
                motivoConsulta=historiaInput.motivoConsulta,
                antecedentesPaciente=historiaInput.antecedentesPaciente,
                diagnostico=historiaInput.diagnostico,
                planOrientacion=historiaInput.planOrientacion,
                persona=new persona{
                },
            };
            return historia;
        }
        [HttpPut]
        public ActionResult<Response> Put(HistoriaViewModel historiaViewModel)
        {
            historia historiaReq = MapearHistoriaView(historiaViewModel);
            var response = historiaService.actualizar(historiaReq);
            return response;
        }
        private historia MapearHistoriaView(HistoriaViewModel historiaViewModel)
        {
            var historia = new historia{
                idPaciente=historiaViewModel.idPaciente,
                idHistoria=historiaViewModel.idHistoria,
                motivoConsulta=historiaViewModel.motivoConsulta,
                antecedentesPaciente=historiaViewModel.antecedentesPaciente,
                diagnostico=historiaViewModel.diagnostico,
                planOrientacion=historiaViewModel.planOrientacion,
                persona=new persona{
                },
            };
            return historia;
        }
        [HttpDelete("{identificacion}")]
        public ActionResult<String> Delete([FromRoute]int identificacion)
        {
            String mensaje = historiaService.Eliminar(identificacion);
            return mensaje;
        }
    }
}