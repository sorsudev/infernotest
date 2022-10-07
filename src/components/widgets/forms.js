export const Text = (props) => (
  <div>
    <label for="email">Email:</label>
    <input type="text" id="mail" name="user_email" />
  </div>
)

export const Password = (props) => (
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="user_password" />
  </div>
)

export const Date = (props) => (
  <input type="date" id="name" name="user_name" />
)

export const Datetime = (props) => (
  <input type="datetime" id="name" name="user_name" />
)

export const Email = (props) => (
  <div>
    <label for="email">Email:</label>
    <input type="email" id="mail" name="user_email" />
  </div>
)

export const Number = (props) => (
  <input type="number" id="name" name="user_name" />
)

export const Search = (props) => (
  <input type="search" id="name" name="user_name" />
)

export const Tel = (props) => (
  <input type="tel" id="name" name="user_name" />
)

export const Time = (props) => (
  <input type="time" id="name" name="user_name" />
)

export const Url = (props) => (
  <input type="url" id="name" name="user_name" />
)

export const Textarea = (props) => (
  <div>
  <label for="bio">Bio:</label>
    <textarea id="bio" name="user_bio" />
  </div>
)

export const Select = (props) => (
  <div>
    <label for="job">Job Role:</label>
    <select id="job" name="user_job">
      <optgroup label="Web">
        <option value="frontend_developer">Front-End Developer</option>
        <option value="php_developer">PHP Developer</option>
        <option value="python_developer">Python Developer</option>
        <option value="rails_developer">Rails Developer</option>
        <option value="web_designer">Web Designer</option>
        <option value="wordpress_developer">Wordpress Developer</option>
      </optgroup>
      <optgroup label="Mobile">
        <option value="android_developer">Android Developer</option>
        <option value="ios_developer">IOS Developer</option>
        <option value="mobile_designer">Mobile Designer</option>
      </optgroup>
      <optgroup label="Business">
        <option value="business_owner">Business Owner</option>
        <option value="freelancer">Freelancer</option>
      </optgroup>
    </select>
  </div>
)

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
