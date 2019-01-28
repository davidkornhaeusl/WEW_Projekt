using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace UserAdminApp.Models
{
    public class CarDataAccessLayer
    {
        string connectionString = UserAdminApp.Properties.Resources.ConString.ToString();

        public int AddCar(Car car)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("AddCar", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Brand", car.Brand);
                    cmd.Parameters.AddWithValue("@Type", car.Type);
                    cmd.Parameters.AddWithValue("@Year", car.Year);
                    cmd.Parameters.AddWithValue("@Plate", car.Plate);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<Car> GetAllCars()
        {
            try
            {
                List<Car> lstcar = new List<Car>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("GetAllCars", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Car car = new Car();
                        car.Id = Convert.ToInt32(rdr["ID"]);
                        car.Brand = rdr["BRAND"].ToString();
                        car.Type = rdr["TYPE"].ToString();
                        car.Year = rdr["YEAR"].ToString();
                        car.Plate = rdr["PLATE"].ToString();
                        lstcar.Add(car);
                    }
                    con.Close();
                }
                return lstcar;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateCar(Car car)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("UpdateCar", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ID", car.Id);
                    cmd.Parameters.AddWithValue("@BRAND", car.Brand);
                    cmd.Parameters.AddWithValue("@TYPE", car.Type);
                    cmd.Parameters.AddWithValue("@YEAR", car.Year);
                    cmd.Parameters.AddWithValue("@PLATE", car.Plate);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int UpdatePlate(string plate, int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "UPDATE CARS SET PLATE= '" + plate + "' WHERE ID= " + id + ";";
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Car GetCarData(int id)
        {
            try
            {
                Car car = new Car();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM Cars WHERE ID= " + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        car.Id = Convert.ToInt32(rdr["ID"]);
                        car.Brand = rdr["BRAND"].ToString();
                        car.Type = rdr["TYPE"].ToString();
                        car.Year = rdr["YEAR"].ToString();
                        car.Plate = rdr["PLATE"].ToString();
                    }
                }
                return car;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteCar(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("DeleteCar", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ID", id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
        
    }
}
