type MyFunction<T> = (param: T) => T;

interface Exec<P = string> {
  exec: MyFunction<P>; 
  error?: Error;
}

const example: Exec = {
  exec: param => `___${param}___`
};

const example2: Exec<number> = {
  exec: param => param * 5
};
const example3: Exec<boolean> = {
  exec: param => param && true
};

example.exec("string");
example2.exec(79);
example3.exec(false);
