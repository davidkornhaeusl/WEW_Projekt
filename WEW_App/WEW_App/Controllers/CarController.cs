using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using UserAdminApp.Models;

namespace UserAdminApp.Controllers
{
    public class CarController : Controller
    {
        CarDataAccessLayer objCar = new CarDataAccessLayer();

        [HttpGet("[action]")]
        [Route("api/Car/Index")]
        public IEnumerable<Car> Index()
        {
            return objCar.GetAllCars();
        }

        [HttpPost]
        [Route("api/Car/Create")]
        public int Create([FromBody] Car car)
        {
            return objCar.AddCar(car);
        }

        [HttpGet]
        [Route("api/Car/Details/{id}")]
        public Car Details(int id)
        {
            return objCar.GetCarData(id);
        }

        [HttpPut]
        [Route("api/Car/Edit")]
        public int Edit([FromBody]Car car)
        {
            return objCar.UpdateCar(car);
        }

        [HttpPut]
        [Route("api/Car/Plate")]
        public int UpdatePlate(string Plate, int Id)
        {
            return objCar.UpdatePlate(Plate, Id);
        }

        [HttpDelete]
        [Route("api/Car/Delete/{id}")]
        public int Delete(int id)
        {
            return objCar.DeleteCar(id);
        }
        
    }
}
