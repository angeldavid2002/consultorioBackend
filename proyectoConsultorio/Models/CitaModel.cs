using System;
using Entidad;
namespace proyectoConsultorio
{
    public class CitaInputModel
    {
        public DateTime fechaCita { get; set; }
        public string idPersona { get; set; }
        public persona persona { get; set; }
    }

    public class CitaViewModel
    {
        public int idCita { get; set; }
        public DateTime fechaCita { get; set; }
        public persona persona { get; set; }
        public CitaViewModel(){

        }
        public CitaViewModel(cita cita)
        {
            idCita=cita.idCita;
            fechaCita=cita.fechaCita;
            persona=cita.persona;
        }
    }
}
