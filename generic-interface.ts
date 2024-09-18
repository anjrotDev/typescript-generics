
interface User {
  id: string;
  name: string;
  age: number;
}


const result: ApiResponse<string> = {
  data: "string",
  status: 200
};
const resultNumber: ApiResponse<number> = {
  data: 500,
  status: 200
};
const resultObj: ApiResponse<User> = {
  data: {
    id: "dfsdf",
    name: "anjrot",
    age: 42
  },
  status: 200
};