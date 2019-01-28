using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using UserAdminApp.Models;

namespace UserAdminApp.Controllers
{
    public class CarController : Controller
    {
        CarDataAccessLayer objUser = new CarDataAccessLayer();

        [HttpGet("[action]")]
        [Route("api/Car/Index")]
        public IEnumerable<Car> Index()
        {
            return objUser.GetAllCars();
        }

        [HttpPost]
        [Route("api/Car/Create")]
        public int Create([FromBody] Car car)
        {
            return objUser.AddCar(car);
        }

        [HttpGet]
        [Route("api/Car/Details/{id}")]
        public Car Details(int id)
        {
            return objUser.GetCarData(id);
        }

        [HttpPut]
        [Route("api/Car/Edit")]
        public int Edit([FromBody]Car car)
        {
            return objUser.UpdateCar(car);
        }

        [HttpPut]
        [Route("api/Car/Plate")]
        public int UpdatePlate([FromBody]Car car)
        {
            return objUser.UpdatePlate(car.Plate, car.Id);
        }

        [HttpDelete]
        [Route("api/Car/Delete/{id}")]
        public int Delete(int id)
        {
            return objUser.DeleteCar(id);
        }
    }
}
