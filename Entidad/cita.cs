using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Entidad
{
    public class cita
    {
        [Key]
        public int idCita { get; set; }
        public DateTime fechaCita { get; set; }
        public string idPersona { get; set; }
        public persona persona { get; set; }
    }
}