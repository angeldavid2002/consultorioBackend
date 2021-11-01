using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;

namespace proyectoConsultorio.Models
{
    public class HistoriaInputModel:HistoriaViewModel
    {
        public string idPaciente { get; set; }
    }
    public class HistoriaViewModel{
        public persona persona { get; set; }
        public string motivoConsulta { get; set; }
        public string antecedentesPaciente { get; set; }
        public string diagnostico { get; set; }
        public string planOrientacion { get; set; }
    }
}