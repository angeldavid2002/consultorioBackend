using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entidad
{
    public class cita
    {
        public int idCita { get; set; }
        public DateTime fechaCita { get; set; }
        public string idPersona { get; set; }
        public persona persona { get; set; }
    }
}