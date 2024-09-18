// function echo<GenericParam>(param: GenericParam) {
//   console.log(`param: ${param} type: ${typeof param}`);
// }

const echo = <GenericParam>(param: GenericParam) => {
  console.log(`param: ${param} type: ${typeof param}`);
};

echo("un string");
echo(500);
echo(true);
echo(new Date());
