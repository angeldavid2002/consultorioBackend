using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entidad;

namespace Logica
{
    public class HistoriaService
    {
        private readonly ConsultorioContext _context;
        public HistoriaService(ConsultorioContext context)
        {
            _context=context;
        }
        public GuardarHistoriaResponse Guardar(historia historia)
        {
            try
            {
                _context.historias.Add(historia);
                _context.SaveChanges();
                return new GuardarHistoriaResponse(historia);
            }
            catch (Exception e)
            {
                return new GuardarHistoriaResponse("error de la aplicacion: "+e.Message );
            }
        }
        public List<historia> ConsultarTodos()
        {
            List<historia> historias =_context.historias.ToList();
            return historias;
        }
        public String Eliminar(String identificacion)
        {
            try
            {   
                var historia = _context.historias.Find(identificacion);
                if(historia!=null){
                    _context.historias.Remove(historia);
                    _context.SaveChanges();
                    return "Se borro la persona con exito";
                }
                return "Lo sentimos la identificacion "+identificacion+" no se encuentra registrada";
            }
            catch (Exception ex)
            {
                return "Error de la aplicacion: "+ex.Message;
            }
        }
        public String actualizar(historia historiaNueva)
        {
            try
            {
                var historiaVieja = _context.historias.Find(historiaNueva.idHistoria);
                if(historiaVieja!=null){
                    historiaVieja.idPaciente = historiaNueva.idPaciente;
                    historiaVieja.motivoConsulta = historiaNueva.motivoConsulta;
                    historiaVieja.antecedentesPaciente= historiaNueva.antecedentesPaciente;
                    historiaVieja.diagnostico = historiaNueva.diagnostico;
                    historiaVieja.planOrientacion = historiaNueva.planOrientacion;
                    _context.historias.Update(historiaVieja);
                    _context.SaveChanges();
                    return "se actualizaron los datos de la persona con identificacion: "+historiaVieja.idHistoria+" exitosamente";
                }
                return "Lo sentimos la identificacion "+historiaNueva.idHistoria+" no se encuentra registrada"; 
            }
            catch (Exception ex)
            {
                return "Error de la aplicacion: "+ex.Message+"";
            }
        }
        
    }
    public class GuardarHistoriaResponse
    {
        public GuardarHistoriaResponse(historia historia)
        {
            Error = false;
            this.historia = historia;
        }
        public GuardarHistoriaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public historia historia { get; set; }
    }
}