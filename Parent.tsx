// Child Component (arguments use kare chhe)
function Child({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
    </div>
  )
}

// Parent Component
function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>

      {/* Arguments pass from Parent */}
      <Child name="Rahul" age={22} />
      <Child name="Neha" age={25} />
    </div>
  )
}

export default Parent
