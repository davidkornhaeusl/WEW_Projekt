using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAdminApp.Models
{
    public class User
    {
        private int _Id;
        private string _FirstName;
        private string _LastName;
        private string _Gender;
        private string _City;
        private int _Age;

        private string _Mail;

        public string Mail
        {
            get { return _Mail; }
            set { _Mail = value; }
        }


        public int Id
        {
            get { return _Id; }
            set { _Id = value; }
        }

        public string Firstname
        {
            get { return _FirstName; }
            set { _FirstName = value; }
        }

        public string Lastname
        {
            get { return _LastName; }
            set { _LastName = value; }
        }

        public string Gender
        {
            get { return _Gender; }
            set { _Gender = value; }
        }

        public string City
        {
            get { return _City; }
            set { _City = value; }
        }
        public int Age
        {
            get { return _Age; }
            set { _Age = value; }
        }
    }
}
