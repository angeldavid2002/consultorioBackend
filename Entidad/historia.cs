using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Entidad
{
    public class historia
    {
        public historia()
        {
        }
        [Key]
        public int idHistoria { get; set; }
        public string idPaciente { get; set; }
        public persona persona { get; set; }
        public string motivoConsulta { get; set; }
        public string antecedentesPaciente { get; set; }
        public string diagnostico { get; set; }
        public string planOrientacion { get; set; }
        
        
    }
}