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
    public class UserDataAccessLayer
    {
        string connectionString = UserAdminApp.Properties.Resources.ConString.ToString();

        public int AddUser(User user)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("AddUser", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@FIRSTNAME", user.Firstname);
                    cmd.Parameters.AddWithValue("@LASTNAME", user.Lastname);
                    cmd.Parameters.AddWithValue("@GENDER", user.Gender);
                    cmd.Parameters.AddWithValue("@CITY", user.City);
                    cmd.Parameters.AddWithValue("@AGE", user.Age);
                    cmd.Parameters.AddWithValue("@MAIL", user.Mail);
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

        public IEnumerable<User> GetAllUsers()
        {
            try
            {
                List<User> lstuser = new List<User>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("GetAllUsers", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        User user = new User();
                        user.Id = Convert.ToInt32(rdr["ID"]);
                        user.Firstname = rdr["FIRSTNAME"].ToString();
                        user.Lastname = rdr["LASTNAME"].ToString();
                        user.Gender = rdr["GENDER"].ToString();
                        user.City = rdr["CITY"].ToString();
                        user.Age = Convert.ToInt32(rdr["AGE"]);
                        user.Mail = rdr["MAIL"].ToString();
                        lstuser.Add(user);
                    }
                    con.Close();
                }
                return lstuser;
            }
            catch
            {
                throw;
            }
        }

        public User GetCarDetails(int cardId)
        {
            try
            {
                User lstuser = new User();
                /////////qöfewgharöfehatdhjq

                return lstuser;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateUser(User user)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("UpdateUser", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ID", user.Id);
                    cmd.Parameters.AddWithValue("@FIRSTNAME", user.Firstname);
                    cmd.Parameters.AddWithValue("@LASTNAME", user.Lastname);
                    cmd.Parameters.AddWithValue("@GENDER", user.Gender);
                    cmd.Parameters.AddWithValue("@CITY", user.City);
                    cmd.Parameters.AddWithValue("@AGE", user.Age);
                    cmd.Parameters.AddWithValue("@MAIL", user.Mail);
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

        public User GetUserData(int id)
        {
            try
            {
                User user = new User();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM Users WHERE ID= " + id;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        user.Id = Convert.ToInt32(rdr["ID"]);
                        user.Firstname = rdr["FIRSTNAME"].ToString();
                        user.Lastname = rdr["LASTNAME"].ToString();
                        user.Gender = rdr["GENDER"].ToString();
                        user.City = rdr["CITY"].ToString();
                        user.Age = Convert.ToInt32(rdr["AGE"]);
                        user.Mail = rdr["MAIL"].ToString();
                    }
                }
                return user;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteUser(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("DeleteUser", con);
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

        public string SendMail(string mail)
        {
            try
            {

                SmtpClient client = new SmtpClient();
                client.Port = 587;
                client.Host = "smtp.gmail.com";
                client.EnableSsl = true;
                client.Timeout = 10000;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Credentials = new System.Net.NetworkCredential("req.gruppe1@gmail.com", "requirement");

                MailMessage mm = new MailMessage("req.gruppe1@gmail.com", mail, "test", "test");
                mm.BodyEncoding = UTF8Encoding.UTF8;
                mm.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;

                client.Send(mm);

                return "OK";
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
