const data = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-05-12',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '1992-09-24',
  },
  {
    id: 3,
    firstName: 'Mike',
    lastName: 'Johnson',
    dateOfBirth: '1988-02-18',
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Taylor',
    dateOfBirth: '1996-07-31',
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Brown',
    dateOfBirth: '1980-11-26',
  },
  {
    id: 6,
    firstName: 'Sarah',
    lastName: 'Wilson',
    dateOfBirth: '1983-03-08',
  },
  {
    id: 7,
    firstName: 'James',
    lastName: 'Lee',
    dateOfBirth: '1998-01-15',
  },
  {
    id: 8,
    firstName: 'Linda',
    lastName: 'Davis',
    dateOfBirth: '1987-12-03',
  },
  {
    id: 9,
    firstName: 'Robert',
    lastName: 'Anderson',
    dateOfBirth: '1990-06-20',
  },
  {
    id: 10,
    firstName: 'Karen',
    lastName: 'Garcia',
    dateOfBirth: '1982-04-05',
  },
];

const sleep = function (ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

export default {
  async getResultsAsync(pageNumber, resultsPerPage) {
    const skip = (pageNumber * resultsPerPage) - resultsPerPage;
    const take = (skip + resultsPerPage) > data.length ? data.length : (skip + resultsPerPage);
    const results = data.slice(skip, take);

    await sleep(1350);

    return {
      totalResults: data.length,
      totalPages: Math.ceil(data.length / resultsPerPage),
      results,
    };
  },
};
