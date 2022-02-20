import React from "react";

// Interfaces:
interface Param {
  id: number;
  name: string;
  type?: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  model: Model;
}

// External data:
const params: Param[] = [
  { id: 1, name: "Назначение" },
  { id: 2, name: "Длина" },
];

const model: Model = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" },
  ],
};

// Components:
class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getModule = this.getModule.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      model: this.props.model,
    };
  }

  public getModule(event: React.FormEvent<HTMLFormElement>): Model {
    event.preventDefault();
    console.log(this.state.model);
    return this.state.model;
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState((prevState: State) => {
      const model: Model = prevState.model;
      const id: number = event.target.name as unknown as number;
      model.paramValues[id - 1].value = event.target.value;

      return { model };
    });
  };

  render() {
    return (
      <form style={{ maxWidth: "300px", display: "flex", flexDirection: "column" }} onSubmit={this.getModule}>
        <h2>Parameters</h2>

        {this.props.params.map((param: { id: number; name: string }) => (
          <fieldset
            key={param.id}
            style={{
              border: "none",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <label>{param.name}</label>
            <input
              name={`${param.id}`}
              autoFocus={true}
              type="text"
              onChange={this.handleChange}
              value={this.state.model.paramValues[param.id - 1].value}
            />
          </fieldset>
        ))}
        <button style={{ display: "flex", alignSelf: "center", marginTop: "10px" }}>Get Model</button>
      </form>
    );
  }
}

const App = () => {
  return <ParamEditor model={model} params={params} />;
};

export default App;
