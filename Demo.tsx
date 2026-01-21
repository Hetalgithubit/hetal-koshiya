function Add() {
  let a = 30;
  let b = 20;

  if (a < b) {
    console.log("a");
  } else {
    console.log("b");
  }

  return null; 
}

function Sub() {
  return (
    <h1>New function</h1>
  );
}

function Demo() {
  return (
    <div>
      <Add />
      <Sub />
      <h1>Hello World</h1>
    </div>
  );
}

export default Demo;
