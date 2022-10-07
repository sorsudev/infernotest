export const Text = (props) => (
  <div>
    <label for={props.id}>{props.text}</label>
    <input type="text" {...props} />
  </div>
)

export const Password = (props) => (
  <div>
    <label for={props.id}>{props.text}</label>
    <input type="password" {...props} />
  </div>
)

export const Date = (props) => (
  <input type="date" {...props} />
)

export const Datetime = (props) => (
  <input type="datetime" {...props} />
)

export const Email = (props) => (
  <div>
    <label for={props.id}>{props.text}</label>
    <input type="email" {...props} />
  </div>
)

export const Number = (props) => (
  <input type="number" {...props} />
)

export const Search = (props) => (
  <input type="search" {...props} />
)

export const Tel = (props) => (
  <input type="tel" {...props} />
)

export const Time = (props) => (
  <input type="time" {...props} />
)

export const Url = (props) => (
  <input type="url" {...props} />
)

export const Textarea = (props) => (
  <div>
    <label for={props.id}>{props.text}</label>
    <textarea {...props} />
  </div>
)

export const SelectGroup = (props) => {
  const { items } = props;
  delete props.items;
  return (
    <div>
      <label for={props.id}>{props.text}</label>
      <select {...props}>
        {items.map((item) => (
          <optgroup label={item.name}>
            {item.options.map((option) => (
              <option value={option.value}>{option.text}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  )
}

export const Radios = (props) => (
  <div>
    <label>Age:</label>
    <input type="radio" id="under_13" value="under_13" name="user_age" />
    <label for="under_13" class="light">Under 13</label><br />
    <input type="radio" id="over_13" value="over_13" name="user_age" />
    <label for="over_13" class="light" >Over 13</label>
  </div>
)

export const Checkbox = (inputProps, labelProps) => (
  <div>
    <input type="checkbox" {...inputProps} />
    <label {...labelProps}>Business</label>
  </div>
)

export const Button = (props) => (
  <button {...props} >{props.text}</button>
)

export const SubmitButton = (props) => (
  <button type="submit" {...props} >{props.text}</button>
)

export const Legend = (props) => (
  <legend>
    <span className={props.className} >
      {props.position}
    </span>
    {props.text}
  </legend>
)
