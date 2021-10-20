using System;
using Entidad;
namespace proyectoConsultorio
{
    public class CitaInputModel
    {
        public int idCita { get; set; }
        public DateTime fechaCita { get; set; }
        public string idPersona { get; set; }
        public persona persona { get; set; }
    }

    public class CitaViewModel:CitaInputModel
    {
        public CitaViewModel(){

        }
        public CitaViewModel(cita cita)
        {
            idCita=cita.idCita;
            fechaCita=cita.fechaCita;
            idPersona=cita.idPersona;
            persona=cita.persona;
        }
    }
}
