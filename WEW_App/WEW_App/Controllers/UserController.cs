using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using UserAdminApp.Models;

namespace UserAdminApp.Controllers
{
    public class UserController : Controller
    {
        UserDataAccessLayer objUser = new UserDataAccessLayer();

        [HttpGet("[action]")]
        [Route("api/User/Index")]
        public IEnumerable<User> Index()
        {
            return objUser.GetAllUsers();
        }

        [HttpGet]
        [Route("api/User/CarDetails/{id}")]
        public User CarDetails(int id)
        {
            return objUser.GetCarDetails(id);
        }


        [HttpPost]
        [Route("api/User/Create")]
        public int Create([FromBody] User User)
        {
            return objUser.AddUser(User);
        }

        [HttpGet]
        [Route("api/User/Send/{mail}")]
        public String SendMail (string mail)
        {
            return objUser.SendMail(mail);
        }

        [HttpGet]
        [Route("api/User/Details/{id}")]
        public User Details(int id)
        {
            return objUser.GetUserData(id);
        }

        [HttpPut]
        [Route("api/User/Edit")]
        public int Edit([FromBody]User User)
        {
            return objUser.UpdateUser(User);
        }

        [HttpDelete]
        [Route("api/User/Delete/{id}")]
        public int Delete(int id)
        {
            return objUser.DeleteUser(id);
        }
    }
}
