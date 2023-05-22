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
                //from Products prod
                 from prod in contexto.Products
                 //join Categories cat on prod.CategoryId=cat.CategoryId
                 join cat in contexto.Categories on prod.CategoryId equals cat.CategoryId
                 where prod.Discontinued == false
                 select new
                 {
                     Name = prod.ProductName,
                     Price = prod.UnitPrice,
                     Category = cat.CategoryName 
                     //Categoria=prod.Category.CategoryName
                 };

            return lista;
        }

        [HttpGet]
        [Route("GetActivos2Metodos")]
        public IEnumerable<Object> GetActivos2Metodos()
        {
            //"Programacion Web".Replace("r","R").Replace(" ","-").Replace("r","R")
            IEnumerable<Object> lista =
                 contexto.Products
                 .Where(producto => producto.Discontinued == false )
                 .Join(contexto.Categories,
                    producto=>producto.CategoryId,
                    categoria=>categoria.CategoryId,
                    (p, c) =>  new {
                        Nombre = p.ProductName,
                        Precio = p.UnitPrice,
                        Categoria = c.CategoryName,
                        Unidades = p.UnitsInStock
                    })
                 .Where(x=> x.Unidades>0);
                 

            return lista;
        }

        [HttpGet]
        [Route("InventarioXCategoria")]
        public IEnumerable<Object> GetInventarioPorCategoria()
        {
            IEnumerable<Object> lista =
                 //from Products prod
                 from prod in contexto.Products
                 where prod.Discontinued == false
                 //join Categories cat on prod.CategoryId=cat.CategoryId
                 join cat in contexto.Categories on prod.CategoryId equals cat.CategoryId
                 group new { prod, cat } by cat.CategoryName into prod_cat
                 select new
                 {
                     Categoria = prod_cat.Key,
                     Productos = prod_cat.Count(),
                     ValorInventario = prod_cat.Sum(pc=>pc.prod.UnitPrice*pc.prod.UnitsInStock)
                 };

            return lista;
        }

    }
}
