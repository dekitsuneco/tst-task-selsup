# SelSup test task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About

### Редактор параметров

Есть следующие структуры данных, описывающих товар – интерфейс Model и набор параметров этого товара. Необходимо реализовать на React компоненты, которые позволяют редактировать структуру Model – проставлять значения параметров при этом параметры должны выводиться все и сразу должны быть доступны для редактирования, а переданные значения в структуре проставлены в форме редактирования, которые передаются в params: Param[], а так же позволяют получить полную структуру в методе getModel() – содержащую все проставленные значения параметров. Решение должно быть легко расширяемым (например, позволять легко добавлять новые типы параметров – не только текстовые, но например числовые или со списком значений) Ваша реализация должна работать только с текстовыми параметрами Input – тип string.

Решение необходимо оформить в виде одного файла со всеми компонентами и типами которые используются.
```
interface Param {
   id: number;
   name: string;
   type: ‘string’;
}
interface ParamValue {
    paramId: number;
    value: string;
}
interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}
interface Props {
    params: Param[];
        model: Model;
}
class ParamEditor extends React.Component<Props, State> {
    public getModel(): Model {
    }
}
```
Пример структуры:
* params:
```
[
  {
    "id": 1,
    "name": "Назначение"
  },
  {
    "id": 2,
    "name": "Длина"
  }
]
```
* model:
```
{
  "paramValues": [
    {
      "paramId": 1,
      "value": "повседневное"
    },
    {
      "paramId": 2,
      "value": "макси"
    }
  ] 
}
```
