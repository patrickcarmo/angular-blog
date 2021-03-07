import { SortByPropertyPipe } from './sort-property.pipe';

const mockData = [
  {
    id: 8,
    date: '2016-09-30',
  },
  {
    id: 2,
    date: '2016-03-16',
  },

  {
    id: 9,
    date: '2016-10-11',
  },
  {
    id: 1,
    date: '2016-02-23',
  },
];

const mockFruits = [
  {
    fruit: 'banana',
  },
  {
    fruit: 'banana',
  },
];

describe('SortByPropertyPipe', () => {
  let pipe: SortByPropertyPipe;

  beforeEach(() => {
    pipe = new SortByPropertyPipe();
  });

  it('should return null when the data is null', () => {
    const expected = pipe.transform(null, 'id', 'ASC');

    expect(expected).toBeNull();
  });

  it('should sort the array by the id property as ASC', () => {
    const result = [
      { id: 1, date: '2016-02-23' },
      { id: 2, date: '2016-03-16' },
      { id: 8, date: '2016-09-30' },
      { id: 9, date: '2016-10-11' },
    ];

    const expected = pipe.transform(mockData, 'id', 'ASC');

    expect(expected).toEqual(result);
  });

  it('should sort the array by the date property as DESC', () => {
    const result = [
      { id: 9, date: '2016-10-11' },
      { id: 8, date: '2016-09-30' },
      { id: 2, date: '2016-03-16' },
      { id: 1, date: '2016-02-23' },
    ];

    const expected = pipe.transform(mockData, 'id', 'DESC');

    expect(expected).toEqual(result);
  });

  it('should return the same data when the values ​​are repeated as ASC', () => {
    const result = mockFruits;

    const expected = pipe.transform(mockFruits, 'fruit', 'ASC');

    expect(expected).toEqual(result);
  });

  it('should return the same data when the values ​​are repeated as DESC', () => {
    const result = mockFruits;

    const expected = pipe.transform(mockFruits, 'fruit', 'DESC');

    expect(expected).toEqual(result);
  });
});
