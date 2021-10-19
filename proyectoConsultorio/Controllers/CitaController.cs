using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace proyectoConsultorio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class CitaController : ControllerBase
    {
        private readonly CitaService citaservice;
        public IConfiguration configuration { get;}
        public CitaController(ConsultorioContext _context)
        {
            citaservice = new CitaService(_context);
        }
    }
}