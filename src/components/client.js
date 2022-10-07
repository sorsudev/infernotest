import {
  Text,
  Legend,
  Password,
  Textarea,
  SelectGroup,
} from './widgets/forms';

export const New = (props) => (
  <form action="index.html" method="post">
    <h1> Sign Up </h1>

    <fieldset>

      <Legend className="number" position="1" text="Informacion basica" />
      <Text id="name" name="user_name" text="Nombre:" />
      <Password id="password" name="password" text="Contraseña:" />
      <Text id="direccion" name="direccion" text="Dirección:" />
      <Text id="rfc" name="rfc" text="Rfc:" />
      <SelectGroup
        id="job"
        name="job"
        text="Role en su trabajo: "
        items={
          [
            {
              name: "Web",
              options: [
                { value: "frontend_developer", text: "Front-End Developer" },
                { value: "backend_developer", text: "Back-End Developer" }
              ]
            }
          ]
        }
      />
      <Textarea id="notes" name="notes" text="Notas de cliente:" />

    </fieldset>
  </form>
)