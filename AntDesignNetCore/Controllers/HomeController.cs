using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AntDesignNetCore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet(Name = "GetValues")]
        public IActionResult GetValues()
        {
            var values = new List<string>() {
                "gmail.com", "163.com", "qq.com"
            };
            return Json(values);
        }
    }
}
