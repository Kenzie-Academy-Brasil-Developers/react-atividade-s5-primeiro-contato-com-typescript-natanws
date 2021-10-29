import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Input } from "./components/Input";

interface UserData {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [userList, setUserList] = useState<UserData[]>([]);

  const userRegister = (name: string, age: number, hobby: string) => {
    const user = { name, age, hobby };
    setUserList([...userList, user]);
  };

  return (
    <div className="App">
      <header className="App-header">
        {userList.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            age={user.age}
            hobby={user.hobby}
          />
        ))}
        <Input
          placeholder="Seu nome"
          label="Cadastre-se"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Sua idade"
          type="number"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input
          placeholder="Seus hobbies"
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => userRegister(name, age, hobby)}>Enviar</button>
      </header>
    </div>
  );
}

export default App;
