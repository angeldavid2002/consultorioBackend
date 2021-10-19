using System;

namespace proyectoConsultorio
{
    public class PersonaInputModel
    {
        public PersonaInputModel()
        {
        }
        public String identificacion { get; set; }
        public String nombre { get; set; }
        public String apellido { get; set; }
        public String direccion { get; set; }
        public DateTime añoNacimiento { get; set; }
        public String correo { get; set; }
        public String telefono { get; set; }
    }
}