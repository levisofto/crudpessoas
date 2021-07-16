import { PeopleController } from './people.controller';
import { PersonService } from './shared/person.service';
import { PersonRepository } from './person.repository';

describe('PeopleController', () => {
  let peopleController: PeopleController;
  let personService: PersonService;
  let personRepository: PersonRepository;

  beforeEach(() => {
    personRepository = new PersonRepository();
    personService = new PersonService(personRepository);
    peopleController = new PeopleController(personService);
  });

  describe('getAll', () => {
    it('should return an array of people', async () => {
      const result = [
        {
          id: 1,
          nome: "Rafael",
          cpf: "68612212034",
          address: []
        }
      ];

      jest.spyOn(personService, 'getAll')
        .mockImplementation(() => new Promise((resolve) => resolve(result)));

      expect(await peopleController.getAll()).toBe(result);
    });
  });

  describe('getById', () => {
    it('should return a person by id', async () => {
      const result = {
        id: 1,
        nome: "Rafael",
        cpf: "68612212034",
        address: []
      };

      jest.spyOn(personService, 'getById')
        .mockImplementation(() => new Promise((resolve) => resolve(result)));

      expect(await peopleController.getById(1)).toBe(result);
    });
  });
});