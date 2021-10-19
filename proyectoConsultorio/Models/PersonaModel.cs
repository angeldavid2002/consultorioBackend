using System;
using Entidad;
namespace proyectoConsultorio
{
    public class PersonaInputModel
    {
        public String identificacion { get; set; }
        public String nombre { get; set; }
        public String apellido { get; set; }
        public String direccion { get; set; }
        public DateTime añoNacimiento { get; set; }
        public String correo { get; set; }
        public String telefono { get; set; }
    }

    public class PersonaViewModel:PersonaInputModel
    {
        public PersonaViewModel(){

        }
        public PersonaViewModel(persona persona)
        {
            identificacion=persona.identificacion;
            nombre=persona.nombre;
            apellido=persona.apellido;
            direccion=persona.direccion;
            añoNacimiento=persona.añoNacimiento;
            correo=persona.correo;
            telefono=persona.telefono;
        }
    }
}
