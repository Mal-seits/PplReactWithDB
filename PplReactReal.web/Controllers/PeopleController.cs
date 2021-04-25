using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using PplReactReal.data;

namespace PplReactReal.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConnectionString");
        }
        [HttpGet]
        [Route("GetAllPeople")]
        public List<Person> GetAllPeople()
        {
            var repository = new PeopleRepository(_connectionString);
            return repository.GetAllPeople();
        }
        [HttpGet]
        [Route("GetById")]
        public Person GetById(Person person)
        {
            var repository = new PeopleRepository(_connectionString);
            return repository.GetById(person.Id);
        }

        [HttpPost]
        [Route("AddPerson")]
        public void AddPerson(Person person)
        {
            var repository = new PeopleRepository(_connectionString);
            repository.AddPerson(person);
        }
        [HttpPost]
        [Route("EditPerson")]
        public void EditPerson(Person person)
        {
            var repository = new PeopleRepository(_connectionString);
            repository.EditPerson(person);
        }
        [HttpPost]
        [Route("DeletePerson")]
        public void DeletePerson(Person person)
        {
            var repository = new PeopleRepository(_connectionString);
            repository.DeletePerson(person.Id);
        }
    }
}
