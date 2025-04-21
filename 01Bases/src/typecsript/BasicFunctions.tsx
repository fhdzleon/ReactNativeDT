//* Aqui es importante entender que si una funcion no tiene una dependencia con el estado del componente,
//* debe ir por fuera del cuerpo del componente, si dependiera del estado iria por dentro

const addNumbers = (a: number, b: number) => a + b;

const BasicFunctions = () => {
  return (
    <div>
      <p>Funciones basicas</p>
      <p>Resultado de 2 + 8 = {addNumbers(2, 8)}</p>
    </div>
  );
};

export default BasicFunctions;
