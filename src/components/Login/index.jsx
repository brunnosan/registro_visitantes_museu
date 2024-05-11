import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const Login = () => {

  const title = (
    <>
      <img src="/src/images/_5f77e5d4-1409-47a8-9d7a-d80a97510983.jpg" alt="Image" height="50" classname="mb-3" />
      <h1>Login</h1>
    </>
  )

  return (
    <>
      <div className="flex">
        <Card title={title} className="text-center lg:w-6">
          <div classname="field">
            <label for="user" classname="block text-900 font-medium mb-2">Usuário</label>
            <InputText id="user" type="text" classname="w-full mb-3" />
          </div>
          <div classname="field">
            <label for="password" classname="block text-900 font-medium mb-2">Senha</label>
            <InputText id="password" type="password" classname="w-full mb-3" />
          </div>
          <Button label="Sign In" icon="pi pi-user" classname="w-full"></Button>
        </Card>
      </div>
    </>
  );
}
 
export default Login;