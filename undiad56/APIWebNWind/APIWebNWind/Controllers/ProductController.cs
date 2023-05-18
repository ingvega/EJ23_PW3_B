using Microsoft.AspNetCore.Mvc;
using APIWebNWind.Data;
using APIWebNWind.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Xml.Linq;

namespace APIWebNWind.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly NorthwindContext contexto;

        public ProductController(NorthwindContext context)
        {
            contexto = context;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return contexto.Products.OrderBy(p => p.ProductName);

        }

        [HttpGet]
        [Route("GetActivos")]
        public IEnumerable<Product> GetActivos()
        {
            /*Product p = new Product();
            p.ProductName = "X";
            p.UnitPrice = 20;
            Product p1 = new Product()
            {
                ProductName = "X",
                UnitPrice = 20
            };*/

            IEnumerable<Product> lista =
                 from prod in contexto.Products
                 where prod.Discontinued == false
                 select new Product()
                 {
                     ProductName = prod.ProductName,
                     UnitPrice = prod.UnitPrice
                 };
            return lista;
        }

        [HttpGet]
        [Route("GetActivos2")]
        public IEnumerable<Object> GetActivos2()
        {
            IEnumerable<Object> lista =
                 from prod in contexto.Products
                 
                 where prod.Discontinued == false
                 select new
                 {
                     Name = prod.ProductName,
                     Price = prod.UnitPrice,
                     Categoria=prod.Category.CategoryName
                 };

            return lista;
        }

        [HttpGet]
        [Route("GetActivos2Metodos")]
        public IEnumerable<Object> GetActivos2Metodos()
        {
            IEnumerable<Object> lista =
                 contexto.Products.
                 Where(producto => producto.Discontinued == false)
                 .Join(contexto.Categories,
                 producto=>producto.CategoryId,
                 categoria=>categoria.CategoryId,
                (p, c) => new {
                     Name = p.ProductName,
                     Price = p.UnitPrice,
                     Categoria = c.CategoryName
                 });
                 

            return lista;
        }
    }
}
